import {
  KnownBlock,
  Button,
  Select,
  MultiSelect,
  Datepicker,
  Overflow,
  ImageElement,
  Timepicker,
  RadioButtons,
  Checkboxes,
  UsersSelect,
  MultiUsersSelect,
  ExternalSelect,
  StaticSelect,
  ConversationsSelect,
  PlainTextElement,
  MrkdwnElement,
  ChannelsSelect,
  DateTimepicker,
  PlainTextInput,
  URLInput,
  EmailInput,
  NumberInput,
  MultiExternalSelect,
  MultiStaticSelect,
  MultiConversationsSelect,
  MultiChannelsSelect,
} from "@slack/types";

export type BlockTypes = KnownBlock["type"];

export type TypesafeBlock<T extends string = BlockTypes> = Extract<
  KnownBlock,
  { type: T }
> & {
  type: T;
  block_id?: string;
  elements?: T extends "actions" | "context" ? TypesafeBlockElement[] : never;
  accessory?: T extends "section" ? TypesafeBlockElement : never;
  element?: T extends "input" ? TypesafeBlockElement : never;
};

export type BlockElementTypes = (
  | Select
  | MultiSelect
  | Button
  | Overflow
  | Datepicker
  | Timepicker
  | ImageElement
  | RadioButtons
  | Checkboxes
)["type"];

export interface BlockElement<Type extends string = BlockElementTypes> {
  type: Type;
}

export type TypesafeImageElement = BlockElement<"image"> & ImageElement;
export type TypesafePlainTextElement = BlockElement<"plain_text"> &
  PlainTextElement;
export type TypesafeMrkdwnElement = BlockElement<"mrkdwn"> & MrkdwnElement;
export type TypesafeOverflow = BlockElement<"overflow"> & Overflow;
export type TypesafeDatepicker = BlockElement<"datepicker"> & Datepicker;
export type TypesafeTimepicker = BlockElement<"timepicker"> & Timepicker;
export type TypesafeRadioButtons = BlockElement<"radio_buttons"> & RadioButtons;
export type TypesafeDateTimepicker = BlockElement<"datetimepicker"> &
  DateTimepicker;
export type TypesafeCheckboxes = BlockElement<"checkboxes"> & Checkboxes;
export type TypesafePlainTextInput = BlockElement<"plain_text_input"> &
  PlainTextInput;
export type TypesafeURLInput = BlockElement<"url_text_input"> & URLInput;
export type TypesafeEmailInput = BlockElement<"email_text_input"> & EmailInput;
export type TypesafeNumberInput = BlockElement<"number_input"> & NumberInput;
export type TypesafeButton = BlockElement<"button"> & Button;
export type TypesafeExternalSelect = BlockElement<"external_select"> &
  ExternalSelect;
export type TypesafeMultiExternalSelect =
  BlockElement<"multi_external_select"> & MultiExternalSelect;
export type TypesafeStaticSelect = BlockElement<"static_select"> & StaticSelect;
export type TypesafeMultiStaticSelect = BlockElement<"multi_static_select"> &
  MultiStaticSelect;
export type TypesafeConversationsSelect = BlockElement<"conversations_select"> &
  ConversationsSelect;
export type TypesafeMultiConversationsSelect =
  BlockElement<"multi_conversations_select"> & MultiConversationsSelect;
export type TypesafeChannelsSelect = BlockElement<"channels_select"> &
  ChannelsSelect;
export type TypesafeMultiChannelsSelect =
  BlockElement<"multi_channels_select"> & MultiChannelsSelect;
export type TypesafeUsersSelect = BlockElement<"users_select"> & UsersSelect;
export type TypesafeMultiUsersSelect = BlockElement<"multi_users_select"> &
  MultiUsersSelect;

export type KnownTypesafeBlockElements =
  | TypesafeImageElement
  | TypesafePlainTextElement
  | TypesafeMrkdwnElement
  | TypesafeOverflow
  | TypesafeDatepicker
  | TypesafeTimepicker
  | TypesafeRadioButtons
  | TypesafeDateTimepicker
  | TypesafeCheckboxes
  | TypesafePlainTextInput
  | TypesafeURLInput
  | TypesafeEmailInput
  | TypesafeNumberInput
  | TypesafeButton
  | TypesafeExternalSelect
  | TypesafeMultiExternalSelect
  | TypesafeStaticSelect
  | TypesafeMultiStaticSelect
  | TypesafeConversationsSelect
  | TypesafeMultiConversationsSelect
  | TypesafeChannelsSelect
  | TypesafeMultiChannelsSelect
  | TypesafeUsersSelect
  | TypesafeMultiUsersSelect;

export type TypesafeBlockElement<T extends string = BlockElementTypes> =
  Extract<KnownTypesafeBlockElements, { type: T }> & {
    type: T;
    action_id?: string;
  };
