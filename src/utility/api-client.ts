import { SlackAPIError } from "../errors";

export class SlackAPIClient {
  #token: string | undefined;

  constructor(token: string | undefined) {
    this.#token = token;
  }

  async call(name: string, params: any): Promise<Response> {
    const url = `https://www.slack.com/api/${name}`;
    const token = params.token ?? this.#token;
    const _params: any = {};
    Object.assign(_params, params);
    delete _params.token;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(_params),
    });
    const result: any = await response.json();
    if (result.error) {
      throw new SlackAPIError(name, result.error, result);
    }
    return result;
  }
}
