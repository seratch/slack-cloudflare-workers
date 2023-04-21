import { AuthorizeError } from "../errors";
import { SlackAPIClient } from "../client/api-client";
import { AuthTestResponse } from "../client/generated-response";
import { Installation } from "./installation";
import { SlackOAuthEnv } from "../app-env";
import {
  InstallationStore,
  InstallationStoreQuery,
} from "./installation-store";
import { Authorize } from "../authorization/authorize";
import { KV } from "../utility/kv";
import { TokenRotator } from "../client/token-rotator";

export class KVInstallationStore<E extends SlackOAuthEnv>
  implements InstallationStore<E>
{
  #env: E;
  #storage: KV;
  #tokenRotator: TokenRotator;

  constructor(env: E, namespace: KV) {
    this.#env = env;
    this.#storage = namespace;
    this.#tokenRotator = new TokenRotator(env);
  }

  async save(
    installation: Installation,
    request: Request | undefined = undefined
  ) {
    await this.#storage.put(
      toBotInstallationKey(this.#env.SLACK_CLIENT_ID, installation),
      JSON.stringify(installation)
    );
    await this.#storage.put(
      toUserInstallationKey(this.#env.SLACK_CLIENT_ID, installation),
      JSON.stringify(installation)
    );
  }

  async findBotInstallation(
    query: InstallationStoreQuery
  ): Promise<Installation | undefined> {
    const storedString = await this.#storage.get(
      toBotInstallationQuery(this.#env.SLACK_CLIENT_ID, query)
    );
    if (storedString) {
      return JSON.parse(storedString);
    }
    return undefined;
  }

  async findUserInstallation(
    query: InstallationStoreQuery
  ): Promise<Installation | undefined> {
    const storedString = await this.#storage.get(
      toUserInstallationQuery(this.#env.SLACK_CLIENT_ID, query)
    );
    if (storedString) {
      return JSON.parse(storedString);
    }
    return undefined;
  }

  toAuthorize(): Authorize<E> {
    return async (req) => {
      const query: InstallationStoreQuery = {
        isEnterpriseInstall: req.context.isEnterpriseinstall,
        enterpriseId: req.context.enterpriseId,
        teamId: req.context.teamId,
        userId: req.context.userId,
      };
      try {
        const bot = await this.findBotInstallation(query);
        if (bot && bot.bot_refresh_token) {
          const maybeRefreshed = await this.#tokenRotator.performRotation(bot);
          if (maybeRefreshed) {
            await this.save(maybeRefreshed);
          }
        }

        const botClient = new SlackAPIClient(bot?.bot_token, this.#env);
        const botAuthTest: AuthTestResponse = await botClient.auth.test();
        const botScopes =
          botAuthTest.headers.get("x-oauth-scopes")?.split(",") ??
          bot?.bot_scopes ??
          [];

        const userQuery: InstallationStoreQuery = {};
        Object.assign(userQuery, query);
        if (this.#env.SLACK_USER_TOKEN_RESOLUTION !== "installer") {
          userQuery.enterpriseId = req.context.actorEnterpriseId;
          userQuery.teamId = req.context.actorTeamId;
          userQuery.userId = req.context.actorUserId;
        }
        const user = await this.findUserInstallation(query);
        if (user && user.user_refresh_token) {
          const maybeRefreshed = await this.#tokenRotator.performRotation(user);
          if (maybeRefreshed) {
            await this.save(maybeRefreshed);
          }
        }

        return {
          enterpriseId: bot?.enterprise_id,
          teamId: bot?.team_id,

          botId: botAuthTest.bot_id!,
          botUserId: botAuthTest.user_id!,
          botToken: bot?.bot_token!,
          botScopes,

          userId: user ? user.user_id : undefined,
          userToken: user?.user_token,
          userScopes: user?.user_scopes,
        };
      } catch (e) {
        throw new AuthorizeError(
          `Failed to authorize (error: ${e}, query: ${JSON.stringify(query)})`
        );
      }
    };
  }
}

export function toBotInstallationQuery(
  clientId: string,
  q: InstallationStoreQuery
): string {
  const e = q.enterpriseId ? q.enterpriseId : "_";
  const t = q.teamId ? q.teamId : "_";
  return `${clientId}/${e}:${t}`;
}

export function toUserInstallationQuery(
  clientId: string,
  q: InstallationStoreQuery
): string {
  const e = q.enterpriseId ? q.enterpriseId : "_";
  const t = q.teamId ? q.teamId : "_";
  const u = q.userId ? q.userId : "_";
  return `${clientId}/${e}:${t}:${u}`;
}

export function toBotInstallationKey(
  clientId: string,
  installation: Installation
): string {
  const e = installation.enterprise_id ?? "_";
  const t = installation.team_id ?? "_";
  return `${clientId}/${e}:${t}`;
}

export function toUserInstallationKey(
  clientId: string,
  installation: Installation
): string {
  const e = installation.enterprise_id ?? "_";
  const t = installation.team_id ?? "_";
  const u = installation.user_id ?? "_";
  return `${clientId}/${e}:${t}:${u}`;
}
