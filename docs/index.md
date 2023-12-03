## Slack Cloudflare Workers

[![npm version](https://badge.fury.io/js/slack-cloudflare-workers.svg)](https://badge.fury.io/js/slack-cloudflare-workers) 

The **slack-cloudflare-workers** library is a Slack app development framework designed specifically for **Cloudflare Workers**. This framework draws significant inspiration from Slack's [Bolt framework](https://api.slack.com/tools/bolt), but its design does not strictly follow the [bolt-js](https://github.com/slackapi/bolt-js) blueprint.

Key differences include:

* **TypeScript focused**: Enhances type safety and clarifies typings for developers
* **Lazy listener enabled**: [bolt-python's lazy listener feature](https://slack.dev/bolt-python/concepts#lazy-listeners) is provided out of the box
* **Zero additional dependencies**: No other dependencies required beyond TypeScript types

## Getting Started

Let's begin by using a Cloudflare Workers project template to kickstart our project:

```bash
npm install -g wrangler@latest
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
npm i slack-cloudflare-workers@latest
```

When you build a Slack app, there are two types. The next steps can be different depending on which type of app you want to build:

* [Simple app](./simple_app.md), which runs for a single Slack workspace
* [OAuth enabled app](./oauth_app.md), which can be installed into multiple workspaces

If you're new to Slack app development, we recommend starting with a simple app!
