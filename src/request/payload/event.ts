import { AnyMessageBlock } from "../../block-kit/blocks";
import { MessageAttachment } from "../../block-kit/message-attachment";
import { MessageMetadata } from "../../block-kit/message-metadata";
import { HomeTabView } from "../../block-kit/views";

export type SlackEvents =
  | AppRequestedEvent
  | AppHomeOpenedEvent
  | AppMentionEvent
  | AppRateLimitedEvent
  | AppUninstalledEvent
  | CallRejectedEvent
  | ChannelArchiveEvent
  | ChannelCreatedEvent
  | ChannelDeletedEvent
  | ChannelHistoryChangedEvent
  | ChannelIDChangedEvent
  | ChannelLeftEvent
  | ChannelRenameEvent
  | ChannelSharedEvent
  | ChannelUnarchiveEvent
  | ChannelUnsharedEvent
  | DNDUpdatedEvent
  | DNDUpdatedUserEvent
  | EmailDomainChangedEvent
  | EmojiChangedEvent
  | FileChangeEvent
  | FileCreatedEvent
  | FileDeletedEvent
  | FilePublicEvent
  | FileSharedEvent
  | FileUnsharedEvent
  | GridMigrationFinishedEvent
  | GridMigrationStartedEvent
  | GroupArchiveEvent
  | GroupCloseEvent
  | GroupDeletedEvent
  | GroupHistoryChangedEvent
  | GroupLeftEvent
  | GroupOpenEvent
  | GroupRenameEvent
  | GroupUnarchiveEvent
  | IMCloseEvent
  | IMCreatedEvent
  | IMHistoryChangedEvent
  | IMOpenEvent
  | InviteRequestedEvent
  | LinkSharedEvent
  | MemberJoinedChannelEvent
  | MemberLeftChannelEvent
  | MessageEvents
  | MessageMetadataEvents
  | PinAddedEvent
  | PinRemovedEvent
  | ReactionAddedEvent
  | ReactionRemovedEvent
  | SharedChannelInviteReceivedEvent
  | SharedChannelInviteAcceptedEvent
  | SharedChannelInviteApprovedEvent
  | SharedChannelInviteDeclinedEvent
  | StarAddedEvent
  | StarRemovedEvent
  | SubteamCreatedEvent
  | SubteamMembersChangedEvent
  | SubteamSelfAddedEvent
  | SubteamSelfRemovedEvent
  | SubteamUpdatedEvent
  | TeamAccessGrantedEvent
  | TeamAccessRevokedEvent
  | TeamDomainChangedEvent
  | TeamJoinEvent
  | TeamRenameEvent
  | TokensRevokedEvent
  | UserChangeEvent
  | UserHuddleChangedEvent
  | UserProfileChangedEvent
  | UserStatusChangedEvent
  | WorkflowDeletedEvent
  | WorkflowPublishedEvent
  | WorkflowUnpublishedEvent
  | WorkflowStepDeletedEvent
  | WorkflowStepExecuteEvent;

// These union types may not be a complete set of events
export type SlackEventsWithChannelId =
  | AppMentionEvent
  | CallRejectedEvent
  | ChannelArchiveEvent
  | ChannelCreatedEvent
  | ChannelDeletedEvent
  | ChannelLeftEvent
  | ChannelRenameEvent
  | ChannelSharedEvent
  | ChannelUnarchiveEvent
  | ChannelUnsharedEvent
  | FileSharedEvent
  | FileUnsharedEvent
  | GroupArchiveEvent
  | GroupCloseEvent
  | GroupDeletedEvent
  | GroupLeftEvent
  | GroupOpenEvent
  | GroupRenameEvent
  | GroupUnarchiveEvent
  | IMCloseEvent
  | IMCreatedEvent
  | IMOpenEvent
  | LinkSharedEvent
  | MemberJoinedChannelEvent
  | MemberLeftChannelEvent
  | PinAddedEvent
  | PinRemovedEvent
  | GenericMessageEvent
  | MessageMetadataEvents;

export interface SlackEvent<Type extends string> {
  type: Type;
  subtype?: string;
}

export interface AppRequestedEvent extends SlackEvent<"app_requested"> {
  type: "app_requested";
  app_request: {
    id: string;
    app: {
      id: string;
      name: string;
      description: string;
      help_url: string;
      privacy_policy_url: string;
      app_homepage_url: string;
      app_directory_url: string;
      is_app_directory_approved: boolean;
      is_internal: boolean;
      additional_info: string;
      icons?: {
        image_32?: string;
        image_36?: string;
        image_48?: string;
        image_64?: string;
        image_72?: string;
        image_96?: string;
        image_128?: string;
        image_192?: string;
        image_512?: string;
        image_1024?: string;
        image_original?: string;
      };
    };
  };
  previous_resolution: {
    status: "approved" | "restricted";
    scopes: {
      name: string;
      description: string;
      is_dangerous: boolean;
      token_type: "bot" | "user" | "app" | null;
    };
  } | null;
  is_user_app_collaborator: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  };
  team: {
    id: string;
    name: string;
    domain: string;
  };
  scopes: {
    name: string;
    description: string;
    is_dangerous: boolean;
    token_type: "bot" | "user" | "app" | null;
  };
  message: string;
  date_created: number;
}

export interface AppHomeOpenedEvent extends SlackEvent<"app_home_opened"> {
  type: "app_home_opened";
  user: string;
  channel: string;
  tab?: "home" | "messages";
  view?: HomeTabView;
  event_ts: string;
}

export interface AppMentionEvent extends SlackEvent<"app_mention"> {
  type: "app_mention";
  subtype?: string;
  bot_id?: string;
  bot_profile?: BotProfile;
  username: string;
  team?: string;
  user?: string;
  text: string;
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
  edited?: {
    user: string;
    ts: string;
  };
  ts: string;
  channel: string;
  event_ts: string;
  thread_ts?: string;
}

export interface AppRateLimitedEvent extends SlackEvent<"app_rate_limited"> {
  type: "app_rate_limited";
  token: string;
  team_id: string;
  minute_rate_limited: number;
  api_app_id: string;
}

export interface AppUninstalledEvent extends SlackEvent<"app_uninstalled"> {
  type: "app_uninstalled";
}

export interface CallRejectedEvent extends SlackEvent<"call_rejected"> {
  type: "call_rejected";
  call_id: string;
  user_id: string;
  channel_id: string;
  external_unique_id: string;
}

export interface ChannelArchiveEvent extends SlackEvent<"channel_archive"> {
  type: "channel_archive";
  channel: string;
  user: string;
  is_moved?: number;
  event_ts: string;
}

export interface ChannelCreatedEvent extends SlackEvent<"channel_created"> {
  type: "channel_created";
  channel: {
    id: string;
    is_channel: boolean;
    name: string;
    name_normalized: string;
    created: number;
    creator: string;
    is_shared: boolean;
    is_org_shared: boolean;
  };
}

export interface ChannelDeletedEvent extends SlackEvent<"channel_deleted"> {
  type: "channel_deleted";
  channel: string;
}

export interface ChannelHistoryChangedEvent
  extends SlackEvent<"channel_history_changed"> {
  type: "channel_history_changed";
  latest: string;
  ts: string;
  event_ts: string;
}

export interface ChannelIDChangedEvent
  extends SlackEvent<"channel_id_changed"> {
  type: "channel_id_changed";
  old_channel_id: string;
  new_channel_id: string;
  event_ts: string;
}

export interface ChannelLeftEvent extends SlackEvent<"channel_left"> {
  type: "channel_left";
  channel: string;
  actor_id: string;
  event_ts: string;
}

export interface ChannelRenameEvent extends SlackEvent<"channel_rename"> {
  type: "channel_rename";
  channel: {
    id: string;
    name: string;
    name_normalized: string;
    created: number;
    is_channel: boolean;
    is_mpim: boolean;
  };
  event_ts: string;
}

export interface ChannelSharedEvent extends SlackEvent<"channel_shared"> {
  type: "channel_shared";
  connected_team_id: string;
  channel: string;
  event_ts: string;
}

export interface ChannelUnarchiveEvent extends SlackEvent<"channel_unarchive"> {
  type: "channel_unarchive";
  channel: string;
  user: string;
  event_ts: string;
}

export interface ChannelUnsharedEvent extends SlackEvent<"channel_unshared"> {
  type: "channel_unshared";
  previously_connected_team_id: string;
  channel: string;
  is_ext_shared: boolean;
  event_ts: string;
}

export interface DNDUpdatedEvent extends SlackEvent<"dnd_updated"> {
  type: "dnd_updated";
  user: string;
  dnd_status: {
    dnd_enabled: boolean;
    next_dnd_start_ts: number;
    next_dnd_end_ts: number;
    snooze_enabled: boolean;
    snooze_endtime: number;
    snooze_remaining: number;
  };
  event_ts: string;
}

export interface DNDUpdatedUserEvent extends SlackEvent<"dnd_updated_user"> {
  type: "dnd_updated_user";
  user: string;
  dnd_status: {
    dnd_enabled: boolean;
    next_dnd_start_ts: number;
    next_dnd_end_ts: number;
  };
  event_ts: string;
}

export interface EmailDomainChangedEvent
  extends SlackEvent<"email_domain_changed"> {
  type: "email_domain_changed";
  email_domain: string;
  event_ts: string;
}

// NOTE: this should probably be broken into its two subtypes
export interface EmojiChangedEvent extends SlackEvent<"emoji_changed"> {
  type: "emoji_changed";
  subtype: "add" | "remove" | "rename";
  names?: string[]; // only for remove
  name?: string; // only for add
  value?: string; // only for add
  old_name?: string;
  new_name?: string;
  event_ts: string;
}

export interface FileChangeEvent extends SlackEvent<"file_change"> {
  type: "file_change";
  file_id: string;
  file: { id: string };
}

export interface FileCreatedEvent extends SlackEvent<"file_created"> {
  type: "file_created";
  file_id: string;
  user_id: string;
  file: { id: string };
  event_ts: string;
}

export interface FileDeletedEvent extends SlackEvent<"file_deleted"> {
  type: "file_deleted";
  file_id: string;
  channel_ids?: string[];
  event_ts: string;
}

export interface FilePublicEvent extends SlackEvent<"file_public"> {
  type: "file_public";
  file_id: string;
  user_id: string;
  file: { id: string };
  event_ts: string;
}

export interface FileSharedEvent extends SlackEvent<"file_shared"> {
  type: "file_shared";
  file_id: string;
  user_id: string;
  file: { id: string };
  channel_id: string;
  event_ts: string;
}

export interface FileUnsharedEvent extends SlackEvent<"file_unshared"> {
  type: "file_unshared";
  file_id: string;
  user_id: string;
  file: { id: string };
  channel_id: string;
  event_ts: string;
}

export interface GridMigrationFinishedEvent
  extends SlackEvent<"grid_migration_finished"> {
  type: "grid_migration_finished";
  enterprise_id: string;
}

export interface GridMigrationStartedEvent
  extends SlackEvent<"grid_migration_started"> {
  type: "grid_migration_started";
  enterprise_id: string;
}

export interface GroupArchiveEvent extends SlackEvent<"group_archive"> {
  type: "group_archive";
  channel: string;
  user: string;
  is_moved: number;
  event_ts: string;
}

export interface GroupCloseEvent extends SlackEvent<"group_close"> {
  type: "group_close";
  user: string;
  channel: string;
}

export interface GroupDeletedEvent extends SlackEvent<"group_deleted"> {
  type: "group_deleted";
  channel: string;
  date_deleted: number;
  actor_id: string;
  event_ts: string;
}

export interface GroupHistoryChangedEvent
  extends SlackEvent<"group_history_changed"> {
  type: "group_history_changed";
  latest: string;
  ts: string;
  event_ts: string;
}

export interface GroupLeftEvent extends SlackEvent<"group_left"> {
  type: "group_left";
  channel: string;
  actor_id: string;
  event_ts: string;
}

export interface GroupOpenEvent extends SlackEvent<"group_open"> {
  type: "group_open";
  user: string;
  channel: string;
}

export interface GroupRenameEvent extends SlackEvent<"group_rename"> {
  type: "group_rename";
  channel: {
    id: string;
    name: string;
    name_normalized: string;
    created: number;
    is_channel: boolean;
    is_mpim: boolean;
  };
  event_ts: string;
}

export interface GroupUnarchiveEvent extends SlackEvent<"group_unarchive"> {
  type: "group_unarchive";
  channel: string;
  actor_id: string;
  event_ts: string;
}

export interface IMCloseEvent extends SlackEvent<"im_close"> {
  type: "im_close";
  user: string;
  channel: string;
  event_ts: string;
}

export interface IMCreatedEvent extends SlackEvent<"im_created"> {
  type: "im_created";
  user: string;
  channel: { id: string };
}

export interface IMHistoryChangedEvent
  extends SlackEvent<"im_history_changed"> {
  type: "im_history_changed";
  latest: string;
  ts: string;
  event_ts: string;
}

export interface IMOpenEvent extends SlackEvent<"im_open"> {
  type: "im_open";
  user: string;
  channel: string;
  event_ts: string;
}

export interface InviteRequestedEvent extends SlackEvent<"invite_requested"> {
  type: "invite_requested";
  invite_request: {
    id: string;
    email: string;
    date_created: number;
    requester_ids: string[];
    channel_ids: string[];
    invite_type: "restricted" | "ultra_restricted" | "full_member";
    real_name: string;
    date_expire: number;
    request_reason: string;
    team: {
      id: string;
      name: string;
      domain: string;
    };
  };
}

export interface LinkSharedEvent extends SlackEvent<"link_shared"> {
  type: "link_shared";
  channel: string;
  is_bot_user_member: boolean;
  user: string;
  message_ts: string;
  thread_ts?: string;
  links: {
    domain: string;
    url: string;
  }[];
  unfurl_id?: string;
  source?: string;
  event_ts: string;
}

export interface MemberJoinedChannelEvent
  extends SlackEvent<"member_joined_channel"> {
  type: "member_joined_channel";
  user: string;
  channel: string;
  channel_type: string;
  team: string;
  inviter?: string;
  event_ts: string;
}

export interface MemberLeftChannelEvent
  extends SlackEvent<"member_left_channel"> {
  type: "member_left_channel";
  user: string;
  channel: string;
  channel_type: string;
  team: string;
  event_ts: string;
}

export interface PinAddedEvent extends SlackEvent<"pin_added"> {
  type: "pin_added";
  user: string;
  channel_id: string;
  item: PinnedItem;
  item_user: string;
  pin_count: string;
  pinned_info: {
    channel: string;
    pinned_by: string;
    pinned_ts: number;
  };
  event_ts: string;
}
export interface PinRemovedEvent extends SlackEvent<"pin_removed"> {
  type: "pin_removed";
  user: string;
  channel_id: string;
  item: PinnedItem;
  item_user: string;
  pin_count: string;
  pinned_info: {
    channel: string;
    pinned_by: string;
    pinned_ts: number;
  };
  has_pins: boolean;
  event_ts: string;
}

export interface ReactionAddedEvent extends SlackEvent<"reaction_added"> {
  type: "reaction_added";
  user: string;
  reaction: string;
  item_user: string;
  item: ReactionMessageItem | ReactionFileItem;
  event_ts: string;
}

export interface ReactionRemovedEvent extends SlackEvent<"reaction_removed"> {
  type: "reaction_removed";
  user: string;
  reaction: string;
  item_user: string;
  item: ReactionMessageItem | ReactionFileItem;
  event_ts: string;
}

export interface SharedChannelInviteAcceptedEvent
  extends SlackEvent<"shared_channel_invite_accepted"> {
  type: "shared_channel_invite_accepted";
  approval_required: boolean;
  invite: SharedChannelInviteItem;
  channel: SharedChannelItem;
  teams_in_channel: SharedChannelTeamItem[];
  accepting_user: SharedChannelUserItem;
  event_ts: string;
}

export interface SharedChannelInviteApprovedEvent
  extends SlackEvent<"shared_channel_invite_approved"> {
  type: "shared_channel_invite_approved";
  invite: SharedChannelInviteItem;
  channel: SharedChannelItem;
  approving_team_id: string;
  teams_in_channel: SharedChannelTeamItem[];
  approving_user: SharedChannelUserItem;
  event_ts: string;
}

export interface SharedChannelInviteDeclinedEvent
  extends SlackEvent<"shared_channel_invite_declined"> {
  type: "shared_channel_invite_declined";
  invite: SharedChannelInviteItem;
  channel: SharedChannelItem;
  declining_team_id: string;
  teams_in_channel: SharedChannelTeamItem[];
  declining_user: SharedChannelUserItem;
  event_ts: string;
}

export interface SharedChannelInviteReceivedEvent
  extends SlackEvent<"shared_channel_invite_received"> {
  type: "shared_channel_invite_received";
  invite: SharedChannelInviteItem;
  channel: SharedChannelItem;
  event_ts: string;
}

export interface StarAddedEvent extends SlackEvent<"star_added"> {
  type: "star_added";
  user: string;
  item: any; // TODO
  event_ts: string;
}

export interface StarRemovedEvent extends SlackEvent<"star_removed"> {
  type: "star_removed";
  user: string;
  item: any; // TODO
  event_ts: string;
}

export interface SubteamCreatedEvent extends SlackEvent<"subteam_created"> {
  type: "subteam_created";
  subteam: Subteam;
  event_ts: string;
}

export interface SubteamMembersChangedEvent
  extends SlackEvent<"subteam_members_changed"> {
  type: "subteam_members_changed";
  subteam_id: string;
  team_id: string;
  date_previous_update: number;
  date_update: number;
  added_users?: string[];
  added_users_count?: number;
  removed_users?: string[];
  removed_users_count?: number;
  event_ts: string;
}

export interface SubteamSelfAddedEvent
  extends SlackEvent<"subteam_self_added"> {
  type: "subteam_self_added";
  subteam_id: string;
  event_ts: string;
}

export interface SubteamSelfRemovedEvent
  extends SlackEvent<"subteam_self_removed"> {
  type: "subteam_self_removed";
  subteam_id: string;
  event_ts: string;
}

export interface SubteamUpdatedEvent extends SlackEvent<"subteam_updated"> {
  type: "subteam_updated";
  subteam: Subteam;
  event_ts: string;
}

export interface TeamAccessGrantedEvent
  extends SlackEvent<"team_access_granted"> {
  type: "team_access_granted";
  team_ids: string[];
  event_ts: string;
}

export interface TeamAccessRevokedEvent
  extends SlackEvent<"team_access_revoked"> {
  type: "team_access_revoked";
  team_ids: string[];
  event_ts: string;
}

export interface TeamDomainChangedEvent
  extends SlackEvent<"team_domain_changed"> {
  type: "team_domain_changed";
  url: string;
  domain: string;
}

export interface TeamJoinEvent extends SlackEvent<"team_join"> {
  type: "team_join";
  user: { id: string };
}

export interface TeamRenameEvent extends SlackEvent<"team_rename"> {
  type: "team_rename";
  name: string;
}

export interface TokensRevokedEvent extends SlackEvent<"tokens_revoked"> {
  type: "tokens_revoked";
  tokens: {
    oauth?: string[];
    bot?: string[];
  };
}

export interface UserChangeEvent extends SlackEvent<"user_change"> {
  type: "user_change";
  user: {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: StatusEmojiDisplayInfo[];
      status_expiration: number;
      avatar_hash: string;
      huddle_state?: string;
      huddle_state_expiration_ts?: number;
      first_name: string;
      last_name: string;
      email?: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      image_1024?: string;
      team: string;
      fields: { [key: string]: { value: string; alt: string } } | [] | null;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger?: boolean;
    updated: number;
    is_email_confirmed: boolean;
    is_app_user: boolean;
    is_invited_user?: boolean;
    has_2fa?: boolean;
    locale: string;
    presence?: string;
    enterprise_user?: {
      id: string;
      enterprise_id: string;
      enterprise_name: string;
      is_admin: boolean;
      is_owner: boolean;
      teams: string[];
    };
    two_factor_type?: string;
    has_files?: boolean;
    is_workflow_bot?: boolean;
    who_can_share_contact_card: string;
  };
  cache_ts: number;
  event_ts: string;
}

export interface UserHuddleChangedEvent
  extends SlackEvent<"user_huddle_changed"> {
  type: "user_huddle_changed";
  user: {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: StatusEmojiDisplayInfo[];
      status_expiration: number;
      avatar_hash: string;
      huddle_state: string;
      huddle_state_expiration_ts: number;
      first_name: string;
      last_name: string;
      email?: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      image_1024?: string;
      team: string;
      fields: { [key: string]: { value: string; alt: string } } | [] | null;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger?: boolean;
    updated: number;
    is_email_confirmed: boolean;
    is_app_user: boolean;
    is_invited_user?: boolean;
    has_2fa?: boolean;
    locale: string;
    presence?: string;
    enterprise_user?: {
      id: string;
      enterprise_id: string;
      enterprise_name: string;
      is_admin: boolean;
      is_owner: boolean;
      teams: string[];
    };
    two_factor_type?: string;
    has_files?: boolean;
    is_workflow_bot?: boolean;
    who_can_share_contact_card: string;
  };
  cache_ts: number;
  event_ts: string;
}

export interface UserProfileChangedEvent
  extends SlackEvent<"user_profile_changed"> {
  type: "user_profile_changed";
  user: {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: StatusEmojiDisplayInfo[];
      status_expiration: number;
      avatar_hash: string;
      huddle_state: string;
      huddle_state_expiration_ts: number;
      first_name: string;
      last_name: string;
      email?: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      image_1024?: string;
      team: string;
      fields: { [key: string]: { value: string; alt: string } } | [] | null;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger?: boolean;
    updated: number;
    is_email_confirmed: boolean;
    is_app_user: boolean;
    is_invited_user?: boolean;
    has_2fa?: boolean;
    locale: string;
    presence?: string;
    enterprise_user?: {
      id: string;
      enterprise_id: string;
      enterprise_name: string;
      is_admin: boolean;
      is_owner: boolean;
      teams: string[];
    };
    two_factor_type?: string;
    has_files?: boolean;
    is_workflow_bot?: boolean;
    who_can_share_contact_card: string;
  };
  cache_ts: number;
  event_ts: string;
}

export interface UserStatusChangedEvent
  extends SlackEvent<"user_status_changed"> {
  type: "user_status_changed";
  user: {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      status_text: string;
      status_text_canonical: string;
      status_emoji: string;
      status_emoji_display_info: StatusEmojiDisplayInfo[];
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      email?: string;
      image_original?: string;
      is_custom_image?: boolean;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      image_1024?: string;
      team: string;
      fields: { [key: string]: { value: string; alt: string } } | [] | null;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger?: boolean;
    updated: number;
    is_email_confirmed: boolean;
    is_app_user: boolean;
    is_invited_user?: boolean;
    has_2fa?: boolean;
    locale: string;
    presence?: string;
    enterprise_user?: {
      id: string;
      enterprise_id: string;
      enterprise_name: string;
      is_admin: boolean;
      is_owner: boolean;
      teams: string[];
    };
    two_factor_type?: string;
    has_files?: boolean;
    is_workflow_bot?: boolean;
    who_can_share_contact_card: string;
  };
  cache_ts: number;
  event_ts: string;
}

export interface WorkflowDeletedEvent extends SlackEvent<"workflow_deleted"> {
  type: "workflow_deleted";
  workflow_id: string;
  workflow_draft_configuration: {
    version_id: string;
    app_steps: {
      app_id: string;
      workflow_step_id: string;
      callback_id: string;
    }[];
  };
  event_ts: string;
}

export interface WorkflowPublishedEvent
  extends SlackEvent<"workflow_published"> {
  type: "workflow_published";
  workflow_id: string;
  workflow_published_configuration: {
    version_id: string;
    app_steps: {
      app_id: string;
      workflow_step_id: string;
      callback_id: string;
    }[];
  };
  event_ts: string;
}

export interface WorkflowUnpublishedEvent
  extends SlackEvent<"workflow_unpublished"> {
  type: "workflow_unpublished";
  workflow_id: string;
  workflow_draft_configuration: {
    version_id: string;
    app_steps: {
      app_id: string;
      workflow_step_id: string;
      callback_id: string;
    }[];
  };
  event_ts: string;
}

export interface WorkflowStepDeletedEvent
  extends SlackEvent<"workflow_step_deleted"> {
  type: "workflow_step_deleted";
  workflow_id: string;
  workflow_draft_configuration: {
    version_id: string;
    app_steps: {
      app_id: string;
      workflow_step_id: string;
      callback_id: string;
    }[];
  };
  workflow_published_configuration?: {
    version_id: string;
    app_steps: {
      app_id: string;
      workflow_step_id: string;
      callback_id: string;
    }[];
  };
  event_ts: string;
}

export interface WorkflowStepExecuteEvent
  extends SlackEvent<"workflow_step_execute"> {
  type: "workflow_step_execute";
  callback_id: string;
  workflow_step: {
    workflow_step_execute_id: string;
    workflow_id: string;
    workflow_instance_id: string;
    step_id: string;
    inputs: { [key: string]: { value: any } };
    outputs: { name: string; type: string; label: string }[];
  };
  event_ts: string;
}

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
  channel_type: ChannelTypes;
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
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
  channel_type: ChannelTypes;
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
  blocks?: AnyMessageBlock[];
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface ChannelPurposeMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "channel_purpose";
  user: string;
  channel: string;
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
  text: string;
  ts: string;
  event_ts: string;
}

export interface EKMAccessDeniedMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "ekm_access_denied";
  event_ts: string;
  channel: string;
  channel_type: ChannelTypes;
  ts: string;
  text: string; // This will not have any meaningful content within
  user: "UREVOKEDU";
}

export interface FileShareMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "file_share";
  text: string;
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
  files?: File[];
  upload?: boolean;
  display_as_bot?: boolean;
  x_files?: string[];
  user: string;
  parent_user_id?: string;
  ts: string;
  thread_ts?: string;
  channel: string;
  channel_type: ChannelTypes;
  event_ts: string;
}

export interface MeMessageEvent extends SlackEvent<"message"> {
  type: "message";
  subtype: "me_message";
  event_ts: string;
  channel: string;
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  channel_type: ChannelTypes;
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
  blocks?: AnyMessageBlock[];
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
  channel_type: ChannelTypes;
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

export type ChannelTypes = "channel" | "group" | "im" | "mpim" | "app_home";

// -----------------------------------------------------------

export interface BotProfile {
  id: string;
  name: string;
  app_id: string;
  team_id: string;
  icons: { [size: string]: string };
  updated: number;
  deleted: boolean;
}

export interface PinnedMessageItem {
  client_msg_id?: string;
  type: string;
  app_id?: string;
  team?: string;
  user: string;
  bot_id?: string;
  bot_profile?: BotProfile;
  text?: string;
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
  pinned_to?: string[];
  permalink: string;
}

export interface PinnedFileItem {
  id: string;
  // TODO: Add all other possible properties here
}

export interface PinnedItem {
  type: string;
  channel: string;
  created_by: string;
  created: number;
  message?: PinnedMessageItem;
  file?: PinnedFileItem;
}

export interface SharedChannelTeamItem {
  id: string;
  name: string;
  icon: Record<string, unknown>;
  is_verified: boolean;
  domain: string;
  date_created: number;
}

export interface SharedChannelUserItem {
  id: string;
  team_id: string;
  name: string;
  updated: number;
  profile: {
    real_name: string;
    display_name: string;
    real_name_normalized: string;
    display_name_normalized: string;
    team: string;
    avatar_hash: string;
    email: string;
    image_24: string;
    image_32: string;
    image_48: string;
    image_72: string;
    image_192: string;
    image_512: string;
  };
}
export interface SharedChannelInviteItem {
  id: string;
  date_created: number;
  date_invalid: number;
  inviting_team: SharedChannelTeamItem;
  inviting_user: SharedChannelUserItem;
  recipient_email?: string;
  recipient_user_id?: string;
}

export interface SharedChannelItem {
  id: string;
  is_private: boolean;
  is_im: boolean;
  name: string;
}

export interface Subteam {
  id: string;
  team_id?: string;
  is_usergroup: boolean;
  is_subteam: boolean;
  name: string;
  description?: string;
  handle: string;
  is_external: boolean;
  date_create: number;
  date_update?: number;
  date_delete?: number;
  auto_provision: boolean;
  enterprise_subteam_id?: string;
  created_by: string;
  updated_by?: string;
  prefs?: {
    channels?: string[];
    groups?: string[];
  };
  users: string[];
  user_count: number;
  channel_count?: number;
}

export interface StatusEmojiDisplayInfo {
  emoji_name?: string;
  display_alias?: string;
  display_url?: string;
}

export interface ReactionMessageItem {
  type: "message";
  channel: string;
  ts: string;
}

export interface ReactionFileItem {
  type: "file";
  channel: string;
  file: string;
}
