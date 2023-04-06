import { SlackOAuthEnv } from "../app-env";
import { ConfigError } from "../errors";

export function generateAuthorizeUrl<E extends SlackOAuthEnv>(
  state: string,
  env: E,
  team: string | undefined = undefined
): string {
  let url = `https://slack.com/oauth/v2/authorize?state=${state}`;
  url += `&client_id=${env.SLACK_CLIENT_ID}`;
  url += `&scope=${env.SLACK_BOT_SCOPES}`;
  if (env.SLACK_USER_SCOPES) {
    url += `&user_scope=${env.SLACK_USER_SCOPES}`;
  }
  if (env.SLACK_REDIRECT_URI) {
    url += `&redirect_uri=${env.SLACK_REDIRECT_URI}`;
  }
  if (team) {
    url += `&team=${team}`;
  }
  return url;
}

export function generateOIDCAuthorizeUrl<E extends SlackOAuthEnv>(
  state: string,
  env: E,
  team: string | undefined = undefined
): string {
  let url = `https://slack.com/openid/connect/authorize?response_type=code&state=${state}`;
  url += `&client_id=${env.SLACK_CLIENT_ID}`;
  if (!env.SLACK_OIDC_SCOPES) {
    throw new ConfigError(
      "env.SLACK_OIDC_SCOPES must be present when enabling Sign in with Slack (OpenID Connect)"
    );
  }
  url += `&scope=${env.SLACK_OIDC_SCOPES}`;
  if (env.SLACK_REDIRECT_URI) {
    url += `&redirect_uri=${env.SLACK_REDIRECT_URI}`;
  }
  return url;
}
