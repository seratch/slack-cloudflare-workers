import { PlainTextField, TextField } from "./text-fields";

export interface Confirm {
  title?: PlainTextField;
  text: TextField;
  confirm?: PlainTextField;
  deny?: PlainTextField;
  style?: "primary" | "danger";
}
