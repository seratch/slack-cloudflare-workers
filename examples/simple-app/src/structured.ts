// If you want to use this code instead of index.ts, edit ./wrangler.toml

import { SlackApp, SlackEdgeAppEnv, noopLazyHandler } from "../../../src/index";
import {
  ackCommand,
  ackModalSubmission,
  appMention,
  asyncButtonResponse,
  asyncCommandResponse,
  asyncMessageShortcut,
  asyncModalResponse,
  asyncShortcutResponse,
  helloMessage,
  otherMessages,
} from "./handlers";

export default {
  async fetch(
    request: Request,
    env: SlackEdgeAppEnv,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const app = new SlackApp({ env })
      // when the pattern matches, the framework automatically acknowledges the request
      .event("app_mention", appMention)
      .message("Hello", helloMessage)
      .event("message", otherMessages)
      .action(
        "button-action",
        noopLazyHandler, // complete this within 3 seconds
        asyncButtonResponse,
      )
      .command(
        "/hello-cf-workers",
        ackCommand, // complete this within 3 seconds
        asyncCommandResponse,
      )
      .shortcut(
        "hey-cf-workers",
        noopLazyHandler, // complete this within 3 seconds
        asyncShortcutResponse,
      )
      .messageShortcut(
        "cf-workers-message",
        noopLazyHandler, // complete this within 3 seconds
        asyncMessageShortcut,
      )
      .viewSubmission(
        "modal",
        // respond within 3 seconds to update/close the opening modal
        ackModalSubmission,
        asyncModalResponse,
      );
    return await app.run(request, ctx);
  },
};
