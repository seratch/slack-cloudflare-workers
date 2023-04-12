import { AnyHomeTabBlock, AnyModalBlock } from "./blocks";
import { PlainTextField } from "./text-fields";

export interface HomeTabView {
  type: "home";
  blocks: AnyHomeTabBlock[];
  private_metadata?: string;
  callback_id?: string;
  external_id?: string;
}

export interface ModalView {
  type: "modal";
  title: PlainTextField;
  blocks: AnyModalBlock[];
  close?: PlainTextField;
  submit?: PlainTextField;
  private_metadata?: string;
  callback_id?: string;
  clear_on_close?: boolean;
  notify_on_close?: boolean;
  external_id?: string;
}
