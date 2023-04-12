import { TypesafeBlock } from "../utility/typesafe-blocks";
import { PlainTextField } from "./texts";

export interface MessageAttachment {
  blocks?: TypesafeBlock[];
  fallback?: string;
  color?: "good" | "warning" | "danger" | string;
  pretext?: string;
  author_name?: string;
  author_link?: string;
  author_icon?: string;
  title?: string;
  title_link?: string;
  text?: string;
  fields?: {
    title: string;
    value: string;
    short?: boolean;
  }[];
  image_url?: string;
  thumb_url?: string;
  footer?: string;
  footer_icon?: string;
  ts?: string;
  actions?: AttachmentAction[];
  callback_id?: string;
  mrkdwn_in?: ("pretext" | "text" | "fields")[];
  app_unfurl_url?: string;
  is_app_unfurl?: boolean;
  app_id?: string;
  bot_id?: string;
  preview?: MessageAttachmentPreview;
}
export interface MessageAttachmentPreview {
  type?: string;
  can_remove?: boolean;
  title?: PlainTextField;
  subtitle?: PlainTextField;
  iconUrl?: string;
}
export interface AttachmentAction {
  id?: string;
  confirm?: Confirmation;
  data_source?: "static" | "channels" | "conversations" | "users" | "external";
  min_query_length?: number;
  name?: string;
  options?: OptionField[];
  option_groups?: {
    text: string;
    options: OptionField[];
  }[];
  selected_options?: OptionField[];
  style?: "default" | "primary" | "danger";
  text: string;
  type: "button" | "select";
  value?: string;
  url?: string;
}
export interface OptionField {
  description?: string;
  text: string;
  value: string;
}
export interface Confirmation {
  dismiss_text?: string;
  ok_text?: string;
  text: string;
  title?: string;
}
