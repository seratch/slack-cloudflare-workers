import { Block, KnownBlock, PlainTextElement } from "@slack/types";

export type SlackViewActions = ViewSubmission | ViewClosed;

export interface ViewResponseUrl {
  block_id: string;
  action_id: string;
  channel_id: string;
  response_url: string;
}

export interface ViewSubmission {
  type: "view_submission";
  team: {
    id: string;
    domain: string;
    enterprise_id?: string;
    enterprise_name?: string;
  } | null;
  user: {
    id: string;
    name: string;
    team_id?: string;
  };
  view: DataSubmissionView;
  api_app_id: string;
  token: string;
  trigger_id: string;
  is_enterprise_install?: boolean;
  enterprise?: {
    id: string;
    name: string;
  };
  response_urls?: ViewResponseUrl[];
}

export interface ViewClosed {
  type: "view_closed";
  team: {
    id: string;
    domain: string;
    enterprise_id?: string;
    enterprise_name?: string;
  } | null;
  user: {
    id: string;
    name: string;
    team_id?: string;
  };
  view: DataSubmissionView;
  api_app_id: string;
  token: string;
  is_cleared: boolean;
  is_enterprise_install?: boolean;
  enterprise?: { id: string; name: string };
}

export interface ViewStateSelectedOption {
  text: PlainTextElement;
  value: string;
}

export interface ViewStateValue {
  type: string;
  value?: string | null;
  selected_date?: string | null;
  selected_time?: string | null;
  selected_date_time?: number | null;
  selected_conversation?: string | null;
  selected_channel?: string | null;
  selected_user?: string | null;
  selected_option?: ViewStateSelectedOption | null;
  selected_conversations?: string[];
  selected_channels?: string[];
  selected_users?: string[];
  selected_options?: ViewStateSelectedOption[];
}

export interface DataSubmissionView {
  id: string;
  callback_id: string;
  team_id: string;
  app_installed_team_id?: string;
  app_id: string | null;
  bot_id: string;
  title: PlainTextElement;
  type: string;
  blocks: (KnownBlock | Block)[];
  close: PlainTextElement | null;
  submit: PlainTextElement | null;
  state: {
    values: {
      [blockId: string]: {
        [actionId: string]: ViewStateValue;
      };
    };
  };
  hash: string;
  private_metadata: string;
  root_view_id: string | null;
  previous_view_id: string | null;
  clear_on_close: boolean;
  notify_on_close: boolean;
  external_id?: string;
}
