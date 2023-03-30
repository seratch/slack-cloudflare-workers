import { BeforeAuthorizeMiddleware, Middleware } from "./middleware";

export const urlVerification: BeforeAuthorizeMiddleware = async (req) => {
  if (req.body.type === "url_verification") {
    return { status: 200, body: req.body.challenge };
  }
};

export const sslCheck: BeforeAuthorizeMiddleware = async (req) => {
  if (req.body.ssl_check && req.body.ssl_check === "1") {
    return { status: 200, body: "" };
  }
};

const eventTypesToKeep = ["member_joined_channel", "member_left_channel"];

export const ignoringSelfEvents: Middleware = async (req) => {
  if (req.body.event) {
    if (eventTypesToKeep.includes(req.body.event.type)) {
      return;
    }
    if (
      req.context.authorizeResult.botId === req.body.event.bot_id ||
      req.context.authorizeResult.botUserId === req.context.userId
    ) {
      return { status: 200, body: "" };
    }
  }
};
