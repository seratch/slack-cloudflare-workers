import { PlainTextElement, Confirmation, Option } from "@slack/types";
import { DataSubmissionView, ViewStateValue } from "./views";

export interface BlockAction<A extends BlockElementAction> {
  type: "block_actions";
  actions: A[];
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
  channel?: {
    id: string;
    name: string;
  };
  message?: {
    type: "message";
    user?: string;
    ts: string;
    text?: string;
    [key: string]: any;
  };
  view?: DataSubmissionView;
  state?: {
    values: {
      [blockId: string]: {
        [actionId: string]: ViewStateValue;
      };
    };
  };
  token: string;
  response_url: string;
  trigger_id: string;
  api_app_id: string;
  container: any;
  app_unfurl?: any;
  is_enterprise_install?: boolean;
  enterprise?: {
    id: string;
    name: string;
  };
}

export interface BlockElementAction<T extends string = string> {
  type: T;
  block_id: string;
  action_id: string;
  action_ts: string;
}

export interface ButtonAction extends BlockElementAction<"button"> {
  value: string;
  text: PlainTextElement;
  url?: string;
  confirm?: Confirmation;
}

export interface StaticSelectAction
  extends BlockElementAction<"static_select"> {
  selected_option: {
    text: PlainTextElement;
    value: string;
  };
  initial_option?: Option;
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface MultiStaticSelectAction
  extends BlockElementAction<"multi_static_select"> {
  selected_options: {
    text: PlainTextElement;
    value: string;
  }[];
  initial_options?: Option[];
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface UsersSelectAction extends BlockElementAction<"users_select"> {
  selected_user: string;
  initial_user?: string;
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface MultiUsersSelectAction
  extends BlockElementAction<"multi_users_select"> {
  selected_users: string[];
  initial_users?: string[];
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface ConversationsSelectAction
  extends BlockElementAction<"conversations_select"> {
  selected_conversation: string;
  initial_conversation?: string;
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface MultiConversationsSelectAction
  extends BlockElementAction<"multi_conversations_select"> {
  selected_conversations: string[];
  initial_conversations?: string[];
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface ChannelsSelectAction
  extends BlockElementAction<"channels_select"> {
  selected_channel: string;
  initial_channel?: string;
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface MultiChannelsSelectAction
  extends BlockElementAction<"multi_channels_select"> {
  selected_channels: string[];
  initial_channels?: string[];
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface ExternalSelectAction
  extends BlockElementAction<"external_select"> {
  selected_option?: Option;
  initial_option?: Option;
  placeholder?: PlainTextElement;
  min_query_length?: number;
  confirm?: Confirmation;
}

export interface MultiExternalSelectAction
  extends BlockElementAction<"multi_external_select"> {
  selected_options?: Option[];
  initial_options?: Option[];
  placeholder?: PlainTextElement;
  min_query_length?: number;
  confirm?: Confirmation;
}

export interface OverflowAction extends BlockElementAction<"overflow"> {
  selected_option: {
    text: PlainTextElement;
    value: string;
  };
  confirm?: Confirmation;
}

export interface DatepickerAction extends BlockElementAction<"datepicker"> {
  selected_date: string | null;
  initial_date?: string;
  placeholder?: PlainTextElement;
  confirm?: Confirmation;
}

export interface RadioButtonsAction
  extends BlockElementAction<"radio_buttons"> {
  selected_option: Option | null;
  initial_option?: Option;
  confirm?: Confirmation;
}

export interface CheckboxesAction extends BlockElementAction<"checkboxes"> {
  selected_options: Option[];
  initial_options?: Option[];
  confirm?: Confirmation;
}

export interface PlainTextInputAction
  extends BlockElementAction<"plain_text_input"> {
  value: string;
}

export type Actions =
  | ButtonAction
  | StaticSelectAction
  | MultiStaticSelectAction
  | UsersSelectAction
  | MultiUsersSelectAction
  | ConversationsSelectAction
  | MultiConversationsSelectAction
  | ChannelsSelectAction
  | MultiChannelsSelectAction
  | ExternalSelectAction
  | MultiExternalSelectAction
  | OverflowAction
  | DatepickerAction
  | RadioButtonsAction
  | CheckboxesAction
  | PlainTextInputAction;

export type BlockElementTypes = Actions["type"];
