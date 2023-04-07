import {
  MessageAttachment,
  LinkUnfurls,
  MessageMetadata,
  ModalView,
  HomeView,
} from "@slack/types";
import { TypesafeBlock } from "../utility/typesafe-blocks";

export interface SlackAPIRequest {
  token?: string;
}

export interface LocaleAware {
  include_locale?: boolean;
}

export interface Searchable {
  query: string;
  highlight?: boolean;
  sort: "score" | "timestamp";
  sort_dir: "asc" | "desc";
  team_id?: string;
}

export interface CursorPaginationEnabled {
  limit?: number; // natural integer, max of 1000
  cursor?: string; // find this in a response's `response_metadata.next_cursor`
}

export interface TimelinePaginationEnabled {
  oldest?: string;
  latest?: string;
  inclusive?: boolean;
}

export interface TraditionalPagingEnabled {
  page?: number; // default: 1
  count?: number; // default: 100
}

/*
 * MethodRequest types (no formal relationship other than the generic constraint in Method<>)
 */

/*
 * `admin.*`
 */
export interface AdminAnalyticsGetFileRequest extends SlackAPIRequest {
  type: string;
  date?: string;
  metadata_only?: boolean;
}
export interface AdminAppsApproveRequest extends SlackAPIRequest {
  app_id?: string;
  request_id?: string;
  team_id?: string;
}
export interface AdminAppsApprovedListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id?: string;
  enterprise_id?: string;
}
export interface AdminAppsClearResolutionRequest extends SlackAPIRequest {
  app_id: string;
  enterprise_id?: string;
  team_id?: string;
}
export interface AdminAppsRequestsCancelRequest extends SlackAPIRequest {
  request_id: string;
  enterprise_id?: string;
  team_id?: string;
}
export interface AdminAppsRequestsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id?: string;
}
export interface AdminAppsRestrictRequest extends SlackAPIRequest {
  app_id?: string;
  request_id?: string;
  team_id?: string;
}
export interface AdminAppsRestrictedListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id?: string;
  enterprise_id?: string;
}
export interface AdminAppsUninstallRequest extends SlackAPIRequest {
  app_id: string;
  enterprise_id?: string;
  team_ids?: string[];
}
export interface AdminAuthPolicyAssignEntitiesRequest extends SlackAPIRequest {
  entity_ids: string[];
  entity_type: string;
  policy_name: string;
}
export interface AdminAuthPolicyGetEntitiesRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  policy_name: string;
  entity_type?: string;
}
export interface AdminAuthPolicyRemoveEntitiesRequest extends SlackAPIRequest {
  entity_ids: string[];
  entity_type: string;
  policy_name: string;
}
export interface AdminBarriersCreateRequest extends SlackAPIRequest {
  barriered_from_usergroup_ids: string[];
  primary_usergroup_id: string;
  restricted_subjects: string[];
}

export interface AdminBarriersDeleteRequest extends SlackAPIRequest {
  barrier_id: string;
}

export interface AdminBarriersListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {}

export interface AdminBarriersUpdateRequest extends SlackAPIRequest {
  barrier_id: string;
  barriered_from_usergroup_ids: string[];
  primary_usergroup_id: string;
  restricted_subjects: string[];
}

export interface AdminConversationsArchiveRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsBulkArchiveRequest extends SlackAPIRequest {
  channel_ids: string[];
}
export interface AdminConversationsBulkDeleteRequest extends SlackAPIRequest {
  channel_ids: string[];
}
export interface AdminConversationsBulkMoveRequest extends SlackAPIRequest {
  channel_ids: string[];
  target_team_id: string;
}
export interface AdminConversationsConvertToPrivateRequest
  extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsConvertToPublicRequest
  extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsCreateRequest extends SlackAPIRequest {
  is_private: boolean;
  name: string;
  description?: string;
  org_wide?: boolean;
  team_id?: string;
}
export interface AdminConversationsDeleteRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsDisconnectSharedRequest
  extends SlackAPIRequest {
  channel_id: string;
  leaving_team_ids?: string[];
}
export interface AdminConversationsEKMListOriginalConnectedChannelInfoRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  channel_ids?: string[];
  team_ids?: string[];
}
export interface AdminConversationsGetConversationPrefsRequest
  extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsGetTeamsRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  channel_id: string;
}
export interface AdminConversationsInviteRequest extends SlackAPIRequest {
  channel_id: string;
  user_ids: string[];
}
export interface AdminConversationsRenameRequest extends SlackAPIRequest {
  channel_id: string;
  name: string;
}
export interface AdminConversationsRestrictAccessAddGroupRequest
  extends SlackAPIRequest {
  channel_id: string;
  group_id: string;
  team_id?: string;
}
export interface AdminConversationsRestrictAccessListGroupsRequest
  extends SlackAPIRequest {
  channel_id: string;
  team_id?: string;
}
export interface AdminConversationsRestrictAccessRemoveGroupRequest
  extends SlackAPIRequest {
  channel_id: string;
  group_id: string;
  team_id: string;
}
export interface AdminConversationsGetCustomRetentionRequest
  extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsSetCustomRetentionRequest
  extends SlackAPIRequest {
  channel_id: string;
  duration_days: number;
}
export interface AdminConversationsRemoveCustomRetentionRequest
  extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsLookupRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  last_message_activity_before: number;
  team_ids: string[];
  max_member_count?: number;
}
export interface AdminConversationsSearchRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  query?: string;
  search_channel_types?: string[];
  sort?: "relevant" | "name" | "member_count" | "created";
  sort_dir?: "asc" | "desc";
  team_ids?: string[];
}
export interface AdminConversationsSetConversationPrefsRequest
  extends SlackAPIRequest {
  channel_id: string;
  prefs: Record<string, unknown>;
}
export interface AdminConversationsSetTeamsRequest extends SlackAPIRequest {
  channel_id: string;
  team_id?: string;
  target_team_ids?: string[];
  org_channel?: boolean;
}
export interface AdminConversationsUnarchiveRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminEmojiAddRequest extends SlackAPIRequest {
  name: string;
  url: string;
}
export interface AdminEmojiAddAliasRequest extends SlackAPIRequest {
  name: string;
  alias_for: string;
}
export interface AdminEmojiListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {}
export interface AdminEmojiRemoveRequest extends SlackAPIRequest {
  name: string;
}
export interface AdminEmojiRenameRequest extends SlackAPIRequest {
  name: string;
  new_name: string;
}
export interface AdminInviteRequestsApproveRequest extends SlackAPIRequest {
  invite_request_id: string;
  team_id: string;
}
export interface AdminInviteRequestsApprovedListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminInviteRequestsDenyRequest extends SlackAPIRequest {
  invite_request_id: string;
  team_id: string;
}
export interface AdminInviteRequestsDeniedListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminInviteRequestsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminRolesAddAssignmentsRequest extends SlackAPIRequest {
  role_id: string;
  entity_ids: string[];
  user_ids: string[];
}
export interface AdminRolesListAssignmentsRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  entity_ids?: string[];
  role_ids?: string[];
  sort_dir?: string;
}
export interface AdminRolesRemoveAssignmentsRequest extends SlackAPIRequest {
  role_id: string;
  entity_ids: string[];
  user_ids: string[];
}
export interface AdminTeamsAdminsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminTeamsCreateRequest extends SlackAPIRequest {
  team_domain: string;
  team_name: string;
  team_description?: string;
  team_discoverability?: string;
}
export interface AdminTeamsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {}
export interface AdminTeamsOwnersListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminTeamsSettingsInfoRequest extends SlackAPIRequest {
  team_id: string;
}
export interface AdminTeamsSettingsSetDefaultChannelsRequest
  extends SlackAPIRequest {
  team_id: string;
  channel_ids: string[];
}
export interface AdminTeamsSettingsSetDescriptionRequest
  extends SlackAPIRequest {
  team_id: string;
  description: string;
}
export interface AdminTeamsSettingsSetDiscoverabilityRequest
  extends SlackAPIRequest {
  team_id: string;
  discoverability: "open" | "invite_only" | "closed" | "unlisted";
}
export interface AdminTeamsSettingsSetIconRequest extends SlackAPIRequest {
  team_id: string;
  image_url: string;
}
export interface AdminTeamsSettingsSetNameRequest extends SlackAPIRequest {
  team_id: string;
  name: string;
}
export interface AdminUsergroupsAddChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  team_id?: string;
  channel_ids: string | string[];
}
export interface AdminUsergroupsAddTeamsRequest extends SlackAPIRequest {
  usergroup_id: string;
  team_ids: string | string[];
  auto_provision?: boolean;
}
export interface AdminUsergroupsListChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  include_num_members?: boolean;
  team_id?: string;
}
export interface AdminUsergroupsRemoveChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  channel_ids: string | string[];
}
export interface AdminUsersAssignRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
}
export interface AdminUsersInviteRequest extends SlackAPIRequest {
  channel_ids: string;
  email: string;
  team_id: string;
  custom_message?: string;
  email_password_policy_enabled?: boolean;
  guest_expiration_ts?: string;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  real_name?: string;
  resend?: boolean;
}
export interface AdminUsersListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  team_id: string;
}
export interface AdminUsersRemoveRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetAdminRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetExpirationRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
  expiration_ts: number;
}
export interface AdminUsersSetOwnerRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetRegularRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSessionListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  user_id?: string;
  team_id?: string;
}
export interface AdminUsersSessionResetRequest extends SlackAPIRequest {
  user_id: string;
  mobile_only?: boolean;
  web_only?: boolean;
}
export interface AdminUsersSessionResetBulkRequest extends SlackAPIRequest {
  user_ids: string[];
  mobile_only?: boolean;
  web_only?: boolean;
}
export interface AdminUsersSessionInvalidateRequest extends SlackAPIRequest {
  session_id: string;
  team_id: string;
}
export interface AdminUsersSessionGetSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
}
export interface AdminUsersSessionSetSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
  desktop_app_browser_quit?: boolean;
  duration?: number;
}
export interface AdminUsersSessionClearSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
}

export interface AdminUsersUnsupportedVersionsExportRequest
  extends SlackAPIRequest {
  date_end_of_support?: number;
  date_sessions_started?: number;
}

/*
 * `api.*`
 */
export interface APITestRequest extends SlackAPIRequest {}

/*
 * `apps.*`
 */
export interface AppsConnectionsOpenRequest extends SlackAPIRequest {
  // currently the method page lists Client id and client secret as optional Request
  // circle back here to see if they stay as optional or are removed
}

export interface AppsEventAuthorizationsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  event_context: string;
}
export interface AppsUninstallRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
}

/*
 * `auth.*`
 */
export interface AuthRevokeRequest extends SlackAPIRequest {
  test?: boolean;
}
export interface AuthTeamsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  include_icon?: boolean;
}
export interface AuthTestRequest extends SlackAPIRequest {}

/*
 * `bots.*`
 */
export interface BotsInfoRequest extends SlackAPIRequest {
  bot: string;
  team_id?: string;
}

/*
 * `bookmarks.*`
 */
export interface BookmarksAddRequest extends SlackAPIRequest {
  channel_id: string;
  title: string;
  type: string;
  emoji?: string;
  entity_id?: string;
  link?: string;
  parent_id?: string;
}

export interface BookmarksEditRequest extends SlackAPIRequest {
  bookmark_id: string;
  channel_id: string;
  emoji?: string;
  link?: string;
  title?: string;
}

export interface BookmarksListRequest extends SlackAPIRequest {
  channel_id: string;
}

export interface BookmarksRemoveRequest extends SlackAPIRequest {
  bookmark_id: string;
  channel_id: string;
}

/*
 * `chat.*`
 */
export interface ChatDeleteRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
  as_user?: boolean;
}
export interface ChatDeleteScheduledMessageRequest extends SlackAPIRequest {
  channel: string;
  scheduled_message_id: string;
  as_user?: boolean;
}
export interface ChatGetPermalinkRequest extends SlackAPIRequest {
  channel: string;
  message_ts: string;
}
export interface ChatMeMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
}
export interface ChatPostEphemeralRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  user: string;
  blocks?: TypesafeBlock[];
  attachments?: MessageAttachment[];
  thread_ts?: string;

  // with chat:write.customize
  icon_emoji?: string;
  icon_url?: string;
  username?: string;

  // legacy ones
  link_names?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}
export interface ChatPostMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  blocks?: TypesafeBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  thread_ts?: string;
  reply_broadcast?: boolean; // if specified, thread_ts must be set
  unfurl_links?: boolean;
  unfurl_media?: boolean;

  // with chat:write.customize
  icon_emoji?: string;
  icon_url?: string;
  username?: string;

  // legacy ones
  link_names?: boolean;
  mrkdwn?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}
export interface ChatScheduleMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  post_at: string | number;
  blocks?: TypesafeBlock[];
  attachments?: MessageAttachment[];
  thread_ts?: string;
  metadata?: MessageMetadata;
  reply_broadcast?: boolean; // if specified, thread_ts must be set
  team_id?: string;
  unfurl_links?: boolean;
  unfurl_media?: boolean;

  // legacy ones
  link_names?: boolean;
  as_user?: boolean;
  parse?: "full" | "none";
}
export interface ChatScheduledMessagesListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  channel: string;
  latest: number;
  oldest: number;
  team_id?: string; // required if org token is used
}
// ChannelAndTS and SourceAndUnfurlID are used as either-or mixins for ChatUnfurlRequest
interface ChannelAndTSRequest {
  /**
   * @description Channel ID of the message. Both `channel` and `ts` must be provided together, or `unfurl_id` and
   * `source` must be provided together.
   */
  channel: string;
  /**
   * @description Timestamp of the message to add unfurl behavior to.
   */
  ts: string;
}

interface SourceAndUnfurlIDRequest {
  /**
   * @description The source of the link to unfurl. The source may either be `composer`, when the link is inside the
   * message composer, or `conversations_history`, when the link has been posted to a conversation.
   */
  source: "composer" | "conversations_history";
  /**
   * @description The ID of the link to unfurl. Both `unfurl_id` and `source` must be provided together, or `channel`
   * and `ts` must be provided together.
   */
  unfurl_id: string;
}
export type ChatUnfurlRequest = (
  | ChannelAndTSRequest
  | SourceAndUnfurlIDRequest
) &
  SlackAPIRequest & {
    /**
     * @description URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl
     * blocks or message attachments.
     */
    unfurls: LinkUnfurls;
    /**
     * @description Provide a simply-formatted string to send as an ephemeral message to the user as invitation to
     * authenticate further and enable full unfurling behavior. Provides two buttons, Not now or Never ask me again.
     */
    user_auth_message?: string;
    /**
     * @description Set to `true` to indicate the user must install your Slack app to trigger unfurls for this domain.
     * Defaults to `false`.
     */
    user_auth_required?: boolean;
    /**
     * @description Send users to this custom URL where they will complete authentication in your app to fully trigger
     * unfurling. Value should be properly URL-encoded.
     */
    user_auth_url?: string;
    /**
     * @description Provide a JSON based array of structured blocks presented as URL-encoded string to send as an
     * ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior.
     */
    user_auth_blocks?: TypesafeBlock[];
  };
export interface ChatUpdateRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  ts: string;
  blocks?: TypesafeBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  file_ids?: string[];
  reply_broadcast?: boolean;

  // legacy ones
  link_names?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}

/*
 * `conversations.*`
 */
export interface ConversationsAcceptSharedInviteRequest
  extends SlackAPIRequest {
  channel_name: string;
  channel_id?: string;
  free_trial_accepted?: boolean;
  invite_id?: string;
  is_private?: boolean;
  team_id?: string;
}
export interface ConversationsApproveSharedInviteRequest
  extends SlackAPIRequest {
  invite_id: string;
  target_team?: string;
}
export interface ConversationsArchiveRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsCloseRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsCreateRequest extends SlackAPIRequest {
  name: string;
  is_private?: boolean;
  team_id?: string;
}
export interface ConversationsDeclineSharedInviteRequest
  extends SlackAPIRequest {
  invite_id: string;
  target_team?: string;
}
export interface ConversationsHistoryRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled,
    TimelinePaginationEnabled {
  channel: string;
  include_all_metadata?: boolean;
}
export interface ConversationsInfoRequest extends SlackAPIRequest, LocaleAware {
  channel: string;
  include_num_members?: boolean;
}
export interface ConversationsInviteRequest extends SlackAPIRequest {
  channel: string;
  users: string; // comma-separated list of users
}
export interface ConversationsInviteSharedRequest extends SlackAPIRequest {
  channel: string;
  emails?: string[];
  user_ids?: string[];
}
export interface ConversationsJoinRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsKickRequest extends SlackAPIRequest {
  channel: string;
  user: string;
}
export interface ConversationsLeaveRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  exclude_archived?: boolean;
  types?: string; // comma-separated list of conversation types
  team_id?: string;
}
export interface ConversationsListConnectInvitesRequest
  extends SlackAPIRequest {
  count?: number;
  cursor?: string;
  team_id?: string;
}
export interface ConversationsMarkRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
}
export interface ConversationsMembersRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  channel: string;
}
export interface ConversationsOpenRequest extends SlackAPIRequest {
  channel?: string;
  users?: string; // comma-separated list of users
  return_im?: boolean;
}
export interface ConversationsRenameRequest extends SlackAPIRequest {
  channel: string;
  name: string;
}
export interface ConversationsRepliesRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled,
    TimelinePaginationEnabled {
  channel: string;
  ts: string;
  include_all_metadata?: boolean;
}
export interface ConversationsSetPurposeRequest extends SlackAPIRequest {
  channel: string;
  purpose: string;
}
export interface ConversationsSetTopicRequest extends SlackAPIRequest {
  channel: string;
  topic: string;
}
export interface ConversationsUnarchiveRequest extends SlackAPIRequest {
  channel: string;
}

/*
 * `dnd.*`
 */
export interface DndEndDndRequest extends SlackAPIRequest {}
export interface DndEndSnoozeRequest extends SlackAPIRequest {}
export interface DndInfoRequest extends SlackAPIRequest {
  user: string;
}
export interface DndSetSnoozeRequest extends SlackAPIRequest {
  num_minutes: number;
}
export interface DndTeamInfoRequest extends SlackAPIRequest {
  users?: string; // comma-separated list of users
}

/*
 * `emoji.*`
 */
export interface EmojiListRequest extends SlackAPIRequest {
  include_categories?: boolean;
}

/*
 * `files.*`
 */
export interface FilesDeleteRequest extends SlackAPIRequest {
  file: string; // file id
}
export interface FilesInfoRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  file: string; // file id
  count?: number;
  page?: number;
}
export interface FilesListRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled {
  channel?: string;
  user?: string;
  ts_from?: string;
  ts_to?: string;
  types?: string; // comma-separated list of file types
  show_files_hidden_by_limit?: boolean;
  team_id?: string;
}
export interface FilesRevokePublicURLRequest extends SlackAPIRequest {
  file: string; // file id
}
export interface FilesSharedPublicURLRequest extends SlackAPIRequest {
  file: string; // file id
}
/**
 * Legacy files.upload API files upload Request
 * */
export interface FilesUploadRequest extends FileUpload, SlackAPIRequest {}
interface FileUpload {
  channels?: string; // comma-separated list of channels
  content?: string; // if omitted, must provide `file`
  file?: Uint8Array | string; // if omitted, must provide `content`
  filename?: string;
  filetype?: string;
  initial_comment?: string;
  thread_ts?: string; // if specified, `channels` must be set
  title?: string;
}

export interface FilesUploadV2Request extends FileUploadV2, SlackAPIRequest {
  file_uploads?: Omit<
    FileUploadV2,
    "channel_id" | "channels" | "initial_comment" | "thread_ts"
  >[];
  request_file_info?: boolean;
}

export type FileUploadV2 = FileUpload & {
  alt_text?: string; // for image uploads
  channel_id?: string;
  snippet_type?: string; // for code snippets
};

/**
 * Gets a URL for an edge external file upload. Method:
 * {@link https://api.slack.com/methods/files.getUploadURLExternal files.getUploadURLExternal}
 */
export interface FilesGetUploadURLExternalRequest extends SlackAPIRequest {
  filename: string;
  length: number;
  alt_text?: string;
  snippet_type?: string;
}
/**
 * Finishes an upload started with files.getUploadURLExternal. Method:
 * {@link https://api.slack.com/methods/files.completeUploadExternal files.completeUploadExternal}
 * */
export interface FilesCompleteUploadExternalRequest extends SlackAPIRequest {
  files: FileUploadComplete[];
  channel_id?: string; // if omitted, file will be private
  initial_comment?: string;
  thread_ts?: string;
}
interface FileUploadComplete {
  id: string; // file id
  title?: string; // filename
}
export interface FilesCommentsDeleteRequest extends SlackAPIRequest {
  file: string; // file id
  id: string; // comment id
}
// either file or external_id is required
export interface FilesRemoteInfoRequest extends SlackAPIRequest {
  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  ts_from?: string;
  ts_to?: string;
  channel?: string;
}
export interface FilesRemoteAddRequest extends SlackAPIRequest {
  title: string;
  external_url: string;
  external_id: string; // a unique identifier for the file in your system
  filetype: string; // possible values (except for 'auto'): https://api.slack.com/types/file#file_types
  preview_image?: Uint8Array;
  indexable_file_contents?: Uint8Array;
}
export interface FilesRemoteUpdateRequest extends SlackAPIRequest {
  title?: string;
  external_url?: string;
  filetype?: string; // possible values (except for 'auto'): https://api.slack.com/types/file#file_types
  preview_image?: Uint8Array;
  indexable_file_contents?: Uint8Array;

  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteRemoveRequest extends SlackAPIRequest {
  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteShareRequest extends SlackAPIRequest {
  channels: string; // comma-separated list of channel ids

  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}

/*
 * `migration.*`
 */
export interface MigrationExchangeRequest extends SlackAPIRequest {
  users: string; // comma-separated list of users
  to_old?: boolean;
  team_id?: string;
}

/*
 * `oauth.*`
 */
export interface OAuthV2AccessRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
  code?: string; // not required for token rotation
  redirect_uri?: string;
  grant_type?: string;
  refresh_token?: string;
}
export interface OAuthV2ExchangeRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
}

/*
 * `openid.connect.*`
 */
export interface OpenIDConnectTokenRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
  code?: string;
  redirect_uri?: string;
  grant_type?: "authorization_code" | "refresh_token";
  refresh_token?: string;
}
export interface OpenIDConnectUserInfoRequest extends SlackAPIRequest {}

/*
 * `pins.*`
 */
export interface PinsAddRequest extends SlackAPIRequest {
  channel: string;
  timestamp: string;
}
export interface PinsListRequest extends SlackAPIRequest {
  channel: string;
}
export interface PinsRemoveRequest extends SlackAPIRequest {
  channel: string;
  timestamp: string;
}

/*
 * `reactions.*`
 */
export interface ReactionsAddRequest extends SlackAPIRequest {
  name: string;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}
export interface ReactionsGetRequest extends SlackAPIRequest {
  full?: boolean;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}
export interface ReactionsListRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled,
    CursorPaginationEnabled {
  user?: string;
  full?: boolean;
  team_id?: string;
}
export interface ReactionsRemoveRequest extends SlackAPIRequest {
  name: string;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}

/*
 * `reminders.*`
 */
export interface RemindersAddRequest extends SlackAPIRequest {
  text: string;
  time: string | number;
  user?: string;
}
export interface RemindersCompleteRequest extends SlackAPIRequest {
  reminder: string;
}
export interface RemindersDeleteRequest extends SlackAPIRequest {
  reminder: string;
}
export interface RemindersInfoRequest extends SlackAPIRequest {
  reminder: string;
}
export interface RemindersListRequest extends SlackAPIRequest {}

/*
 * `rtm.*`
 */
export interface RTMConnectRequest extends SlackAPIRequest {
  batch_presence_aware?: boolean;
  presence_sub?: boolean;
}
export interface RTMStartRequest extends SlackAPIRequest, LocaleAware {
  batch_presence_aware?: boolean;
  mpim_aware?: boolean;
  no_latest?: "0" | "1";
  no_unreads?: string;
  presence_sub?: boolean;
  simple_latest?: boolean;
}

/*
 * `search.*`
 */
export interface SearchAllRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled,
    Searchable {}
export interface SearchFilesRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled,
    Searchable {}
export interface SearchMessagesRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled,
    Searchable {}

/*
 * `stars.*`
 */
export interface StarsAddRequest extends SlackAPIRequest {
  // must supply one of:
  channel?: string; // paired with `timestamp`
  timestamp?: string; // paired with `channel`
  file?: string; // file id
  file_comment?: string;
}
export interface StarsListRequest
  extends SlackAPIRequest,
    TraditionalPagingEnabled,
    CursorPaginationEnabled {}
export interface StarsRemoveRequest extends SlackAPIRequest {
  // must supply one of:
  channel?: string; // paired with `timestamp`
  timestamp?: string; // paired with `channel`
  file?: string; // file id
  file_comment?: string;
}

/*
 * `team.*`
 */
export interface TeamAccessLogsRequest extends SlackAPIRequest {
  before?: number;
  count?: number;
  page?: number;
  team_id?: string;
}
export interface TeamBillableInfoRequest extends SlackAPIRequest {
  user?: string;
  team_id?: string;
}
export interface TeamBillingInfoRequest extends SlackAPIRequest {}
export interface TeamInfoRequest extends SlackAPIRequest {
  // Team to get info on, if omitted, will return information about the current team.
  // Will only return team that the authenticated token is allowed to see through external shared channels
  team?: string;
  domain?: string; // available only for Enterprise Grid
}
export interface TeamIntegrationLogsRequest extends SlackAPIRequest {
  app_id?: string;
  change_type?: string; // TODO: list types: 'x' | 'y' | 'z'
  count?: number;
  page?: number;
  service_id?: string;
  user?: string;
  team_id?: string;
}
export interface TeamProfileGetRequest extends SlackAPIRequest {
  visibility?: "all" | "visible" | "hidden";
  team_id?: string;
}
export interface TeamPreferencesListRequest extends SlackAPIRequest {}

/*
 * `usergroups.*`
 */
export interface UsergroupsCreateRequest extends SlackAPIRequest {
  name: string;
  channels?: string; // comma-separated list of channels
  description?: string;
  handle?: string;
  include_count?: boolean;
}
export interface UsergroupsDisableRequest extends SlackAPIRequest {
  usergroup: string;
  include_count?: boolean;
}
export interface UsergroupsEnableRequest extends SlackAPIRequest {
  usergroup: string;
  include_count?: boolean;
}
export interface UsergroupsListRequest extends SlackAPIRequest {
  include_count?: boolean;
  include_disabled?: boolean;
  include_users?: boolean;
}
export interface UsergroupsUpdateRequest extends SlackAPIRequest {
  usergroup: string;
  channels?: string; // comma-separated list of channels
  description?: string;
  handle?: string;
  include_count?: boolean;
  name?: string;
}
export interface UsergroupsUsersListRequest extends SlackAPIRequest {
  usergroup: string;
  include_disabled?: boolean;
}
export interface UsergroupsUsersUpdateRequest extends SlackAPIRequest {
  usergroup: string;
  users: string; // comma-separated list of users
  include_count?: boolean;
}

/*
 * `users.*`
 */
export interface UsersConversationsRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled {
  exclude_archived?: boolean;
  types?: string; // comma-separated list of conversation types
  user?: string;
  team_id?: string;
}
export interface UsersDeletePhotoRequest extends SlackAPIRequest {}
export interface UsersGetPresenceRequest extends SlackAPIRequest {
  user: string;
}
export interface UsersIdentityRequest extends SlackAPIRequest {}
export interface UsersInfoRequest extends SlackAPIRequest, LocaleAware {
  user: string;
}
export interface UsersListRequest
  extends SlackAPIRequest,
    CursorPaginationEnabled,
    LocaleAware {
  presence?: boolean; // deprecated, defaults to false
  team_id?: string;
}
export interface UsersLookupByEmailRequest extends SlackAPIRequest {
  email: string;
}
export interface UsersSetPhotoRequest extends SlackAPIRequest {
  image: Uint8Array;
  crop_w?: number;
  crop_x?: number;
  crop_y?: number;
}
export interface UsersSetPresenceRequest extends SlackAPIRequest {
  presence: "auto" | "away";
}
export interface UsersProfileGetRequest extends SlackAPIRequest {
  include_labels?: boolean;
  user?: string;
}
export interface UsersProfileSetRequest extends SlackAPIRequest {
  profile?: string; // url-encoded json
  user?: string;
  name?: string; // usable if `profile` is not passed
  value?: string; // usable if `profile` is not passed
}

/*
 * `views.*`
 */

export interface ViewsOpenRequest extends SlackAPIRequest {
  trigger_id: string;
  view: ModalView;
}

export interface ViewsPushRequest extends SlackAPIRequest {
  trigger_id: string;
  view: ModalView;
}

export interface ViewsPublishRequest extends SlackAPIRequest {
  user_id: string;
  view: HomeView;
  hash?: string;
}

export interface ViewsUpdateRequest extends SlackAPIRequest {
  view_id?: string;
  view: ModalView;
  external_id?: string;
  hash?: string;
}
