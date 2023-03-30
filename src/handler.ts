import { SlackAppEnv } from "./app-env";
import { SlackRequest } from "./request/request";
import {
  SlackOptionsResponse,
  SlackResponse,
  SlackViewResponse,
} from "./response/response";
import { MessageResponse } from "./response/response-body";

export type AckResponse = SlackResponse | string | void;

export type MessageAckResponse = AckResponse | MessageResponse;

export type ViewAckResponse = SlackViewResponse | void;

export type OptionsAckResponse = SlackOptionsResponse;

export interface SlackHandler<E extends SlackAppEnv, Payload> {
  ack(request: SlackRequest<E, Payload>): Promise<AckResponse>;
  lazy(request: SlackRequest<E, Payload>): Promise<void>;
}

export interface SlackMessageHandler<E extends SlackAppEnv, Payload> {
  ack(request: SlackRequest<E, Payload>): Promise<MessageAckResponse>;
  lazy(request: SlackRequest<E, Payload>): Promise<void>;
}

export type SlackViewHandler<E extends SlackAppEnv, Payload> = {
  ack(request: SlackRequest<E, Payload>): Promise<ViewAckResponse>;
  lazy(request: SlackRequest<E, Payload>): Promise<void>;
};

export interface SlackOptionsHandler<E extends SlackAppEnv, Payload> {
  ack(request: SlackRequest<E, Payload>): Promise<OptionsAckResponse>;
}
