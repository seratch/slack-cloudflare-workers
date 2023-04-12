import { PlainTextField, TextField } from "./texts";

export interface Confirm {
  title?: PlainTextField;
  text: TextField;
  confirm?: PlainTextField;
  deny?: PlainTextField;
  style?: "primary" | "danger";
}
