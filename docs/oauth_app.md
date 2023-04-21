## OAuth-enabled App

If you haven't set up your project yet, please go through the steps [here](./index.md) first. With the project set up, it's time to dive into the code. Open `src/index.ts` and modify the source code as follows:

```typescript
import {
  SlackOAuthApp,
  KVInstallationStore,
  KV,
  KVStateStore,
  SlackOAuthAndOIDCEnv,
  defaultOpenIDConnectCallback, // optional
} from "slack-cloudflare-workers";

export interface Env extends SlackOAuthAndOIDCEnv {
  SLACK_INSTALLATIONS: KV;
  SLACK_OAUTH_STATES: KV;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const app = new SlackOAuthApp({
      env,
      installationStore: new KVInstallationStore(env, env.SLACK_INSTALLATIONS),
      stateStore: new KVStateStore(env.SLACK_OAUTH_STATES),
      oidc: { // optional
        callback: async (token, req) => {
          // perhaps, you may want to save the result and display a web page or redirect the user to somewhere else
          const handler = defaultOpenIDConnectCallback(env);
          return await handler(token, req);
        },
      },
    }).event("app_mention", async ({ context }) => {
      await context.client.chat.postMessage({
        channel: context.channelId,
        text: `:wave: <@${context.userId}> what's up?`,
      });
    }).command('/cf-workers-oauth', async ({ context }) => {
      await context.respond({ text: "Hi!" });
    });
    return await app.run(request, ctx);
  },
};
```

First off, let's start by creating KV namespaces:

```bash
# For published app
wrangler kv:namespace create SLACK_INSTALLATIONS
wrangler kv:namespace create SLACK_OAUTH_STATES

# For local development
wrangler kv:namespace create SLACK_INSTALLATIONS --preview
wrangler kv:namespace create SLACK_OAUTH_STATES --preview
```

Add these namespaces with their IDs and preview IDs to `wrangler.toml`:

```
kv_namespaces = [
  { binding = "SLACK_INSTALLATIONS", id = "976f5703de1b44cdab3826d9025f43ad", preview_id = "68b91d924b9e45189e7562ac12950e63" },
  { binding = "SLACK_OAUTH_STATES", id = "428a7013ffb14465b4935a13fffb3afb", preview_id = "1dd1494816ef4d998d7d47e6c27d53a2" },
]
```

Then, create a new file named `.dev.vars` and include the valid variables:

```
SLACK_SIGNING_SECRET=...
SLACK_CLIENT_ID=...
SLACK_CLIENT_SECRET=...
SLACK_BOT_SCOPES=chat:write,app_mentions:read
# Optional
SLACK_USER_SCOPES=search:read
SLACK_REDIRECT_URI=https://your-domain.ngrok.io/slack/oauth_redirect
SLACK_OIDC_REDIRECT_URI=https://your-domain.ngrok.io/slack/login/callback
```

Now, it's time to run the app using the [ngrok](https://ngrok.com/) proxy.

```bash
npm start
ngrok http 8787 --subdomain your-domain
```

Did the app work for you? :tada: Congratulations! Your first Slack app built with Cloudflare Workers is now up and running! Add more handlers to the app to help your teammates become even more productive!

Once you finish working on the app development, now you can deploy the app to Cloudflare infrastructure.

```bash
wrangler publish

wrangler secret put SLACK_SIGNING_SECRET
wrangler secret put SLACK_CLIENT_ID
wrangler secret put SLACK_CLIENT_SECRET
wrangler secret put SLACK_BOT_SCOPES
# Optional: this is necessary only when you need to do something on behalf of users
wrangler secret put SLACK_USER_SCOPES
# Optional: this is necessary when you have multiple redirect URIs
wrangler secret put SLACK_REDIRECT_URI
# Optional: this is necessary only when you enable "Sign in with Slack (OpenID Connect)"
wrangler secret put SLACK_OIDC_REDIRECT_URI
```

Refer to [Cloudflware's documents](https://developers.cloudflare.com/workers/platform/deployments/) for details.
