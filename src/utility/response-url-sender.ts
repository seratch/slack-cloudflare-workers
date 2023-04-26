import { ResponseUrlError } from "../errors";
import {
  AnyMessageBlock,
  MessageAttachment,
  MessageMetadata,
} from "slack-web-api-client";

export class ResponseUrlSender {
  #responseUrl: string;

  constructor(responseUrl: string) {
    this.#responseUrl = responseUrl;
  }

  async call(params: ResponseUrlParams): Promise<Response> {
    const response = await fetch(this.#responseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(params),
    });
    const responseBody = await response.text();
    const body = responseBody.toLowerCase();
    if (response.status != 200 || (body !== "ok" && body !== '{"ok":true}')) {
      throw new ResponseUrlError(response.status, responseBody);
    }
    return response;
  }
}

export interface ResponseUrlParams {
  response_type?: "ephemeral" | "in_channel";
  text: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
}
