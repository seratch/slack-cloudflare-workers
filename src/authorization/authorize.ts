import { AuthorizeError, SlackAPIError } from "../errors";
import { SlackAPIClient } from "../utility/api-client";
import { SlackAppEnv } from "../app-env";
import { BeforeAuthorizeSlackMiddlwareRequest } from "../request/request";
import { AuthorizeResult } from "./authorize-result";

// TOOD
export type Authorize<E extends SlackAppEnv = SlackAppEnv> = (
  req: BeforeAuthorizeSlackMiddlwareRequest<E>
) => Promise<AuthorizeResult>;

export const singleTeamAuthorize: Authorize = async (req) => {
  const botToken = req.env.SLACK_BOT_TOKEN!;
  const client = new SlackAPIClient(botToken);
  try {
    const response: any = await client.call("auth.test", {});
    return {
      botToken,
      enterpriseId: response.enterprise_id,
      teamId: response.team_id,
      botId: response.bot_id,
      botUserId: response.bot_user_id,
      userId: response.user_id,
      botScopes: undefined,
      userToken: undefined,
      userScopes: undefined,
    };
  } catch (e) {
    throw new AuthorizeError(
      `Failed to call auth.test API due to ${(e as SlackAPIError).message}`
    );
  }
};
