import { SlackApp, SlackEdgeAppEnv, isPostedMessageEvent } from "../../../src/index";

export default {
  async fetch(request: Request, env: SlackEdgeAppEnv, ctx: ExecutionContext): Promise<Response> {
    const app = new SlackApp({ env })
      // when the pattern matches, the framework automatically acknowledges the request
      .event("app_mention", async ({ context }) => {
        // You can do anything time-consuing tasks here!
        await context.client.chat.postMessage({
          channel: context.channelId,
          text: `:wave: <@${context.userId}> what's up?`,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `:wave: <@${context.userId}> what's up?`,
              },
              accessory: {
                type: "button",
                text: { type: "plain_text", text: "Click Me" },
                value: "click_me_123",
                action_id: "button-action",
              },
            },
            {
              type: "context",
              elements: [
                {
                  type: "plain_text",
                  text: "This message is posted by an app running on Cloudflare Workers",
                },
              ],
            },
          ],
        });
      })
      .message("Hello", async ({ context }) => {
        await context.say({ text: "Hey!" });
      })
      .event("message", async ({ payload }) => {
        if (isPostedMessageEvent(payload)) {
          console.log(`New message: ${payload.text}`);
        }
      })
      .action(
        "button-action",
        async () => {}, // complete this within 3 seconds
        async ({ context }) => {
          // You can do anything time-consuing tasks here!
          const { respond } = context;
          if (respond) {
            await respond({ text: "Now working on it ..." });
            await sleep(5);
            await respond({ text: "It's done :white_check_mark:" });
          }
        },
      )
      .command(
        "/hello-cf-workers",
        async () => "Thanks!", // complete this within 3 seconds
        async ({ context }) => {
          // You can do anything time-consuing tasks here!
          await context.respond({ text: "What's up?" });
        },
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
        },
      )
      .messageShortcut(
        "cf-workers-message",
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
        },
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
        },
      );
    return await app.run(request, ctx);
  },
};

const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
