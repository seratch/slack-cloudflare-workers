///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminInviteRequestsListResponse = SlackAPIResponse & {
  error?: string;
  invite_requests?: string[];
  needed?: string;
  ok: boolean;
  provided?: string;
};