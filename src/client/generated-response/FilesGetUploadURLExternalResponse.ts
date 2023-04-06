///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type FilesGetUploadURLExternalResponse = SlackAPIResponse & {
  error?: string;
  file_id?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  upload_url?: string;
};

export interface ResponseMetadata {
  messages?: string[];
}