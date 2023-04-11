import {
  ExecutionContext,
  SlackOAuthApp,
  KVInstallationStore,
  KV,
  KVStateStore,
  SlackOAuthAndOIDCEnv,
  defaultOpenIDConnectCallback,
} from "../../../src/index";

export interface Env extends SlackOAuthAndOIDCEnv {
  INSTALLATIONS: KV;
  OAUTH_STATES: KV;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const app = new SlackOAuthApp({
      env,
      installationStore: new KVInstallationStore(env, env.INSTALLATIONS),
      stateStore: new KVStateStore(env.OAUTH_STATES),
      oidc: {
        callback: async (token, req) => {
          const handler = defaultOpenIDConnectCallback(env);
          return await handler(token, req);
        },
      },
    }).event("app_mention", async ({ context }) => {
      await context.client.chat.postMessage({
        channel: context.channelId,
        text: `:wave: <@${context.userId}> what's up?`,
      });
    });
    return await app.run(request, ctx);
  },
};
