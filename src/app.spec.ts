import { SlackApp, SlackAppEnv, ExecutionContext } from "./index";

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
