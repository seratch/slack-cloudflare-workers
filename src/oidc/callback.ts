import { OpenIDConnectTokenResponse } from "../client/generated-response";

export type OpenIDConnectCallback = (
  apiResponse: OpenIDConnectTokenResponse,
  req: Request
) => Promise<Response>;
