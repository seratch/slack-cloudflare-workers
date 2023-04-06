export class ConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigError";
  }
}

export class AuthorizeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthorizeError";
  }
}

export class SlackAPIError extends Error {
  constructor(apiName: string, error: string, result: any) {
    const message = `Failed to call ${apiName} due to ${error}: ${JSON.stringify(
      result
    )}`;
    super(message);
    this.name = "SlackAPIError";
  }
}

export class TokenRotationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TokenRotationError";
  }
}

export class ResponseUrlError extends Error {
  constructor(status: number, body: string) {
    const message = `Failed to send a message using response_url (status: ${status}, body: ${body})`;
    super(message);
    this.name = "ResponseUrlError";
  }
}
