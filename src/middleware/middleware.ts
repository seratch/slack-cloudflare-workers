import { SlackAppEnv } from "../app-env";
import {
  BeforeAuthorizeSlackMiddlwareRequest,
  SlackMiddlwareRequest,
} from "../request/request";
import { SlackResponse } from "../response/response";

export type BeforeAuthorizeMiddleware<E extends SlackAppEnv = SlackAppEnv> = (
  req: BeforeAuthorizeSlackMiddlwareRequest<E>
) => Promise<SlackResponse | void>;

export type Middleware<E extends SlackAppEnv = SlackAppEnv> = (
  req: SlackMiddlwareRequest<E>
) => Promise<SlackResponse | void>;
