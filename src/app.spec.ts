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
    const app = new SlackApp(env)
      .event("app_mention", async (req) => {
        await req.context.client.call("chat.postMessage", {
          channel: req.context.channelId,
          text: `:wave: <@${req.context.userId}> what's up?`,
        });
      })
      .command(
        "/hello",
        async () => "Thanks!",
        async (req) => {
          await req.context.respond({ text: "What's up?" });
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
      .viewSubmission("modal", async () => {
        return { response_action: "clear" };
      });
    return await app.run(request, ctx);
  },
};
