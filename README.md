## Slack Cloudflware Workers

[![npm version](https://badge.fury.io/js/slack-cloudflare-workers.svg)](https://badge.fury.io/js/slack-cloudflare-workers) 

The "slack-cloudflare-workers" library is a Slack app development framework for Cloudflare Workers. The framework is highly inspired by Slack's [Bolt framework](https://api.slack.com/tools/bolt), but the design is not exactly the same with [bolt-js](https://github.com/slackapi/bolt-js).

The following are key differences:

* TypeScript focused: better type safety and clearer typings for developers
* Lazy listener enabled: [bolt-python's lazy listener feature](https://slack.dev/bolt-python/concepts#lazy-listeners) is enabled out of the box
* Zero additional dependency: no other dependencies apart from TypeScript types

### Getting Started

Let's get started with a Cloudflare Workers project template:

```bash
npm install -g wrangler
npx wrangler generate my-slack-app
```

You will see the following outputs on your terminal window:

```
$ npx wrangler generate my-slack-app
 ⛅️ wrangler 2.13.0
--------------------
Using npm as package manager.
✨ Created my-slack-app/wrangler.toml
✔ Would you like to use git to manage this Worker? … yes
✨ Initialized git repository at my-slack-app
✔ No package.json found. Would you like to create one? … yes
✨ Created my-slack-app/package.json
✔ Would you like to use TypeScript? … yes
✨ Created my-slack-app/tsconfig.json
✔ Would you like to create a Worker at my-slack-app/src/index.ts? › Fetch handler
✨ Created my-slack-app/src/index.ts
✔ Would you like us to write your first test with Vitest? … yes
✨ Created my-slack-app/src/index.test.ts

To start developing your Worker, run `cd my-slack-app && npm start`
To start testing your Worker, run `npm test`
To publish your Worker to the Internet, run `npm run deploy`
```

And then, you can add "slack-cloudflare-workers" to the project:

```bash
cd my-slack-app
npm i slack-cloudflare-workers
```

The project is now ready for coding. Open `src/index.ts` and modify the source code as below:

```typescript
import { SlackApp, SlackAppEnv } from "slack-cloudflare-workers";

export interface Env extends SlackAppEnv {
  SLACK_SIGNING_SECRET: string;
  SLACK_BOT_TOKEN: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const app = new SlackApp(env)
      .event("app_mention", async (req) => {
        await req.context.client.call("chat.postMessage", {
          channel: req.context.channelId,
          text: `:wave: <@${req.context.userId}> what's up?`,
        });
      })
      .command(
        "/hello-cf-workers",
        async () => "Thanks!",
        async (req) => {
          await req.context.respond({
            text: "What's up?",
          });
        }
      )
      .shortcut(
        "hey-cf-workers",
        async () => {},
        async (req) => {
          await req.context.client.call("views.open", {
            trigger_id: req.payload.trigger_id,
            view: {
              type: "modal",
              callback_id: "modal",
              title: { type: "plain_text", text: "My App" },
              submit: { type: "plain_text", text: "Submit" },
              close: { type: "plain_text", text: "Cancel" },
              blocks: [],
            },
          });
        }
      )
      .view("modal", async () => {
        return { response_action: "clear" };
      });
    return await app.run(request, ctx);
  },
};
```

Add the following lines to `wrangler.toml`:

```toml
[vars]
SLACK_SIGNING_SECRET=""
SLACK_BOT_TOKEN=""
SLACK_LOGGING_LEVEL=""
```

Lastly, add a new file named `.dev.vars` with the valid variables:

```
SLACK_SIGNING_SECRET=....
SLACK_BOT_TOKEN=xoxb-...
SLACK_LOGGING_LEVEL=DEBUG
```

OK, let's run the app with [ngrok](https://ngrok.com/) proxy.

```bash
npm start
ngrok http 8787 --subdomain your-domain
```
