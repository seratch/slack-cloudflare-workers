export interface SlackAppEnv {
  SLACK_SIGNING_SECRET: string;
  SLACK_BOT_TOKEN?: string;
  SLACK_LOGGING_LEVEL?: "DEBUG" | "INFO" | "WARN" | "ERROR";
}
