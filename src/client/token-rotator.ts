import { SlackOAuthEnv } from "../app-env";
import { TokenRotationError } from "../errors";
import { Installation } from "../oauth/installation";
import { SlackAPIClient } from "./api-client";

export class TokenRotator {
  #clientId: string;
  #clientSecret: string;
  #client: SlackAPIClient;

  constructor(env: SlackOAuthEnv) {
    this.#clientId = env.SLACK_CLIENT_ID;
    this.#clientSecret = env.SLACK_CLIENT_SECRET;
    this.#client = new SlackAPIClient(undefined, env);
  }

  async performRotation(
    installation: Installation
  ): Promise<Installation | undefined> {
    const refreshResults: RefreshedResults = {};
    const randomSeconds = Math.round(
      crypto.getRandomValues(new Uint16Array(1))[0] / 100
    );
    const expireAt = new Date().getTime() / 1000 + randomSeconds;
    const botExpiresAt = installation.bot_token_expires_at;
    if (botExpiresAt && botExpiresAt < expireAt) {
      try {
        const response = await this.#client.oauth.v2.access({
          client_id: this.#clientId,
          client_secret: this.#clientSecret,
          grant_type: "refresh_token",
          refresh_token: installation.bot_refresh_token,
        });
        if (
          response &&
          response.access_token &&
          response.refresh_token &&
          response.expires_in
        ) {
          refreshResults.bot = {
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            token_expires_at: new Date().getTime() / 1000 + response.expires_in,
          };
        }
      } catch (e) {
        throw new TokenRotationError(`Failed to refresh a bot token: ${e}`);
      }
    }
    const userExpiresAt = installation.user_token_expires_at;
    if (userExpiresAt && userExpiresAt < expireAt) {
      try {
        const response = await this.#client.oauth.v2.access({
          client_id: this.#clientId,
          client_secret: this.#clientSecret,
          grant_type: "refresh_token",
          refresh_token: installation.user_refresh_token,
        });
        if (
          response &&
          response.access_token &&
          response.refresh_token &&
          response.expires_in
        ) {
          refreshResults.user = {
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            token_expires_at: new Date().getTime() / 1000 + response.expires_in,
          };
        }
      } catch (e) {
        throw new TokenRotationError(`Failed to refresh a user token: ${e}`);
      }
    }
    if (refreshResults.bot || refreshResults.user) {
      const target: any = {};
      Object.assign(target, installation);
      const refreshedInstallation: Installation = target;
      if (refreshResults.bot) {
        refreshedInstallation.bot_token = refreshResults.bot.access_token;
        refreshedInstallation.bot_refresh_token =
          refreshResults.bot.refresh_token;
        refreshedInstallation.bot_token_expires_at =
          refreshResults.bot.token_expires_at;
      }
      if (refreshResults.user) {
        refreshedInstallation.user_token = refreshResults.user.access_token;
        refreshedInstallation.user_refresh_token =
          refreshResults.user.refresh_token;
        refreshedInstallation.user_token_expires_at =
          refreshResults.user.token_expires_at;
      }
      return refreshedInstallation;
    }
    return undefined;
  }
}

interface RefreshedResults {
  bot?: {
    access_token: string;
    refresh_token: string;
    token_expires_at: number;
  };
  user?: {
    access_token: string;
    refresh_token: string;
    token_expires_at: number;
  };
}
