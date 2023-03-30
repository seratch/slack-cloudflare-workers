import { SlackAppEnv } from "../app-env";

export function isDebugLogEnabled(env: SlackAppEnv): boolean {
  return (
    env.SLACK_LOGGING_LEVEL !== undefined &&
    env.SLACK_LOGGING_LEVEL !== null &&
    env.SLACK_LOGGING_LEVEL === "DEBUG"
  );
}

export function prettyPrint(obj: any) {
  return JSON.stringify(obj, null, 2);
}
