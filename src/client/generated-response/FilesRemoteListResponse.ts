///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type FilesRemoteListResponse = SlackAPIResponse & {
  error?: string;
  files?: File[];
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface File {
  alt_txt?: string;
  app_id?: string;
  app_name?: string;
  bot_id?: string;
  cc?: Cc[];
  channel_actions_count?: number;
  channel_actions_ts?: string;
  channels?: string[];
  comments_count?: number;
  converted_pdf?: string;
  created?: number;
  deanimate?: string;
  deanimate_gif?: string;
  display_as_bot?: boolean;
  duration_ms?: number;
  edit_link?: string;
  editable?: boolean;
  editor?: string;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: Headers;
  hls?: string;
  hls_embed?: string;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  initial_comment?: InitialComment;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  lines?: number;
  lines_more?: number;
  media_display_type?: string;
  media_progress?: MediaProgress;
  mimetype?: string;
  mode?: string;
  mp4?: string;
  name?: string;
  non_owner_editable?: boolean;
  num_stars?: number;
  original_attachment_count?: number;
  original_h?: number;
  original_w?: number;
  permalink?: string;
  permalink_public?: string;
  pinned_to?: string[];
  pjpeg?: string;
  plain_text?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  preview_plain_text?: string;
  public_url_shared?: boolean;
  reactions?: Reaction[];
  saved?: Saved;
  sent_to_self?: boolean;
  shares?: Shares;
  simplified_html?: string;
  size?: number;
  source_team?: string;
  subject?: string;
  subtype?: string;
  thumb_1024?: string;
  thumb_1024_gif?: string;
  thumb_1024_h?: number;
  thumb_1024_w?: number;
  thumb_160?: string;
  thumb_160_gif?: string;
  thumb_160_h?: string;
  thumb_160_w?: string;
  thumb_360?: string;
  thumb_360_gif?: string;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_480?: string;
  thumb_480_gif?: string;
  thumb_480_h?: number;
  thumb_480_w?: number;
  thumb_64?: string;
  thumb_64_gif?: string;
  thumb_64_h?: string;
  thumb_64_w?: string;
  thumb_720?: string;
  thumb_720_gif?: string;
  thumb_720_h?: number;
  thumb_720_w?: number;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_gif?: string;
  thumb_800_h?: number;
  thumb_800_w?: number;
  thumb_80_gif?: string;
  thumb_80_h?: string;
  thumb_80_w?: string;
  thumb_960?: string;
  thumb_960_gif?: string;
  thumb_960_h?: number;
  thumb_960_w?: number;
  thumb_gif?: string;
  thumb_pdf?: string;
  thumb_pdf_h?: string;
  thumb_pdf_w?: string;
  thumb_tiny?: string;
  thumb_video?: string;
  thumb_video_h?: number;
  thumb_video_w?: number;
  timestamp?: number;
  title?: string;
  to?: Cc[];
  transcription?: Transcription;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  user_team?: string;
  username?: string;
  vtt?: string;
}

export interface Cc {
  address?: string;
  name?: string;
  original?: string;
}

export interface Headers {
  date?: string;
  in_reply_to?: string;
  message_id?: string;
  reply_to?: string;
}

export interface InitialComment {
  channel?: string;
  comment?: string;
  created?: number;
  id?: string;
  is_intro?: boolean;
  timestamp?: number;
  user?: string;
}

export interface MediaProgress {
  duration_ms?: number;
  max_offset_ms?: number;
  offset_ms?: number;
}

export interface Reaction {
  count?: number;
  name?: string;
  url?: string;
  users?: string[];
}

export interface Saved {
  date_completed?: number;
  date_due?: number;
  is_archived?: boolean;
  state?: string;
}

export interface Shares {
  private?: { [key: string]: Private[] };
  public?: { [key: string]: Private[] };
}

export interface Private {
  channel_name?: string;
  latest_reply?: string;
  reply_count?: number;
  reply_users?: string[];
  reply_users_count?: number;
  share_user_id?: string;
  team_id?: string;
  thread_ts?: string;
  ts?: string;
}

export interface Transcription {
  locale?: string;
  status?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
