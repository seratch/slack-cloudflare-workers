import {
  ExecutionContext,
  SlackOAuthApp,
  KVInstallationStore,
  KVStateStore,
  SlackOAuthAndOIDCEnv,
  defaultOpenIDConnectCallback,
} from "../../../src/index";
import { KVNamespace } from "@cloudflare/workers-types";

type Env = SlackOAuthAndOIDCEnv & {
  SLACK_INSTALLATIONS: KVNamespace;
  SLACK_OAUTH_STATES: KVNamespace;
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const app = new SlackOAuthApp({
      env,
      installationStore: new KVInstallationStore(env, env.SLACK_INSTALLATIONS),
      stateStore: new KVStateStore(env.SLACK_OAUTH_STATES),
      oidc: {
        callback: async (args) => {
          const handler = defaultOpenIDConnectCallback;
          return await handler(args);
        },
      },
    })
      .event("app_mention", async ({ context }) => {
        await context.client.chat.postMessage({
          channel: context.channelId,
          text: `:wave: <@${context.userId}> what's up?`,
        });
      })
      .command("/cf-workers-oauth", async ({ context }) => {
        await context.respond({ text: "Hi!" });
      });
    return await app.run(request, ctx);
  },
};
