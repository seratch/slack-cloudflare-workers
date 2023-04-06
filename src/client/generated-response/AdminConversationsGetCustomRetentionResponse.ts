///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminConversationsGetCustomRetentionResponse = SlackAPIResponse & {
  duration_days?: number;
  error?: string;
  is_policy_enabled?: boolean;
  needed?: string;
  ok: boolean;
  provided?: string;
};