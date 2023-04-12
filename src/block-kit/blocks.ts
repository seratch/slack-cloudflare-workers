import {
  AnyMultiSelectElement,
  AnySelectElement,
  Button,
  Checkboxes,
  DateTimepicker,
  Datepicker,
  EmailInput,
  ImageElement,
  NumberInput,
  Overflow,
  PlainTextInput,
  RadioButtons,
  Timepicker,
  URLInput,
} from "./block-elements";
import { PlainTextField, TextField } from "./texts";

// -----------------------------
// Basic types
// -----------------------------

export type AnyBlockType =
  | "image"
  | "context"
  | "actions"
  | "divider"
  | "section"
  | "input"
  | "file"
  | "header"
  | "video";

export interface Block<T extends AnyBlockType = AnyBlockType> {
  type: T;
  block_id?: string;
}

// -----------------------------
// Union types
// -----------------------------

export declare type AnyMessageBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | FileBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | VideoBlock;

export declare type AnyModalBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | VideoBlock;

export declare type AnyHomeTabBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | VideoBlock;

// -----------------------------
// Blocks
// -----------------------------

export interface ActionsBlock extends Block<"actions"> {
  type: "actions";
  elements: (
    | Button
    | Overflow
    | Datepicker
    | Timepicker
    | DateTimepicker
    | AnySelectElement
    | AnyMultiSelectElement
    | RadioButtons
    | Checkboxes
  )[];
}

export interface ContextBlock extends Block<"context"> {
  type: "context";
  elements: (ImageElement | TextField)[];
}

export interface DividerBlock extends Block<"divider"> {
  type: "divider";
}

export interface FileBlock extends Block<"file"> {
  type: "file";
  source: string;
  external_id: string;
}

export interface HeaderBlock extends Block<"header"> {
  type: "header";
  text: PlainTextField;
}

export interface ImageBlock extends Block<"image"> {
  type: "image";
  image_url: string;
  alt_text: string;
  title?: PlainTextField;
}

export interface InputBlock extends Block<"input"> {
  type: "input";
  label: PlainTextField;
  hint?: PlainTextField;
  optional?: boolean;
  element:
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
  dispatch_action?: boolean;
}

export interface SectionBlock extends Block<"section"> {
  type: "section";
  text?: TextField;
  fields?: TextField[];
  accessory?:
    | ImageElement
    | Button
    | Overflow
    | Datepicker
    | Timepicker
    | AnySelectElement
    | AnyMultiSelectElement
    | RadioButtons
    | Checkboxes;
}

export interface VideoBlock extends Block<"video"> {
  type: "video";
  video_url: string;
  thumbnail_url: string;
  alt_text: string;
  title: PlainTextField;
  title_url?: string;
  author_name?: string;
  provider_name?: string;
  provider_icon_url?: string;
  description?: PlainTextField;
}
