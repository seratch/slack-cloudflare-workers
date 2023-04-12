import { MrkdwnTextField, PlainTextField } from "./text-fields";

export interface MrkdwnOption {
  text: MrkdwnTextField;
  value?: string;
  url?: string;
  description?: PlainTextField;
}

export interface PlainTextOption {
  text: PlainTextField;
  value?: string;
  url?: string;
  description?: PlainTextField;
}

export declare type Option = MrkdwnOption | PlainTextOption;
