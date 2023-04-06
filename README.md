## Slack Cloudflare Workers

[![npm version](https://badge.fury.io/js/slack-cloudflare-workers.svg)](https://badge.fury.io/js/slack-cloudflare-workers) 

The **slack-cloudflare-workers** library is a Slack app development framework designed specifically for **Cloudflare Workers**. This framework draws significant inspiration from Slack's [Bolt framework](https://api.slack.com/tools/bolt), but its design does not strictly follow the [bolt-js](https://github.com/slackapi/bolt-js) blueprint.

Key differences include:

* _TypeScript focused_: Enhances type safety and clarifies typings for developers
* _Lazy listener enabled_: [bolt-python's lazy listener feature](https://slack.dev/bolt-python/concepts#lazy-listeners) is provided out of the box
* _Zero additional dependencies_: No other dependencies required beyond TypeScript types

### Getting Started

Let's begin by using a Cloudflare Workers project template to kickstart our project:

```bash
npm install -g wrangler
npx wrangler generate my-slack-app
```

You will see the following outputs displayed in your terminal window:

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

Next, you can integrate the slack-cloudflare-workers library to your project by following these steps:

```bash
cd my-slack-app
npm i slack-cloudflare-workers
```

With the project set up, it's time to dive into the code. Open `src/index.ts` and modify the source code as follows:

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
    const app = new SlackApp({ env })
      // when the pattern matches, the framework automatically acknowledges the request
      .event("app_mention", async ({ context }) => {
        // You can do anything time-consuing tasks here!
        await context.client.chat.postMessage({
          channel: context.channelId,
          text: `:wave: <@${context.userId}> what's up?`,
        });
      })
      .command(
        "/hello",
        async () => "Thanks!", // complete this within 3 seconds
        async ({ context }) => {
          // You can do anything time-consuing tasks here!
          await context.respond({ text: "What's up?" });
        }
      )
      .shortcut(
        "hey-cf-workers",
        async () => {}, // complete this within 3 seconds
        async ({ context, payload }) => {
          // You can do anything time-consuing tasks here!
          await context.client.views.open({
            // trigger_id still needs to be used within 3 seconds
            trigger_id: payload.trigger_id,
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
      .viewSubmission(
        "modal",
        // respond within 3 seconds to update/close the opening modal
        async () => {
          return { response_action: "clear" };
        },
        async (req) => {
          // Except updating the modal view using response_action,
          // you can asynchronously do any tasks here!
        }
      );
    return await app.run(request, ctx);
  },
};
```

Incorporate the following lines to your `wrangler.toml` configuration:

```toml
[vars]
SLACK_SIGNING_SECRET=""
SLACK_BOT_TOKEN=""
SLACK_LOGGING_LEVEL=""
```

Then, create a new file named `.dev.vars` and include the valid variables:

```
SLACK_SIGNING_SECRET=....
SLACK_BOT_TOKEN=xoxb-...
SLACK_LOGGING_LEVEL=DEBUG
```

Now, it's time to run the app using the [ngrok](https://ngrok.com/) proxy.

```bash
npm start
ngrok http 8787 --subdomain your-domain
```

:tada: Congratulations! Your first Slack app built with Cloudflare Workers is now up and running! Add more handlers to the app to help your teammates become even more productive! 