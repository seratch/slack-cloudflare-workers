export interface PlainTextField {
  type: "plain_text";
  text: string;
  emoji?: boolean;
}

export interface MrkdwnTextField {
  type: "mrkdwn";
  text: string;
  verbatim?: boolean;
}

export type TextField = PlainTextField | MrkdwnTextField;
