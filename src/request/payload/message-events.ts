import {
  MessageAttachment,
  KnownBlock,
  Block,
  MessageMetadata,
} from "@slack/types";
import { BotProfile, SlackEvent } from "./events";

export type MessageEvents =
  | GenericMessageEvent
  | BotMessageEvent
  | ChannelArchiveMessageEvent
  | ChannelJoinMessageEvent
  | ChannelLeaveMessageEvent
  | ChannelNameMessageEvent
  | ChannelPostingPermissionsMessageEvent
  | ChannelPurposeMessageEvent
  | ChannelTopicMessageEvent
  | ChannelUnarchiveMessageEvent
  | EKMAccessDeniedMessageEvent
  | FileShareMessageEvent
  | MeMessageEvent
  | MessageChangedEvent
  | MessageDeletedEvent
  | MessageRepliedEvent
  | ThreadBroadcastMessageEvent;

export type MessageMetadataEvents =
  | MessageMetadataPostedEvent
  | MessageMetadataUpdatedEvent
  | MessageMetadataDeletedEvent;

export interface GenericMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: undefined;
  event_ts: string;
  team?: string;
  channel: string;
  user: string;
  bot_id?: string;
  bot_profile?: BotProfile;
  text?: string;
  ts: string;
  thread_ts?: string;
  channel_type: channelTypes;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  files?: File[];
  edited?: {
    user: string;
    ts: string;
  };
  client_msg_id?: string;
  parent_user_id?: string;

  // TODO: optional types that maybe should flow into other subtypes?
  is_starred?: boolean;
  pinned_to?: string[];
  reactions?: {
    name: string;
    count: number;
    users: string[];
  }[];
}

export interface BotMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "bot_message";
  event_ts: string;
  channel: string;
  channel_type: channelTypes;
  ts: string;
  text: string;
  bot_id: string;
  username?: string;
  icons?: {
    [size: string]: string;
  };

  // copied from MessageEvent
  // TODO: is a user really optional? likely for things like IncomingWebhook authored messages
  user?: string;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  edited?: {
    user: string;
    ts: string;
  };
  thread_ts?: string;
}

export interface ChannelArchiveMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_archive";
  team: string;
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelJoinMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_join";
  team: string;
  user: string;
  inviter: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelLeaveMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_leave";
  team: string;
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelNameMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_name";
  team: string;
  user: string;
  name: string;
  old_name: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelPostingPermissionsMessageEvent
  extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_posting_permissions";
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelPurposeMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_purpose";
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  purpose: string;
  ts: string;
  event_ts: string;
}

export interface ChannelTopicMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_topic";
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  topic: string;
  ts: string;
  event_ts: string;
}

export interface ChannelUnarchiveMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_unarchive";
  team: string;
  user: string;
  channel: string;
  channel_type: channelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface EKMAccessDeniedMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "ekm_access_denied";
  event_ts: string;
  channel: string;
  channel_type: channelTypes;
  ts: string;
  text: string; // This will not have any meaningful content within
  user: "UREVOKEDU";
}

export interface FileShareMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "file_share";
  text: string;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  files?: File[];
  upload?: boolean;
  display_as_bot?: boolean;
  x_files?: string[];
  user: string;
  parent_user_id?: string;
  ts: string;
  thread_ts?: string;
  channel: string;
  channel_type: channelTypes;
  event_ts: string;
}

export interface MeMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "me_message";
  event_ts: string;
  channel: string;
  channel_type: channelTypes;
  user: string;
  text: string;
  ts: string;
}

export interface MessageChangedEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "message_changed";
  event_ts: string;
  hidden: true;
  channel: string;
  channel_type: channelTypes;
  ts: string;
  message: MessageEvents;
  previous_message: MessageEvents;
}

export interface MessageDeletedEvent {
  type: "message";
  subtype: "message_deleted";
  event_ts: string;
  hidden: true;
  channel: string;
  channel_type: channelTypes;
  ts: string;
  deleted_ts: string;
  previous_message: MessageEvents;
}

export interface MessageRepliedEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "message_replied";
  event_ts: string;
  hidden: true;
  channel: string;
  channel_type: channelTypes;
  ts: string;
  message: MessageEvents & {
    // TODO: should this be the union of all message events with type 'message'?
    thread_ts: string;
    reply_count: number;
    replies: MessageEvents[]; // TODO: should this be the union of all message events with type 'message'?
  };
}

// the `reply_broadcast` message subtype is omitted because it is discontinued

export interface ThreadBroadcastMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "thread_broadcast";
  event_ts: string;
  text: string;
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  user: string;
  ts: string;
  thread_ts?: string;
  root: (GenericMessageEvent | BotMessageEvent) & {
    thread_ts: string;
    reply_count: number;
    reply_users_count: number;
    latest_reply: string;
    reply_users: string[];
  };
  client_msg_id: string;
  channel: string;
  channel_type: channelTypes;
}

export interface MessageMetadataPostedEvent
  extends SlackEvent<"message_metadata_posted"> {
  type: "message_metadata_posted";
  app_id: string;
  bot_id?: string;
  user_id: string;
  team_id: string;
  channel_id: string;
  metadata: MessageMetadata;
  message_ts: string;
  event_ts: string;
}

export interface MessageMetadataUpdatedEvent
  extends SlackEvent<"message_metadata_updated"> {
  type: "message_metadata_updated";
  channel_id: string;
  event_ts: string;
  previous_metadata: MessageMetadata;
  app_id: string;
  bot_id?: string;
  user_id: string;
  team_id: string;
  message_ts: string;
  metadata: MessageMetadata;
}

export interface MessageMetadataDeletedEvent
  extends SlackEvent<"message_metadata_deleted"> {
  type: "message_metadata_deleted";
  channel_id: string;
  event_ts: string;
  previous_metadata: MessageMetadata;
  app_id: string;
  bot_id?: string;
  user_id: string;
  team_id: string;
  message_ts: string;
  deleted_ts: string;
}

export type channelTypes = "channel" | "group" | "im" | "mpim" | "app_home";
