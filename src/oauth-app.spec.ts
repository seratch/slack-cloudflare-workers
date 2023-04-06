import {
  SlackAppEnv,
  ExecutionContext,
  SlackOAuthApp,
  KVInstallationStore,
  KV,
  KVStateStore,
} from "./index";

export interface Env extends SlackAppEnv {
  SLACK_SIGNING_SECRET: string;
  SLACK_CLIENT_ID: string;
  SLACK_CLIENT_SECRET: string;
  SLACK_BOT_SCOPES: string;
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
    }).event("app_mention", async ({ context }) => {
      await context.client.chat.postMessage({
        channel: context.channelId,
        text: `:wave: <@${context.userId}> what's up?`,
      });
    });
    return await app.run(request, ctx);
  },
};
