import { SlackAppEnv } from "./app-env";
import { parseRequestBody } from "./request/request-parser";
import { verifySlackRequest } from "./request/request-verification";
import { AckResponse, SlackHandler } from "./handler/handler";
import { SlackRequestBody } from "./request/request-body";
import {
  BeforeAuthorizeSlackMiddlwareRequest,
  SlackRequestWithRespond,
  SlackMiddlwareRequest,
  SlackRequestWithOptionalRespond,
  SlackRequest,
} from "./request/request";
import { SlashCommand } from "./request/payload/slash-command";
import { toResponse } from "./response/response";
import {
  SlackEvent,
  SlackEvents,
  MessageEvents,
} from "./request/payload/event";
import { SlackAPIClient } from "./utility/api-client";
import { ResponseUrlSender } from "./utility/response-url-sender";
import {
  BeforeAuthorizeSlackAppContext,
  builtBaseContext,
  SlackAppContext,
  SlackAppContextWithRespond,
} from "./context/context";
import { BeforeAuthorizeMiddleware, Middleware } from "./middleware/middleware";
import { isDebugLogEnabled, prettyPrint } from "./utility/debug-logging";
import { Authorize, singleTeamAuthorize } from "./authorization/authorize";
import { AuthorizeResult } from "./authorization/authorize-result";
import {
  ignoringSelfEvents,
  sslCheck,
  urlVerification,
} from "./middleware/built-in-middleware";
import { ConfigError } from "./errors";
import { GlobalShortcut } from "./request/payload/global-shortcut";
import { MessageShortcut } from "./request/payload/message-shortcut";
import {
  BlockAction,
  BlockElementAction,
  BlockElementTypes,
} from "./request/payload/block-action";
import { ViewSubmission } from "./request/payload/view-submission";
import { ViewClosed } from "./request/payload/view-closed";
import { BlockSuggestion } from "./request/payload/block-suggestion";
import {
  OptionsAckResponse,
  SlackOptionsHandler,
} from "./handler/options-handler";
import { SlackViewHandler, ViewAckResponse } from "./handler/view-handler";
import {
  MessageAckResponse,
  SlackMessageHandler,
} from "./handler/message-handler";

export interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}

export class SlackApp<E extends SlackAppEnv> {
  public env: E;
  public client: SlackAPIClient;
  public authorize: Authorize;

  public beforeAuthorizeMiddleware: BeforeAuthorizeMiddleware<any>[] = [
    urlVerification,
    sslCheck,
  ];

  public afterAuthorizeMiddleware: Middleware<any>[] = [ignoringSelfEvents];

  #slashCommands: ((
    body: SlackRequestBody
  ) => SlackMessageHandler<E, SlashCommand> | null)[] = [];
  #events: ((
    body: SlackRequestBody
  ) => SlackHandler<E, SlackEvent<string>> | null)[] = [];
  #globalShorcuts: ((
    body: SlackRequestBody
  ) => SlackHandler<E, GlobalShortcut> | null)[] = [];
  #messageShorcuts: ((
    body: SlackRequestBody
  ) => SlackHandler<E, MessageShortcut> | null)[] = [];
  #blockActions: ((
    body: SlackRequestBody
  ) => SlackHandler<E, BlockAction<any>> | null)[] = [];
  #blockSuggestions: ((
    body: SlackRequestBody
  ) => SlackOptionsHandler<E, BlockSuggestion> | null)[] = [];
  #viewSubmissions: ((
    body: SlackRequestBody
  ) => SlackViewHandler<E, ViewSubmission> | null)[] = [];
  #viewClosed: ((
    body: SlackRequestBody
  ) => SlackViewHandler<E, ViewClosed> | null)[] = [];

  constructor(env: E, authorize: Authorize = singleTeamAuthorize) {
    if (
      env.SLACK_BOT_TOKEN === undefined &&
      authorize === singleTeamAuthorize
    ) {
      throw new ConfigError(
        "When you don't pass env.SLACK_BOT_TOKEN, your own authorize function, which supplies a valid token to use, needs to be passed instead."
      );
    }
    this.env = env;
    this.client = new SlackAPIClient(env.SLACK_BOT_TOKEN);
    this.authorize = authorize;
  }

  beforeAuthorize(middleware: BeforeAuthorizeMiddleware<E>): SlackApp<E> {
    this.beforeAuthorizeMiddleware.push(middleware);
    return this;
  }

  middleware(middleware: Middleware<E>): SlackApp<E> {
    return this.afterAuthorize(middleware);
  }

  use(middleware: Middleware<E>): SlackApp<E> {
    return this.afterAuthorize(middleware);
  }

  afterAuthorize(middleware: Middleware<E>): SlackApp<E> {
    this.afterAuthorizeMiddleware.push(middleware);
    return this;
  }

  command(
    pattern: StringOrRegExp,
    ack: (
      req: SlackRequestWithRespond<E, SlashCommand>
    ) => Promise<MessageAckResponse>,
    lazy: (
      req: SlackRequestWithRespond<E, SlashCommand>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackMessageHandler<E, SlashCommand> = { ack, lazy };
    this.#slashCommands.push((body) => {
      if (!body.command) {
        return null;
      }
      if (typeof pattern === "string" && body.command === pattern) {
        return handler;
      } else if (
        typeof pattern === "object" &&
        pattern instanceof RegExp &&
        body.command.match(pattern)
      ) {
        return handler;
      }
      return null;
    });
    return this;
  }

  event<Type extends string>(
    event: Type,
    lazy: (req: EventRequest<E, Type>) => Promise<void>
  ): SlackApp<E> {
    this.#events.push((body) => {
      if (body.type !== "event_callback" || !body.event) {
        return null;
      }
      if (body.event.type === event) {
        return { ack: async () => "", lazy };
      }
      return null;
    });
    return this;
  }

  anyMessage(lazy: MessageEventHandler<E>): SlackApp<E> {
    return this.message(undefined, lazy);
  }

  message(
    pattern: MessageEventPattern,
    lazy: MessageEventHandler<E>
  ): SlackApp<E> {
    this.#events.push((body) => {
      if (
        body.type !== "event_callback" ||
        !body.event ||
        body.event.type !== "message"
      ) {
        return null;
      }
      if (
        body.event.subtype === undefined ||
        body.event.subtype === "bot_message" ||
        body.event.subtype === "thread_broadcast" ||
        body.event.subtype === "file_share"
      ) {
        let matched = true;
        if (pattern !== undefined) {
          if (typeof pattern === "string") {
            matched = body.event.text!.includes(pattern);
          }
          if (typeof pattern === "object") {
            matched = body.event.text!.match(pattern) !== null;
          }
        }
        if (matched) {
          return { ack: async (_: EventRequest<E, "message">) => "", lazy };
        }
      }
      return null;
    });
    return this;
  }

  shortcut(
    callbackId: StringOrRegExp,
    ack: (
      req:
        | SlackRequest<E, GlobalShortcut>
        | SlackRequestWithRespond<E, MessageShortcut>
    ) => Promise<AckResponse>,
    lazy: (
      req:
        | SlackRequest<E, GlobalShortcut>
        | SlackRequestWithRespond<E, MessageShortcut>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    return this.globalShortcut(callbackId, ack, lazy).messageShortcut(
      callbackId,
      ack,
      lazy
    );
  }

  globalShortcut(
    callbackId: StringOrRegExp,
    ack: (req: SlackRequest<E, GlobalShortcut>) => Promise<AckResponse>,
    lazy: (
      req: SlackRequest<E, GlobalShortcut>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackHandler<E, GlobalShortcut> = { ack, lazy };
    this.#globalShorcuts.push((body) => {
      if (body.type !== "shortcut" || !body.callback_id) {
        return null;
      }
      if (typeof callbackId === "string" && body.callback_id === callbackId) {
        return handler;
      } else if (
        typeof callbackId === "object" &&
        callbackId instanceof RegExp &&
        body.callback_id.match(callbackId)
      ) {
        return handler;
      }
      return null;
    });
    return this;
  }

  messageShortcut(
    callbackId: StringOrRegExp,
    ack: (
      req: SlackRequestWithRespond<E, MessageShortcut>
    ) => Promise<AckResponse>,
    lazy: (
      req: SlackRequestWithRespond<E, MessageShortcut>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackHandler<E, MessageShortcut> = { ack, lazy };
    this.#messageShorcuts.push((body) => {
      if (body.type !== "message_action" || !body.callback_id) {
        return null;
      }
      if (typeof callbackId === "string" && body.callback_id === callbackId) {
        return handler;
      } else if (
        typeof callbackId === "object" &&
        callbackId instanceof RegExp &&
        body.callback_id.match(callbackId)
      ) {
        return handler;
      }
      return null;
    });
    return this;
  }

  action<
    T extends BlockElementTypes,
    A extends BlockAction<BlockElementAction<T>> = BlockAction<
      BlockElementAction<T>
    >
  >(
    constraints:
      | StringOrRegExp
      | { type: T; block_id?: string; action_id: string },
    ack: (req: SlackRequestWithOptionalRespond<E, A>) => Promise<AckResponse>,
    lazy: (
      req: SlackRequestWithOptionalRespond<E, A>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackHandler<E, A> = { ack, lazy };
    this.#blockActions.push((body) => {
      if (body.type !== "block_actions" || !body.actions || !body.actions[0]) {
        return null;
      }
      const action = body.actions[0];
      if (typeof constraints === "string" && action.action_id === constraints) {
        return handler;
      } else if (typeof constraints === "object") {
        if (constraints instanceof RegExp) {
          if (action.action_id.match(constraints)) {
            return handler;
          }
        } else if (constraints.type) {
          if (action.type === constraints.type) {
            if (action.action_id === constraints.action_id) {
              if (
                constraints.block_id &&
                action.block_id !== constraints.block_id
              ) {
                return null;
              }
              return handler;
            }
          }
        }
      }
      return null;
    });
    return this;
  }

  options(
    constraints: StringOrRegExp | { block_id?: string; action_id: string },
    ack: (req: SlackRequest<E, BlockSuggestion>) => Promise<OptionsAckResponse>
  ): SlackApp<E> {
    // Note that block_suggestion response must be done within 3 seconds.
    // So, we don't support the lazy handler for it.
    const handler: SlackOptionsHandler<E, BlockSuggestion> = { ack };
    this.#blockSuggestions.push((body) => {
      if (body.type !== "block_suggestion" || !body.action_id) {
        return null;
      }
      if (typeof constraints === "string" && body.action_id === constraints) {
        return handler;
      } else if (typeof constraints === "object") {
        if (constraints instanceof RegExp) {
          if (body.action_id.match(constraints)) {
            return handler;
          }
        } else {
          if (body.action_id === constraints.action_id) {
            if (body.block_id && body.block_id !== constraints.block_id) {
              return null;
            }
            return handler;
          }
        }
      }
      return null;
    });
    return this;
  }

  view(
    callbackId: StringOrRegExp,
    ack: (
      req:
        | SlackRequestWithOptionalRespond<E, ViewSubmission>
        | SlackRequest<E, ViewClosed>
    ) => Promise<ViewAckResponse>,
    lazy: (
      req:
        | SlackRequestWithOptionalRespond<E, ViewSubmission>
        | SlackRequest<E, ViewClosed>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    return this.viewSubmission(callbackId, ack, lazy).viewClosed(
      callbackId,
      ack,
      lazy
    );
  }

  viewSubmission(
    callbackId: StringOrRegExp,
    ack: (
      req: SlackRequestWithOptionalRespond<E, ViewSubmission>
    ) => Promise<ViewAckResponse>,
    lazy: (
      req: SlackRequestWithOptionalRespond<E, ViewSubmission>
    ) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackViewHandler<E, ViewSubmission> = { ack, lazy };
    this.#viewSubmissions.push((body) => {
      if (body.type !== "view_submission" || !body.view) {
        return null;
      }
      if (
        typeof callbackId === "string" &&
        body.view.callback_id === callbackId
      ) {
        return handler;
      } else if (
        typeof callbackId === "object" &&
        callbackId instanceof RegExp &&
        body.view.callback_id.match(callbackId)
      ) {
        return handler;
      }
      return null;
    });
    return this;
  }

  viewClosed(
    callbackId: StringOrRegExp,
    ack: (req: SlackRequest<E, ViewClosed>) => Promise<ViewAckResponse>,
    lazy: (req: SlackRequest<E, ViewClosed>) => Promise<void> = noopLazyListener
  ): SlackApp<E> {
    const handler: SlackViewHandler<E, ViewClosed> = { ack, lazy };
    this.#viewClosed.push((body) => {
      if (body.type !== "view_submission" || !body.view) {
        return null;
      }
      if (
        typeof callbackId === "string" &&
        body.view.callback_id === callbackId
      ) {
        return handler;
      } else if (
        typeof callbackId === "object" &&
        callbackId instanceof RegExp &&
        body.view.callback_id.match(callbackId)
      ) {
        return handler;
      }
      return null;
    });
    return this;
  }

  async run(request: Request, ctx: ExecutionContext): Promise<Response> {
    // To avoid the following warning by Cloudflware, parse the body as Blob first
    // Called .text() on an HTTP body which does not appear to be text ..
    const blobRequestBody = await request.blob();
    // We can safely assume the incoming request body is always text data
    const requestBody = await blobRequestBody.text();
    if (
      await verifySlackRequest(
        this.env.SLACK_SIGNING_SECRET,
        request.headers,
        requestBody
      )
    ) {
      const body = await parseRequestBody(request.headers, requestBody);
      const retryNumHeader = request.headers.get("x-slack-retry-num");
      const retryReasonHeader = request.headers.get("x-slack-retry-reason");
      const context: BeforeAuthorizeSlackAppContext = builtBaseContext(body);
      const beforeAuthorizeRequest: BeforeAuthorizeSlackMiddlwareRequest<E> = {
        body,
        context,
        env: this.env,
        retryNum: retryNumHeader ? Number.parseInt(retryNumHeader) : undefined,
        retryReason: retryReasonHeader ? retryReasonHeader : undefined,
        rawBody: requestBody,
        headers: request.headers,
      };
      if (isDebugLogEnabled(this.env)) {
        console.log(`*** Received request body***\n ${prettyPrint(body)}`);
      }
      for (const middlware of this.beforeAuthorizeMiddleware) {
        const response = await middlware(beforeAuthorizeRequest);
        if (response) {
          return toResponse(response);
        }
      }
      const authorizeResult: AuthorizeResult = await this.authorize(
        beforeAuthorizeRequest
      );
      const authorizedContext: SlackAppContext = {
        ...beforeAuthorizeRequest.context,
        authorizeResult,
        client: new SlackAPIClient(authorizeResult.botToken),
        botToken: authorizeResult.botToken,
        botId: authorizeResult.botId,
        botUserId: authorizeResult.botUserId,
        userToken: undefined,
      };
      if (authorizedContext.responseUrl) {
        const responseUrl = authorizedContext.responseUrl;
        (authorizedContext as SlackAppContextWithRespond).respond = async (
          params
        ) => {
          return new ResponseUrlSender(responseUrl).call(params);
        };
      }

      const baseRequest: SlackMiddlwareRequest<E> = {
        ...beforeAuthorizeRequest,
        context: authorizedContext,
      };
      for (const middlware of this.afterAuthorizeMiddleware) {
        const response = await middlware(baseRequest);
        if (response) {
          return toResponse(response);
        }
      }

      if (body.type === "event_callback") {
        // Events API
        const slackRequest: SlackRequest<E, SlackEvent<string>> = {
          payload: body.event,
          ...baseRequest,
        };
        for (const matcher of this.#events) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.command) {
        // Slash commands
        const slackRequest: SlackRequest<E, SlashCommand> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#slashCommands) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "shortcut") {
        // Global shortcuts
        const slackRequest: SlackRequest<E, GlobalShortcut> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#globalShorcuts) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "message_action") {
        // Message shortcuts
        const slackRequest: SlackRequest<E, MessageShortcut> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#messageShorcuts) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "block_actions") {
        // Block actions
        const slackRequest: SlackRequest<E, BlockAction<any>> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#blockActions) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "block_suggestion") {
        // Block suggestions
        const slackRequest: SlackRequest<E, BlockSuggestion> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#blockSuggestions) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "view_submission") {
        // View submissions
        const slackRequest: SlackRequest<E, ViewSubmission> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#viewSubmissions) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      } else if (body.type === "view_closed") {
        // View closed
        const slackRequest: SlackRequest<E, ViewClosed> = {
          payload: body,
          ...baseRequest,
        };
        for (const matcher of this.#viewClosed) {
          const handler = matcher(body);
          if (handler) {
            const slackResponse = await handler.ack(slackRequest);
            ctx.waitUntil(handler.lazy(slackRequest));
            if (isDebugLogEnabled(this.env)) {
              console.log(
                `*** Slack response ***\n${prettyPrint(slackResponse)}`
              );
            }
            return toResponse(slackResponse);
          }
        }
      }
      return new Response("No listener found", { status: 404 });
    }
    return new Response("Invalid signature", { status: 401 });
  }
}

export type StringOrRegExp = string | RegExp;

export type EventRequest<E extends SlackAppEnv, T> = SlackRequest<
  E,
  Extract<SlackEvents, { type: T }>
>;

export type MessageEventPattern = string | RegExp | undefined;

export type MessageEventRequest<
  E extends SlackAppEnv,
  ST extends string | undefined
> = SlackRequest<E, Extract<MessageEvents, { subtype: ST }>>;

export type MessageEventSubtypes =
  | undefined
  | "bot_message"
  | "thread_broadcast"
  | "file_share";

export type MessageEventHandler<E extends SlackAppEnv> = (
  req: MessageEventRequest<E, MessageEventSubtypes>
) => Promise<void>;

export const noopLazyListener = async () => {};
