export interface AuthorizeResult {
  enterpriseId?: string;
  teamId?: string;
  botId: string;
  botUserId: string;
  botToken: string;
  botScopes?: string[];
  userId?: string;
  userToken?: string;
  userScopes?: string[];
}
