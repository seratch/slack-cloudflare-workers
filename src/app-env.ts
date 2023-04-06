export interface SlackAppEnv {
  SLACK_SIGNING_SECRET: string;
  SLACK_BOT_TOKEN?: string;
  SLACK_LOGGING_LEVEL?: "DEBUG" | "INFO" | "WARN" | "ERROR";
}

export type SlackOAuthEnv = SlackAppEnv & {
  SLACK_CLIENT_ID: string;
  SLACK_CLIENT_SECRET: string;
  SLACK_BOT_SCOPES: string;
  SLACK_USER_SCOPES?: string;
  SLACK_REDIRECT_URI?: string;
  SLACK_OIDC_SCOPES?: string;
  SLACK_OIDC_REDIRECT_URI?: string;
};

export type SlackOIDCEnv = SlackAppEnv & {
  SLACK_CLIENT_ID: string;
  SLACK_CLIENT_SECRET: string;
  SLACK_OIDC_SCOPES?: string;
  SLACK_OIDC_REDIRECT_URI: string;
};

export type SlackOAuthAndOIDCEnv = SlackOAuthEnv & SlackOIDCEnv;
