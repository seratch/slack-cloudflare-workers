import { Confirm } from "./confirm";
import { Option, PlainTextOption } from "./options";
import { PlainTextField } from "./texts";

// -----------------------------
// Basic types
// -----------------------------

export type AnyBlockElementType = "image" | AnyActionBlockElementType;

export type AnyActionBlockElementType =
  | "users_select"
  | "multi_users_select"
  | "static_select"
  | "multi_static_select"
  | "conversations_select"
  | "multi_conversations_select"
  | "channels_select"
  | "multi_channels_select"
  | "external_select"
  | "multi_external_select"
  | "button"
  | "overflow"
  | "datepicker"
  | "timepicker"
  | "radio_buttons"
  | "datetimepicker"
  | "checkboxes"
  | "plain_text_input"
  | "url_text_input"
  | "email_text_input"
  | "number_input";

export interface BlockElement<
  T extends AnyBlockElementType = AnyBlockElementType
> {
  type: T;
}

export interface ActionBlockElement<
  T extends AnyActionBlockElementType = AnyActionBlockElementType
> extends BlockElement<T> {
  type: T;
  action_id?: string;
}

// -----------------------------
// Union types
// -----------------------------

export declare type AnyBlockElement =
  | ImageElement
  | AnySelectElement
  | AnyMultiSelectElement
  | Datepicker
  | Timepicker
  | DateTimepicker
  | PlainTextInput
  | URLInput
  | EmailInput
  | NumberInput
  | RadioButtons
  | Checkboxes;

export declare type AnySelectElement =
  | UsersSelect
  | StaticSelect
  | ConversationsSelect
  | ChannelsSelect
  | ExternalSelect;

export declare type AnyMultiSelectElement =
  | MultiUsersSelect
  | MultiStaticSelect
  | MultiConversationsSelect
  | MultiChannelsSelect
  | MultiExternalSelect;

// -----------------------------
// Common traits
// -----------------------------

export interface Confirmable {
  confirm?: Confirm;
}
export interface Focusable {
  focus_on_load?: boolean;
}
export interface Placeholdable {
  placeholder?: PlainTextField;
}
export interface DispatchActionConfig {
  trigger_actions_on?: ("on_enter_pressed" | "on_character_entered")[];
}
export interface Dispatchable {
  dispatch_action_config?: DispatchActionConfig;
}

// -----------------------------
// Elements
// -----------------------------

export interface ImageElement extends BlockElement<"image"> {
  type: "image";
  image_url: string;
  alt_text: string;
}

export interface UsersSelect
  extends ActionBlockElement<"users_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "users_select";
  initial_user?: string;
}
export interface MultiUsersSelect
  extends ActionBlockElement<"multi_users_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_users_select";
  initial_users?: string[];
  max_selected_items?: number;
}
export interface StaticSelect
  extends ActionBlockElement<"static_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "static_select";
  initial_option?: PlainTextOption;
  options?: PlainTextOption[];
  option_groups?: {
    label: PlainTextField;
    options: PlainTextOption[];
  }[];
}
export interface MultiStaticSelect
  extends ActionBlockElement<"multi_static_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_static_select";
  initial_options?: PlainTextOption[];
  options?: PlainTextOption[];
  option_groups?: {
    label: PlainTextField;
    options: PlainTextOption[];
  }[];
  max_selected_items?: number;
}
export interface ConversationsSelect
  extends ActionBlockElement<"conversations_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "conversations_select";
  initial_conversation?: string;
  response_url_enabled?: boolean;
  default_to_current_conversation?: boolean;
  filter?: {
    include?: ("im" | "mpim" | "private" | "public")[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?: boolean;
  };
}
export interface MultiConversationsSelect
  extends ActionBlockElement<"multi_conversations_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_conversations_select";
  initial_conversations?: string[];
  max_selected_items?: number;
  default_to_current_conversation?: boolean;
  filter?: {
    include?: ("im" | "mpim" | "private" | "public")[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?: boolean;
  };
}
export interface ChannelsSelect
  extends ActionBlockElement<"channels_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "channels_select";
  initial_channel?: string;
}
export interface MultiChannelsSelect
  extends ActionBlockElement<"multi_channels_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_channels_select";
  initial_channels?: string[];
  max_selected_items?: number;
}
export interface ExternalSelect
  extends ActionBlockElement<"external_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "external_select";
  initial_option?: PlainTextOption;
  min_query_length?: number;
}
export interface MultiExternalSelect
  extends ActionBlockElement<"multi_external_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_external_select";
  initial_options?: PlainTextOption[];
  min_query_length?: number;
  max_selected_items?: number;
}
export interface Button extends ActionBlockElement<"button">, Confirmable {
  type: "button";
  text: PlainTextField;
  value?: string;
  url?: string;
  style?: "danger" | "primary";
  accessibility_label?: string;
}
export interface Overflow extends ActionBlockElement<"overflow">, Confirmable {
  type: "overflow";
  options: PlainTextOption[];
}
export interface Datepicker
  extends ActionBlockElement<"datepicker">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "datepicker";
  initial_date?: string;
}
export interface Timepicker
  extends ActionBlockElement<"timepicker">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "timepicker";
  initial_time?: string;
  timezone?: string;
}
export interface RadioButtons
  extends ActionBlockElement<"radio_buttons">,
    Confirmable,
    Focusable {
  type: "radio_buttons";
  initial_option?: Option;
  options: Option[];
}
export interface DateTimepicker
  extends ActionBlockElement<"datetimepicker">,
    Confirmable,
    Focusable {
  type: "datetimepicker";
  // The initial date and time that is selected when the element is loaded,
  // represented as a UNIX timestamp (seconds)
  initial_date_time?: number;
}
export interface Checkboxes
  extends ActionBlockElement<"checkboxes">,
    Confirmable,
    Focusable {
  type: "checkboxes";
  initial_options?: Option[];
  options: Option[];
}
export interface PlainTextInput
  extends ActionBlockElement<"plain_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "plain_text_input";
  initial_value?: string;
  multiline?: boolean;
  min_length?: number;
  max_length?: number;
  dispatch_action_config?: DispatchActionConfig;
  focus_on_load?: boolean;
}
export interface URLInput
  extends ActionBlockElement<"url_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "url_text_input";
  initial_value?: string;
}
export interface EmailInput
  extends ActionBlockElement<"email_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "email_text_input";
  initial_value?: string;
}
export interface NumberInput
  extends ActionBlockElement<"number_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "number_input";
  is_decimal_allowed: boolean;
  initial_value?: string;
  min_value?: string;
  max_value?: string;
}
