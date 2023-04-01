import { PlainTextElement } from "@slack/types";
import { TypesafeBlock } from "../../utility/typesafe-blocks";

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
  blocks: TypesafeBlock[];
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
