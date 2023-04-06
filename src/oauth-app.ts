import { ExecutionContext } from "./app";
import { SlackApp } from "./app";
import { SlackOAuthEnv } from "./app-env";
import { InstallationStore } from "./oauth/installation-store";
import { NoStorageStateStore, StateStore } from "./oauth/state-store";
import {
  renderCompletionPage,
  renderErrorPage,
  renderStartPage,
} from "./oauth/oauth-page-renderer";
import {
  generateAuthorizeUrl,
  generateOIDCAuthorizeUrl,
} from "./oauth/authorize-url-generator";
import { parse as parseCookie } from "cookie";
import { SlackAPIClient } from "./client/api-client";
import { toInstallation } from "./oauth/installation";
import { AfterInstallation, BeforeInstallation } from "./oauth/callback";
import { OpenIDConnectCallback } from "./oidc/callback";
import { OpenIDConnectTokenResponse } from "./client/generated-response";
import { ConfigError } from "./errors";

export interface SlackOAuthAppOptions<E extends SlackOAuthEnv> {
  env: E;
  installationStore: InstallationStore<E>;
  stateStore?: StateStore;
  oauth?: {
    stateCookieName?: string;
    beforeInstallation?: BeforeInstallation;
    afterInstallation?: AfterInstallation;
  };
  oidc?: {
    stateCookieName?: string;
    callback: OpenIDConnectCallback;
  };
  routes?: {
    events: string;
    oauth: { start: string; callback: string };
    oidc?: { start: string; callback: string };
  };
}

export class SlackOAuthApp<E extends SlackOAuthEnv> extends SlackApp<E> {
  public env: E;
  public installationStore: InstallationStore<E>;
  public stateStore: StateStore;
  public oauth?: {
    stateCookieName?: string;
    beforeInstallation?: BeforeInstallation;
    afterInstallation?: AfterInstallation;
  };
  public oidc?: {
    stateCookieName?: string;
    callback: OpenIDConnectCallback;
  };
  public routes: {
    events: string;
    oauth: { start: string; callback: string };
    oidc?: { start: string; callback: string };
  };

  constructor(options: SlackOAuthAppOptions<E>) {
    super({
      env: options.env,
      authorize: options.installationStore.toAuthorize(),
      routes: { events: options.routes?.events ?? "/slack/events" },
    });
    this.env = options.env;
    this.installationStore = options.installationStore;
    this.stateStore = options.stateStore ?? new NoStorageStateStore();
    this.oauth = options.oauth;
    if (this.oauth && !this.oauth.stateCookieName) {
      this.oauth.stateCookieName = "slack-app-oauth-state";
    }
    this.oidc = options.oidc;
    if (this.oidc && !this.oidc.stateCookieName) {
      this.oidc.stateCookieName = "slack-app-oidc-state";
    }
    this.routes = options.routes
      ? options.routes
      : {
          events: "/slack/events",
          oauth: {
            start: "/slack/install",
            callback: "/slack/oauth_redirect",
          },
        };
  }

  async run(request: Request, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === "GET") {
      if (url.pathname === this.routes.oauth.start) {
        return await this.handleOAuthStartRequest(request);
      } else if (url.pathname === this.routes.oauth.callback) {
        return await this.handleOAuthCallbackRequest(request);
      }
      if (this.routes.oidc) {
        if (url.pathname === this.routes.oidc.start) {
          return await this.handleOIDCStartRequest(request);
        } else if (url.pathname === this.routes.oidc.callback) {
          return await this.handleOIDCCallbackRequest(request);
        }
      }
    } else if (request.method === "POST") {
      if (url.pathname === this.routes.events) {
        return await this.handleEventRequest(request, ctx);
      }
    }
    return new Response("Not found", { status: 404 });
  }

  async handleEventRequest(
    request: Request,
    ctx: ExecutionContext
  ): Promise<Response> {
    return await super.handleEventRequest(request, ctx);
  }

  async handleOAuthStartRequest(request: Request): Promise<Response> {
    if (!this.oauth) {
      throw new ConfigError(
        "To enable Slack's OAuth flow, you need to pass env.oauth settings to the app."
      );
    }
    const stateValue = await this.stateStore.issueNewState();
    const authorizeUrl = generateAuthorizeUrl(stateValue, this.env);
    return new Response(renderStartPage(authorizeUrl), {
      status: 302,
      headers: {
        Location: authorizeUrl,
        "Set-Cookie": `${this.oauth.stateCookieName}=${stateValue}; Secure; HttpOnly; Path=/; Max-Age=300`,
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }

  async handleOAuthCallbackRequest(request: Request): Promise<Response> {
    if (!this.oauth) {
      throw new ConfigError(
        "To enable Slack's OAuth flow, you need to pass env.oauth settings to the app."
      );
    }
    // State parameter validation
    await this.#validateStateParameter(request, this.oauth.stateCookieName!);

    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    if (!code) {
      // TODO: add callback for this
      return new Response(
        renderErrorPage(this.routes.oauth.start, "code parameter is missing"),
        { status: 400 }
      );
    }

    try {
      // Execute the installation process
      const client = new SlackAPIClient();
      const oauthAccess = await client.oauth.v2.access({
        client_id: this.env.SLACK_CLIENT_ID,
        client_secret: this.env.SLACK_CLIENT_SECRET,
        code,
      });

      // Store the installation data on this app side
      await this.installationStore.save(toInstallation(oauthAccess), request);

      // Build the completion page
      const authTest = await client.auth.test({
        token: oauthAccess.access_token,
      });
      const enterpriseUrl = authTest.url;
      return new Response(
        renderCompletionPage(
          oauthAccess.app_id!,
          oauthAccess.team?.id!,
          oauthAccess.is_enterprise_install,
          enterpriseUrl
        ),
        {
          status: 200,
          headers: {
            "Set-Cookie": `${this.oauth.stateCookieName}=deleted; Secure; HttpOnly; Path=/; Max-Age=0`,
            "Content-Type": "text/html; charset=utf-8",
          },
        }
      );
    } catch (e) {
      // TODO: add callback for this
      console.log(e);
      const reason = `installation failure (error: ${e})`;
      return new Response(renderErrorPage(this.routes.oauth.start, reason), {
        status: 400,
      });
    }
  }

  async handleOIDCStartRequest(request: Request): Promise<Response> {
    if (!this.oidc) {
      throw new ConfigError(
        "To enable Sign in with Slack (OpenID Connect), you need to pass env.oidc settings to the app."
      );
    }
    const stateValue = await this.stateStore.issueNewState();
    const authorizeUrl = generateOIDCAuthorizeUrl(stateValue, this.env);
    return new Response(renderStartPage(authorizeUrl), {
      status: 302,
      headers: {
        Location: authorizeUrl,
        "Set-Cookie": `${this.oidc.stateCookieName}=${stateValue}; Secure; HttpOnly; Path=/; Max-Age=300`,
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }

  async handleOIDCCallbackRequest(request: Request): Promise<Response> {
    if (!this.oidc) {
      throw new ConfigError(
        "To enable Sign in with Slack (OpenID Connect), you need to pass env.oidc settings to the app."
      );
    }
    // State parameter validation
    await this.#validateStateParameter(request, this.oidc!.stateCookieName!);

    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    if (!code) {
      // TODO: add callback for this
      return new Response(
        renderErrorPage(this.routes.oauth.start, "code parameter is missing"),
        { status: 400 }
      );
    }

    try {
      const client = new SlackAPIClient();
      const apiResponse: OpenIDConnectTokenResponse =
        await client.openid.connect.token({
          client_id: this.env.SLACK_CLIENT_ID,
          client_secret: this.env.SLACK_CLIENT_SECRET,
          code,
        });
      return await this.oidc.callback(apiResponse, request);
    } catch (e) {
      // TODO: add callback for this
      console.log(e);
      const reason = `installation failure (error: ${e})`;
      return new Response(renderErrorPage(this.routes.oauth.start, reason), {
        status: 400,
      });
    }
  }

  async #validateStateParameter(request: Request, cookieName: string) {
    const { searchParams } = new URL(request.url);
    const queryState = searchParams.get("state");
    const cookie = parseCookie(request.headers.get("Cookie") || "");
    const cookieState = cookie[cookieName];
    if (queryState !== cookieState) {
      // TODO: add callback for this
      return new Response(
        renderErrorPage(this.routes.oauth.start, "invalid state parameter"),
        { status: 400 }
      );
    }
  }
}
