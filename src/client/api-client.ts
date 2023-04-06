import { SlackAPIError } from "../errors";
import {
  APITestRequest,
  AdminAppsApproveRequest,
  AdminAppsApprovedListRequest,
  AdminAppsClearResolutionRequest,
  AdminAppsRequestsCancelRequest,
  AdminAppsRequestsListRequest,
  AdminAppsRestrictRequest,
  AdminAppsRestrictedListRequest,
  AdminAppsUninstallRequest,
  AdminAuthPolicyAssignEntitiesRequest,
  AdminAuthPolicyGetEntitiesRequest,
  AdminAuthPolicyRemoveEntitiesRequest,
  AdminBarriersCreateRequest,
  AdminBarriersDeleteRequest,
  AdminBarriersListRequest,
  AdminBarriersUpdateRequest,
  AdminConversationsArchiveRequest,
  AdminConversationsBulkArchiveRequest,
  AdminConversationsBulkDeleteRequest,
  AdminConversationsBulkMoveRequest,
  AdminConversationsConvertToPrivateRequest,
  AdminConversationsCreateRequest,
  AdminConversationsDeleteRequest,
  AdminConversationsDisconnectSharedRequest,
  AdminConversationsEKMListOriginalConnectedChannelInfoRequest,
  AdminConversationsGetConversationPrefsRequest,
  AdminConversationsGetCustomRetentionRequest,
  AdminConversationsGetTeamsRequest,
  AdminConversationsInviteRequest,
  AdminConversationsRemoveCustomRetentionRequest,
  AdminConversationsRenameRequest,
  AdminConversationsRestrictAccessAddGroupRequest,
  AdminConversationsRestrictAccessListGroupsRequest,
  AdminConversationsRestrictAccessRemoveGroupRequest,
  AdminConversationsSearchRequest,
  AdminConversationsSetConversationPrefsRequest,
  AdminConversationsSetCustomRetentionRequest,
  AdminConversationsSetTeamsRequest,
  AdminConversationsUnarchiveRequest,
  AdminEmojiAddAliasRequest,
  AdminEmojiAddRequest,
  AdminEmojiListRequest,
  AdminEmojiRemoveRequest,
  AdminEmojiRenameRequest,
  AdminInviteRequestsApproveRequest,
  AdminInviteRequestsApprovedListRequest,
  AdminInviteRequestsDeniedListRequest,
  AdminInviteRequestsDenyRequest,
  AdminInviteRequestsListRequest,
  AdminTeamsAdminsListRequest,
  AdminTeamsCreateRequest,
  AdminTeamsListRequest,
  AdminTeamsOwnersListRequest,
  AdminTeamsSettingsInfoRequest,
  AdminTeamsSettingsSetDefaultChannelsRequest,
  AdminTeamsSettingsSetDescriptionRequest,
  AdminTeamsSettingsSetDiscoverabilityRequest,
  AdminTeamsSettingsSetIconRequest,
  AdminTeamsSettingsSetNameRequest,
  AdminUsergroupsAddChannelsRequest,
  AdminUsergroupsAddTeamsRequest,
  AdminUsergroupsListChannelsRequest,
  AdminUsergroupsRemoveChannelsRequest,
  AdminUsersAssignRequest,
  AdminUsersInviteRequest,
  AdminUsersListRequest,
  AdminUsersRemoveRequest,
  AdminUsersSessionClearSettingsRequest,
  AdminUsersSessionGetSettingsRequest,
  AdminUsersSessionInvalidateRequest,
  AdminUsersSessionListRequest,
  AdminUsersSessionResetBulkRequest,
  AdminUsersSessionResetRequest,
  AdminUsersSessionSetSettingsRequest,
  AdminUsersSetAdminRequest,
  AdminUsersSetExpirationRequest,
  AdminUsersSetOwnerRequest,
  AdminUsersSetRegularRequest,
  AdminUsersUnsupportedVersionsExportRequest,
  AppsConnectionsOpenRequest,
  AppsEventAuthorizationsListRequest,
  AppsUninstallRequest,
  AuthRevokeRequest,
  AuthTeamsListRequest,
  AuthTestRequest,
  BookmarksAddRequest,
  BookmarksEditRequest,
  BookmarksListRequest,
  BookmarksRemoveRequest,
  BotsInfoRequest,
  ChatDeleteRequest,
  ChatDeleteScheduledMessageRequest,
  ChatGetPermalinkRequest,
  ChatMeMessageRequest,
  ChatPostEphemeralRequest,
  ChatPostMessageRequest,
  ChatScheduleMessageRequest,
  ChatScheduledMessagesListRequest,
  ChatUnfurlRequest,
  ChatUpdateRequest,
  ConversationsAcceptSharedInviteRequest,
  ConversationsApproveSharedInviteRequest,
  ConversationsArchiveRequest,
  ConversationsCloseRequest,
  ConversationsCreateRequest,
  ConversationsDeclineSharedInviteRequest,
  ConversationsHistoryRequest,
  ConversationsInfoRequest,
  ConversationsInviteRequest,
  ConversationsInviteSharedRequest,
  ConversationsJoinRequest,
  ConversationsKickRequest,
  ConversationsLeaveRequest,
  ConversationsListConnectInvitesRequest,
  ConversationsListRequest,
  ConversationsMarkRequest,
  ConversationsMembersRequest,
  ConversationsOpenRequest,
  ConversationsRenameRequest,
  ConversationsRepliesRequest,
  ConversationsSetPurposeRequest,
  ConversationsSetTopicRequest,
  ConversationsUnarchiveRequest,
  DndEndDndRequest,
  DndEndSnoozeRequest,
  DndInfoRequest,
  DndSetSnoozeRequest,
  DndTeamInfoRequest,
  EmojiListRequest,
  FilesCommentsDeleteRequest,
  FilesCompleteUploadExternalRequest,
  FilesDeleteRequest,
  FilesGetUploadURLExternalRequest,
  FilesInfoRequest,
  FilesListRequest,
  FilesRemoteAddRequest,
  FilesRemoteInfoRequest,
  FilesRemoteListRequest,
  FilesRemoteRemoveRequest,
  FilesRemoteShareRequest,
  FilesRemoteUpdateRequest,
  FilesRevokePublicURLRequest,
  FilesSharedPublicURLRequest,
  FilesUploadRequest,
  MigrationExchangeRequest,
  OAuthV2AccessRequest,
  OAuthV2ExchangeRequest,
  OpenIDConnectTokenRequest,
  OpenIDConnectUserInfoRequest,
  PinsAddRequest,
  PinsListRequest,
  PinsRemoveRequest,
  RTMConnectRequest,
  RTMStartRequest,
  ReactionsAddRequest,
  ReactionsGetRequest,
  ReactionsListRequest,
  ReactionsRemoveRequest,
  RemindersAddRequest,
  RemindersCompleteRequest,
  RemindersDeleteRequest,
  RemindersInfoRequest,
  RemindersListRequest,
  SearchAllRequest,
  SearchFilesRequest,
  SearchMessagesRequest,
  SlackAPIRequest,
  StarsAddRequest,
  StarsListRequest,
  StarsRemoveRequest,
  TeamAccessLogsRequest,
  TeamBillableInfoRequest,
  TeamBillingInfoRequest,
  TeamInfoRequest,
  TeamIntegrationLogsRequest,
  TeamPreferencesListRequest,
  TeamProfileGetRequest,
  UsergroupsCreateRequest,
  UsergroupsDisableRequest,
  UsergroupsEnableRequest,
  UsergroupsListRequest,
  UsergroupsUpdateRequest,
  UsergroupsUsersListRequest,
  UsergroupsUsersUpdateRequest,
  UsersConversationsRequest,
  UsersDeletePhotoRequest,
  UsersGetPresenceRequest,
  UsersIdentityRequest,
  UsersInfoRequest,
  UsersListRequest,
  UsersLookupByEmailRequest,
  UsersProfileGetRequest,
  UsersProfileSetRequest,
  UsersSetPhotoRequest,
  UsersSetPresenceRequest,
  ViewsOpenRequest,
  ViewsPublishRequest,
  ViewsPushRequest,
  ViewsUpdateRequest,
} from "./request";
import {
  AdminAppsApproveResponse,
  AdminAppsApprovedListResponse,
  AdminAppsClearResolutionResponse,
  AdminAppsRequestsCancelResponse,
  AdminAppsRequestsListResponse,
  AdminAppsRestrictResponse,
  AdminAppsRestrictedListResponse,
  AdminAppsUninstallResponse,
  AdminAuthPolicyAssignEntitiesResponse,
  AdminAuthPolicyGetEntitiesResponse,
  AdminAuthPolicyRemoveEntitiesResponse,
  AdminBarriersCreateResponse,
  AdminBarriersDeleteResponse,
  AdminBarriersListResponse,
  AdminBarriersUpdateResponse,
  AdminConversationsArchiveResponse,
  AdminConversationsBulkArchiveResponse,
  AdminConversationsBulkDeleteResponse,
  AdminConversationsBulkMoveResponse,
  AdminConversationsConvertToPrivateResponse,
  AdminConversationsCreateResponse,
  AdminConversationsDeleteResponse,
  AdminConversationsDisconnectSharedResponse,
  AdminConversationsEkmListOriginalConnectedChannelInfoResponse,
  AdminConversationsGetConversationPrefsResponse,
  AdminConversationsGetTeamsResponse,
  AdminConversationsInviteResponse,
  AdminConversationsRenameResponse,
  AdminConversationsRestrictAccessAddGroupResponse,
  AdminConversationsRestrictAccessListGroupsResponse,
  AdminConversationsRestrictAccessRemoveGroupResponse,
  AdminConversationsGetCustomRetentionResponse,
  AdminConversationsSetCustomRetentionResponse,
  AdminConversationsRemoveCustomRetentionResponse,
  AdminConversationsSearchResponse,
  AdminConversationsSetConversationPrefsResponse,
  AdminConversationsSetTeamsResponse,
  AdminConversationsUnarchiveResponse,
  AdminEmojiAddResponse,
  AdminEmojiAddAliasResponse,
  AdminEmojiListResponse,
  AdminEmojiRemoveResponse,
  AdminEmojiRenameResponse,
  AdminInviteRequestsApproveResponse,
  AdminInviteRequestsApprovedListResponse,
  AdminInviteRequestsDeniedListResponse,
  AdminInviteRequestsDenyResponse,
  AdminInviteRequestsListResponse,
  AdminTeamsAdminsListResponse,
  AdminTeamsCreateResponse,
  AdminTeamsListResponse,
  AdminTeamsOwnersListResponse,
  AdminTeamsSettingsInfoResponse,
  AdminTeamsSettingsSetDefaultChannelsResponse,
  AdminTeamsSettingsSetDescriptionResponse,
  AdminTeamsSettingsSetDiscoverabilityResponse,
  AdminTeamsSettingsSetIconResponse,
  AdminTeamsSettingsSetNameResponse,
  AdminUsergroupsAddChannelsResponse,
  AdminUsergroupsAddTeamsResponse,
  AdminUsergroupsListChannelsResponse,
  AdminUsergroupsRemoveChannelsResponse,
  AdminUsersAssignResponse,
  AdminUsersInviteResponse,
  AdminUsersListResponse,
  AdminUsersRemoveResponse,
  AdminUsersSessionListResponse,
  AdminUsersSessionResetResponse,
  AdminUsersSessionResetBulkResponse,
  AdminUsersSessionInvalidateResponse,
  AdminUsersSessionGetSettingsResponse,
  AdminUsersSessionSetSettingsResponse,
  AdminUsersSessionClearSettingsResponse,
  AdminUsersUnsupportedVersionsExportResponse,
  AdminUsersSetAdminResponse,
  AdminUsersSetExpirationResponse,
  AdminUsersSetOwnerResponse,
  AdminUsersSetRegularResponse,
  ApiTestResponse,
  AppsConnectionsOpenResponse,
  AppsEventAuthorizationsListResponse,
  AppsUninstallResponse,
  AuthRevokeResponse,
  AuthTeamsListResponse,
  AuthTestResponse,
  BotsInfoResponse,
  BookmarksAddResponse,
  BookmarksEditResponse,
  BookmarksListResponse,
  BookmarksRemoveResponse,
  ChatDeleteResponse,
  ChatDeleteScheduledMessageResponse,
  ChatGetPermalinkResponse,
  ChatMeMessageResponse,
  ChatPostEphemeralResponse,
  ChatPostMessageResponse,
  ChatScheduleMessageResponse,
  ChatScheduledMessagesListResponse,
  ChatUnfurlResponse,
  ChatUpdateResponse,
  ConversationsAcceptSharedInviteResponse,
  ConversationsApproveSharedInviteResponse,
  ConversationsArchiveResponse,
  ConversationsCloseResponse,
  ConversationsCreateResponse,
  ConversationsDeclineSharedInviteResponse,
  ConversationsHistoryResponse,
  ConversationsInfoResponse,
  ConversationsInviteResponse,
  ConversationsInviteSharedResponse,
  ConversationsJoinResponse,
  ConversationsKickResponse,
  ConversationsLeaveResponse,
  ConversationsListResponse,
  ConversationsListConnectInvitesResponse,
  ConversationsMarkResponse,
  ConversationsMembersResponse,
  ConversationsOpenResponse,
  ConversationsRenameResponse,
  ConversationsRepliesResponse,
  ConversationsSetPurposeResponse,
  ConversationsSetTopicResponse,
  ConversationsUnarchiveResponse,
  DndEndDndResponse,
  DndEndSnoozeResponse,
  DndInfoResponse,
  DndSetSnoozeResponse,
  DndTeamInfoResponse,
  EmojiListResponse,
  FilesDeleteResponse,
  FilesInfoResponse,
  FilesListResponse,
  FilesRevokePublicURLResponse,
  FilesSharedPublicURLResponse,
  FilesUploadResponse,
  FilesGetUploadURLExternalResponse,
  FilesCompleteUploadExternalResponse,
  FilesCommentsDeleteResponse,
  FilesRemoteInfoResponse,
  FilesRemoteListResponse,
  FilesRemoteAddResponse,
  FilesRemoteUpdateResponse,
  FilesRemoteRemoveResponse,
  FilesRemoteShareResponse,
  MigrationExchangeResponse,
  OAuthV2AccessResponse,
  OAuthV2ExchangeResponse,
  OpenIDConnectTokenResponse,
  OpenIDConnectUserInfoResponse,
  PinsAddResponse,
  PinsListResponse,
  PinsRemoveResponse,
  ReactionsAddResponse,
  ReactionsGetResponse,
  ReactionsListResponse,
  ReactionsRemoveResponse,
  RemindersAddResponse,
  RemindersCompleteResponse,
  RemindersDeleteResponse,
  RemindersInfoResponse,
  RemindersListResponse,
  RtmConnectResponse,
  RtmStartResponse,
  SearchAllResponse,
  SearchFilesResponse,
  SearchMessagesResponse,
  StarsAddResponse,
  StarsListResponse,
  StarsRemoveResponse,
  TeamAccessLogsResponse,
  TeamBillableInfoResponse,
  TeamBillingInfoResponse,
  TeamInfoResponse,
  TeamIntegrationLogsResponse,
  TeamPreferencesListResponse,
  TeamProfileGetResponse,
  UsergroupsCreateResponse,
  UsergroupsDisableResponse,
  UsergroupsEnableResponse,
  UsergroupsListResponse,
  UsergroupsUpdateResponse,
  UsergroupsUsersListResponse,
  UsergroupsUsersUpdateResponse,
  UsersConversationsResponse,
  UsersDeletePhotoResponse,
  UsersGetPresenceResponse,
  UsersIdentityResponse,
  UsersInfoResponse,
  UsersListResponse,
  UsersLookupByEmailResponse,
  UsersSetPhotoResponse,
  UsersSetPresenceResponse,
  UsersProfileGetResponse,
  UsersProfileSetResponse,
  ViewsOpenResponse,
  ViewsPublishResponse,
  ViewsPushResponse,
  ViewsUpdateResponse,
} from "./generated-response";

import { SlackAPIResponse } from "./response";

export interface SlackAPI<
  Req extends SlackAPIRequest,
  Resp extends SlackAPIResponse
> {
  (args?: Req): Promise<Resp>;
}

export class SlackAPIClient {
  #token: string | undefined;

  constructor(token: string | undefined = undefined) {
    this.#token = token;
  }

  async call(
    name: string,
    params: Record<string, any>
  ): Promise<SlackAPIResponse> {
    return await this.callWithType(name, params);
  }

  async callWithType(
    name: string,
    params: SlackAPIRequest
  ): Promise<SlackAPIResponse> {
    const url = `https://www.slack.com/api/${name}`;
    const token = params.token ?? this.#token;
    const _params: any = {};
    Object.assign(_params, params);
    delete _params.token;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(_params),
    });
    const result: SlackAPIResponse =
      (await response.json()) as SlackAPIResponse;
    if (result.error) {
      throw new SlackAPIError(name, result.error, result);
    }
    return result;
  }

  bindApiCall<A extends SlackAPIRequest, R extends SlackAPIResponse>(
    client: SlackAPIClient,
    method: string
  ): SlackAPI<A, R> {
    return client.call.bind(self, method) as SlackAPI<A, R>;
  }

  public readonly admin = {
    apps: {
      approve: this.bindApiCall<
        AdminAppsApproveRequest,
        AdminAppsApproveResponse
      >(this, "admin.apps.approve"),
      approved: {
        list: this.bindApiCall<
          AdminAppsApprovedListRequest,
          AdminAppsApprovedListResponse
        >(this, "admin.apps.approved.list"),
      },
      clearResolution: this.bindApiCall<
        AdminAppsClearResolutionRequest,
        AdminAppsClearResolutionResponse
      >(this, "admin.apps.clearResolution"),
      requests: {
        cancel: this.bindApiCall<
          AdminAppsRequestsCancelRequest,
          AdminAppsRequestsCancelResponse
        >(this, "admin.apps.requests.cancel"),
        list: this.bindApiCall<
          AdminAppsRequestsListRequest,
          AdminAppsRequestsListResponse
        >(this, "admin.apps.requests.list"),
      },
      restrict: this.bindApiCall<
        AdminAppsRestrictRequest,
        AdminAppsRestrictResponse
      >(this, "admin.apps.restrict"),
      restricted: {
        list: this.bindApiCall<
          AdminAppsRestrictedListRequest,
          AdminAppsRestrictedListResponse
        >(this, "admin.apps.restricted.list"),
      },
      uninstall: this.bindApiCall<
        AdminAppsUninstallRequest,
        AdminAppsUninstallResponse
      >(this, "admin.apps.uninstall"),
    },
    auth: {
      policy: {
        assignEntities: this.bindApiCall<
          AdminAuthPolicyAssignEntitiesRequest,
          AdminAuthPolicyAssignEntitiesResponse
        >(this, "admin.auth.policy.assignEntities"),
        getEntities: this.bindApiCall<
          AdminAuthPolicyGetEntitiesRequest,
          AdminAuthPolicyGetEntitiesResponse
        >(this, "admin.auth.policy.getEntities"),
        removeEntities: this.bindApiCall<
          AdminAuthPolicyRemoveEntitiesRequest,
          AdminAuthPolicyRemoveEntitiesResponse
        >(this, "admin.auth.policy.removeEntities"),
      },
    },
    barriers: {
      create: this.bindApiCall<
        AdminBarriersCreateRequest,
        AdminBarriersCreateResponse
      >(this, "admin.barriers.create"),
      delete: this.bindApiCall<
        AdminBarriersDeleteRequest,
        AdminBarriersDeleteResponse
      >(this, "admin.barriers.delete"),
      list: this.bindApiCall<
        AdminBarriersListRequest,
        AdminBarriersListResponse
      >(this, "admin.barriers.list"),
      update: this.bindApiCall<
        AdminBarriersUpdateRequest,
        AdminBarriersUpdateResponse
      >(this, "admin.barriers.update"),
    },
    conversations: {
      archive: this.bindApiCall<
        AdminConversationsArchiveRequest,
        AdminConversationsArchiveResponse
      >(this, "admin.conversations.archive"),
      bulkArchive: this.bindApiCall<
        AdminConversationsBulkArchiveRequest,
        AdminConversationsBulkArchiveResponse
      >(this, "admin.conversations.bulkArchive"),
      bulkDelete: this.bindApiCall<
        AdminConversationsBulkDeleteRequest,
        AdminConversationsBulkDeleteResponse
      >(this, "admin.conversations.bulkDelete"),
      bulkMove: this.bindApiCall<
        AdminConversationsBulkMoveRequest,
        AdminConversationsBulkMoveResponse
      >(this, "admin.conversations.bulkMove"),
      convertToPrivate: this.bindApiCall<
        AdminConversationsConvertToPrivateRequest,
        AdminConversationsConvertToPrivateResponse
      >(this, "admin.conversations.convertToPrivate"),
      create: this.bindApiCall<
        AdminConversationsCreateRequest,
        AdminConversationsCreateResponse
      >(this, "admin.conversations.create"),
      delete: this.bindApiCall<
        AdminConversationsDeleteRequest,
        AdminConversationsDeleteResponse
      >(this, "admin.conversations.delete"),
      disconnectShared: this.bindApiCall<
        AdminConversationsDisconnectSharedRequest,
        AdminConversationsDisconnectSharedResponse
      >(this, "admin.conversations.disconnectShared"),
      ekm: {
        listOriginalConnectedChannelInfo: this.bindApiCall<
          AdminConversationsEKMListOriginalConnectedChannelInfoRequest,
          AdminConversationsEkmListOriginalConnectedChannelInfoResponse
        >(this, "admin.conversations.ekm.listOriginalConnectedChannelInfo"),
      },
      getConversationPrefs: this.bindApiCall<
        AdminConversationsGetConversationPrefsRequest,
        AdminConversationsGetConversationPrefsResponse
      >(this, "admin.conversations.getConversationPrefs"),
      getTeams: this.bindApiCall<
        AdminConversationsGetTeamsRequest,
        AdminConversationsGetTeamsResponse
      >(this, "admin.conversations.getTeams"),
      invite: this.bindApiCall<
        AdminConversationsInviteRequest,
        AdminConversationsInviteResponse
      >(this, "admin.conversations.invite"),
      rename: this.bindApiCall<
        AdminConversationsRenameRequest,
        AdminConversationsRenameResponse
      >(this, "admin.conversations.rename"),
      restrictAccess: {
        addGroup: this.bindApiCall<
          AdminConversationsRestrictAccessAddGroupRequest,
          AdminConversationsRestrictAccessAddGroupResponse
        >(this, "admin.conversations.restrictAccess.addGroup"),
        listGroups: this.bindApiCall<
          AdminConversationsRestrictAccessListGroupsRequest,
          AdminConversationsRestrictAccessListGroupsResponse
        >(this, "admin.conversations.restrictAccess.listGroups"),
        removeGroup: this.bindApiCall<
          AdminConversationsRestrictAccessRemoveGroupRequest,
          AdminConversationsRestrictAccessRemoveGroupResponse
        >(this, "admin.conversations.restrictAccess.removeGroup"),
      },
      getCustomRetention: this.bindApiCall<
        AdminConversationsGetCustomRetentionRequest,
        AdminConversationsGetCustomRetentionResponse
      >(this, "admin.conversations.getCustomRetention"),
      setCustomRetention: this.bindApiCall<
        AdminConversationsSetCustomRetentionRequest,
        AdminConversationsSetCustomRetentionResponse
      >(this, "admin.conversations.setCustomRetention"),
      removeCustomRetention: this.bindApiCall<
        AdminConversationsRemoveCustomRetentionRequest,
        AdminConversationsRemoveCustomRetentionResponse
      >(this, "admin.conversations.removeCustomRetention"),
      search: this.bindApiCall<
        AdminConversationsSearchRequest,
        AdminConversationsSearchResponse
      >(this, "admin.conversations.search"),
      setConversationPrefs: this.bindApiCall<
        AdminConversationsSetConversationPrefsRequest,
        AdminConversationsSetConversationPrefsResponse
      >(this, "admin.conversations.setConversationPrefs"),
      setTeams: this.bindApiCall<
        AdminConversationsSetTeamsRequest,
        AdminConversationsSetTeamsResponse
      >(this, "admin.conversations.setTeams"),
      unarchive: this.bindApiCall<
        AdminConversationsUnarchiveRequest,
        AdminConversationsUnarchiveResponse
      >(this, "admin.conversations.unarchive"),
    },
    emoji: {
      add: this.bindApiCall<AdminEmojiAddRequest, AdminEmojiAddResponse>(
        this,
        "admin.emoji.add"
      ),
      addAlias: this.bindApiCall<
        AdminEmojiAddAliasRequest,
        AdminEmojiAddAliasResponse
      >(this, "admin.emoji.addAlias"),
      list: this.bindApiCall<AdminEmojiListRequest, AdminEmojiListResponse>(
        this,
        "admin.emoji.list"
      ),
      remove: this.bindApiCall<
        AdminEmojiRemoveRequest,
        AdminEmojiRemoveResponse
      >(this, "admin.emoji.remove"),
      rename: this.bindApiCall<
        AdminEmojiRenameRequest,
        AdminEmojiRenameResponse
      >(this, "admin.emoji.rename"),
    },
    inviteRequests: {
      approve: this.bindApiCall<
        AdminInviteRequestsApproveRequest,
        AdminInviteRequestsApproveResponse
      >(this, "admin.inviteRequests.approve"),
      approved: {
        list: this.bindApiCall<
          AdminInviteRequestsApprovedListRequest,
          AdminInviteRequestsApprovedListResponse
        >(this, "admin.inviteRequests.approved.list"),
      },
      denied: {
        list: this.bindApiCall<
          AdminInviteRequestsDeniedListRequest,
          AdminInviteRequestsDeniedListResponse
        >(this, "admin.inviteRequests.denied.list"),
      },
      deny: this.bindApiCall<
        AdminInviteRequestsDenyRequest,
        AdminInviteRequestsDenyResponse
      >(this, "admin.inviteRequests.deny"),
      list: this.bindApiCall<
        AdminInviteRequestsListRequest,
        AdminInviteRequestsListResponse
      >(this, "admin.inviteRequests.list"),
    },
    teams: {
      admins: {
        list: this.bindApiCall<
          AdminTeamsAdminsListRequest,
          AdminTeamsAdminsListResponse
        >(this, "admin.teams.admins.list"),
      },
      create: this.bindApiCall<
        AdminTeamsCreateRequest,
        AdminTeamsCreateResponse
      >(this, "admin.teams.create"),
      list: this.bindApiCall<AdminTeamsListRequest, AdminTeamsListResponse>(
        this,
        "admin.teams.list"
      ),
      owners: {
        list: this.bindApiCall<
          AdminTeamsOwnersListRequest,
          AdminTeamsOwnersListResponse
        >(this, "admin.teams.owners.list"),
      },
      settings: {
        info: this.bindApiCall<
          AdminTeamsSettingsInfoRequest,
          AdminTeamsSettingsInfoResponse
        >(this, "admin.teams.settings.info"),
        setDefaultChannels: this.bindApiCall<
          AdminTeamsSettingsSetDefaultChannelsRequest,
          AdminTeamsSettingsSetDefaultChannelsResponse
        >(this, "admin.teams.settings.setDefaultChannels"),
        setDescription: this.bindApiCall<
          AdminTeamsSettingsSetDescriptionRequest,
          AdminTeamsSettingsSetDescriptionResponse
        >(this, "admin.teams.settings.setDescription"),
        setDiscoverability: this.bindApiCall<
          AdminTeamsSettingsSetDiscoverabilityRequest,
          AdminTeamsSettingsSetDiscoverabilityResponse
        >(this, "admin.teams.settings.setDiscoverability"),
        setIcon: this.bindApiCall<
          AdminTeamsSettingsSetIconRequest,
          AdminTeamsSettingsSetIconResponse
        >(this, "admin.teams.settings.setIcon"),
        setName: this.bindApiCall<
          AdminTeamsSettingsSetNameRequest,
          AdminTeamsSettingsSetNameResponse
        >(this, "admin.teams.settings.setName"),
      },
    },
    usergroups: {
      addChannels: this.bindApiCall<
        AdminUsergroupsAddChannelsRequest,
        AdminUsergroupsAddChannelsResponse
      >(this, "admin.usergroups.addChannels"),
      addTeams: this.bindApiCall<
        AdminUsergroupsAddTeamsRequest,
        AdminUsergroupsAddTeamsResponse
      >(this, "admin.usergroups.addTeams"),
      listChannels: this.bindApiCall<
        AdminUsergroupsListChannelsRequest,
        AdminUsergroupsListChannelsResponse
      >(this, "admin.usergroups.listChannels"),
      removeChannels: this.bindApiCall<
        AdminUsergroupsRemoveChannelsRequest,
        AdminUsergroupsRemoveChannelsResponse
      >(this, "admin.usergroups.removeChannels"),
    },
    users: {
      assign: this.bindApiCall<
        AdminUsersAssignRequest,
        AdminUsersAssignResponse
      >(this, "admin.users.assign"),
      invite: this.bindApiCall<
        AdminUsersInviteRequest,
        AdminUsersInviteResponse
      >(this, "admin.users.invite"),
      list: this.bindApiCall<AdminUsersListRequest, AdminUsersListResponse>(
        this,
        "admin.users.list"
      ),
      remove: this.bindApiCall<
        AdminUsersRemoveRequest,
        AdminUsersRemoveResponse
      >(this, "admin.users.remove"),
      session: {
        list: this.bindApiCall<
          AdminUsersSessionListRequest,
          AdminUsersSessionListResponse
        >(this, "admin.users.session.list"),
        reset: this.bindApiCall<
          AdminUsersSessionResetRequest,
          AdminUsersSessionResetResponse
        >(this, "admin.users.session.reset"),
        resetBulk: this.bindApiCall<
          AdminUsersSessionResetBulkRequest,
          AdminUsersSessionResetBulkResponse
        >(this, "admin.users.session.resetBulk"),
        invalidate: this.bindApiCall<
          AdminUsersSessionInvalidateRequest,
          AdminUsersSessionInvalidateResponse
        >(this, "admin.users.session.invalidate"),
        getSettings: this.bindApiCall<
          AdminUsersSessionGetSettingsRequest,
          AdminUsersSessionGetSettingsResponse
        >(this, "admin.users.session.getSettings"),
        setSettings: this.bindApiCall<
          AdminUsersSessionSetSettingsRequest,
          AdminUsersSessionSetSettingsResponse
        >(this, "admin.users.session.setSettings"),
        clearSettings: this.bindApiCall<
          AdminUsersSessionClearSettingsRequest,
          AdminUsersSessionClearSettingsResponse
        >(this, "admin.users.session.clearSettings"),
      },
      unsupportedVersions: {
        export: this.bindApiCall<
          AdminUsersUnsupportedVersionsExportRequest,
          AdminUsersUnsupportedVersionsExportResponse
        >(this, "admin.users.unsupportedVersions.export"),
      },
      setAdmin: this.bindApiCall<
        AdminUsersSetAdminRequest,
        AdminUsersSetAdminResponse
      >(this, "admin.users.setAdmin"),
      setExpiration: this.bindApiCall<
        AdminUsersSetExpirationRequest,
        AdminUsersSetExpirationResponse
      >(this, "admin.users.setExpiration"),
      setOwner: this.bindApiCall<
        AdminUsersSetOwnerRequest,
        AdminUsersSetOwnerResponse
      >(this, "admin.users.setOwner"),
      setRegular: this.bindApiCall<
        AdminUsersSetRegularRequest,
        AdminUsersSetRegularResponse
      >(this, "admin.users.setRegular"),
    },
  };

  public readonly api = {
    test: this.bindApiCall<APITestRequest, ApiTestResponse>(this, "api.test"),
  };

  public readonly apps = {
    connections: {
      open: this.bindApiCall<
        AppsConnectionsOpenRequest,
        AppsConnectionsOpenResponse
      >(this, "apps.connections.open"),
    },
    event: {
      authorizations: {
        list: this.bindApiCall<
          AppsEventAuthorizationsListRequest,
          AppsEventAuthorizationsListResponse
        >(this, "apps.event.authorizations.list"),
      },
    },
    uninstall: this.bindApiCall<AppsUninstallRequest, AppsUninstallResponse>(
      this,
      "apps.uninstall"
    ),
  };

  public readonly auth = {
    revoke: this.bindApiCall<AuthRevokeRequest, AuthRevokeResponse>(
      this,
      "auth.revoke"
    ),
    teams: {
      list: this.bindApiCall<AuthTeamsListRequest, AuthTeamsListResponse>(
        this,
        "auth.teams.list"
      ),
    },
    test: this.bindApiCall<AuthTestRequest, AuthTestResponse>(
      this,
      "auth.test"
    ),
  };

  public readonly bots = {
    info: this.bindApiCall<BotsInfoRequest, BotsInfoResponse>(
      this,
      "bots.info"
    ),
  };

  public readonly bookmarks = {
    add: this.bindApiCall<BookmarksAddRequest, BookmarksAddResponse>(
      this,
      "bookmarks.add"
    ),
    edit: this.bindApiCall<BookmarksEditRequest, BookmarksEditResponse>(
      this,
      "bookmarks.edit"
    ),
    list: this.bindApiCall<BookmarksListRequest, BookmarksListResponse>(
      this,
      "bookmarks.list"
    ),
    remove: this.bindApiCall<BookmarksRemoveRequest, BookmarksRemoveResponse>(
      this,
      "bookmarks.remove"
    ),
  };

  public readonly chat = {
    delete: this.bindApiCall<ChatDeleteRequest, ChatDeleteResponse>(
      this,
      "chat.delete"
    ),
    deleteScheduledMessage: this.bindApiCall<
      ChatDeleteScheduledMessageRequest,
      ChatDeleteScheduledMessageResponse
    >(this, "chat.deleteScheduledMessage"),
    getPermalink: this.bindApiCall<
      ChatGetPermalinkRequest,
      ChatGetPermalinkResponse
    >(this, "chat.getPermalink"),
    meMessage: this.bindApiCall<ChatMeMessageRequest, ChatMeMessageResponse>(
      this,
      "chat.meMessage"
    ),
    postEphemeral: this.bindApiCall<
      ChatPostEphemeralRequest,
      ChatPostEphemeralResponse
    >(this, "chat.postEphemeral"),
    postMessage: this.bindApiCall<
      ChatPostMessageRequest,
      ChatPostMessageResponse
    >(this, "chat.postMessage"),
    scheduleMessage: this.bindApiCall<
      ChatScheduleMessageRequest,
      ChatScheduleMessageResponse
    >(this, "chat.scheduleMessage"),
    scheduledMessages: {
      list: this.bindApiCall<
        ChatScheduledMessagesListRequest,
        ChatScheduledMessagesListResponse
      >(this, "chat.scheduledMessages.list"),
    },
    unfurl: this.bindApiCall<ChatUnfurlRequest, ChatUnfurlResponse>(
      this,
      "chat.unfurl"
    ),
    update: this.bindApiCall<ChatUpdateRequest, ChatUpdateResponse>(
      this,
      "chat.update"
    ),
  };

  public readonly conversations = {
    acceptSharedInvite: this.bindApiCall<
      ConversationsAcceptSharedInviteRequest,
      ConversationsAcceptSharedInviteResponse
    >(this, "conversations.acceptSharedInvite"),
    approveSharedInvite: this.bindApiCall<
      ConversationsApproveSharedInviteRequest,
      ConversationsApproveSharedInviteResponse
    >(this, "conversations.approveSharedInvite"),
    archive: this.bindApiCall<
      ConversationsArchiveRequest,
      ConversationsArchiveResponse
    >(this, "conversations.archive"),
    close: this.bindApiCall<
      ConversationsCloseRequest,
      ConversationsCloseResponse
    >(this, "conversations.close"),
    create: this.bindApiCall<
      ConversationsCreateRequest,
      ConversationsCreateResponse
    >(this, "conversations.create"),
    declineSharedInvite: this.bindApiCall<
      ConversationsDeclineSharedInviteRequest,
      ConversationsDeclineSharedInviteResponse
    >(this, "conversations.declineSharedInvite"),
    history: this.bindApiCall<
      ConversationsHistoryRequest,
      ConversationsHistoryResponse
    >(this, "conversations.history"),
    info: this.bindApiCall<ConversationsInfoRequest, ConversationsInfoResponse>(
      this,
      "conversations.info"
    ),
    invite: this.bindApiCall<
      ConversationsInviteRequest,
      ConversationsInviteResponse
    >(this, "conversations.invite"),
    inviteShared: this.bindApiCall<
      ConversationsInviteSharedRequest,
      ConversationsInviteSharedResponse
    >(this, "conversations.inviteShared"),
    join: this.bindApiCall<ConversationsJoinRequest, ConversationsJoinResponse>(
      this,
      "conversations.join"
    ),
    kick: this.bindApiCall<ConversationsKickRequest, ConversationsKickResponse>(
      this,
      "conversations.kick"
    ),
    leave: this.bindApiCall<
      ConversationsLeaveRequest,
      ConversationsLeaveResponse
    >(this, "conversations.leave"),
    list: this.bindApiCall<ConversationsListRequest, ConversationsListResponse>(
      this,
      "conversations.list"
    ),
    listConnectInvites: this.bindApiCall<
      ConversationsListConnectInvitesRequest,
      ConversationsListConnectInvitesResponse
    >(this, "conversations.listConnectInvites"),
    mark: this.bindApiCall<ConversationsMarkRequest, ConversationsMarkResponse>(
      this,
      "conversations.mark"
    ),
    members: this.bindApiCall<
      ConversationsMembersRequest,
      ConversationsMembersResponse
    >(this, "conversations.members"),
    open: this.bindApiCall<ConversationsOpenRequest, ConversationsOpenResponse>(
      this,
      "conversations.open"
    ),
    rename: this.bindApiCall<
      ConversationsRenameRequest,
      ConversationsRenameResponse
    >(this, "conversations.rename"),
    replies: this.bindApiCall<
      ConversationsRepliesRequest,
      ConversationsRepliesResponse
    >(this, "conversations.replies"),
    setPurpose: this.bindApiCall<
      ConversationsSetPurposeRequest,
      ConversationsSetPurposeResponse
    >(this, "conversations.setPurpose"),
    setTopic: this.bindApiCall<
      ConversationsSetTopicRequest,
      ConversationsSetTopicResponse
    >(this, "conversations.setTopic"),
    unarchive: this.bindApiCall<
      ConversationsUnarchiveRequest,
      ConversationsUnarchiveResponse
    >(this, "conversations.unarchive"),
  };

  public readonly dnd = {
    endDnd: this.bindApiCall<DndEndDndRequest, DndEndDndResponse>(
      this,
      "dnd.endDnd"
    ),
    endSnooze: this.bindApiCall<DndEndSnoozeRequest, DndEndSnoozeResponse>(
      this,
      "dnd.endSnooze"
    ),
    info: this.bindApiCall<DndInfoRequest, DndInfoResponse>(this, "dnd.info"),
    setSnooze: this.bindApiCall<DndSetSnoozeRequest, DndSetSnoozeResponse>(
      this,
      "dnd.setSnooze"
    ),
    teamInfo: this.bindApiCall<DndTeamInfoRequest, DndTeamInfoResponse>(
      this,
      "dnd.teamInfo"
    ),
  };

  public readonly emoji = {
    list: this.bindApiCall<EmojiListRequest, EmojiListResponse>(
      this,
      "emoji.list"
    ),
  };

  public readonly files = {
    delete: this.bindApiCall<FilesDeleteRequest, FilesDeleteResponse>(
      this,
      "files.delete"
    ),
    info: this.bindApiCall<FilesInfoRequest, FilesInfoResponse>(
      this,
      "files.info"
    ),
    list: this.bindApiCall<FilesListRequest, FilesListResponse>(
      this,
      "files.list"
    ),
    revokePublicURL: this.bindApiCall<
      FilesRevokePublicURLRequest,
      FilesRevokePublicURLResponse
    >(this, "files.revokePublicURL"),
    sharedPublicURL: this.bindApiCall<
      FilesSharedPublicURLRequest,
      FilesSharedPublicURLResponse
    >(this, "files.sharedPublicURL"),
    upload: this.bindApiCall<FilesUploadRequest, FilesUploadResponse>(
      this,
      "files.upload"
    ),
    getUploadURLExternal: this.bindApiCall<
      FilesGetUploadURLExternalRequest,
      FilesGetUploadURLExternalResponse
    >(this, "files.getUploadURLExternal"),
    completeUploadExternal: this.bindApiCall<
      FilesCompleteUploadExternalRequest,
      FilesCompleteUploadExternalResponse
    >(this, "files.completeUploadExternal"),
    comments: {
      delete: this.bindApiCall<
        FilesCommentsDeleteRequest,
        FilesCommentsDeleteResponse
      >(this, "files.comments.delete"),
    },
    remote: {
      info: this.bindApiCall<FilesRemoteInfoRequest, FilesRemoteInfoResponse>(
        this,
        "files.remote.info"
      ),
      list: this.bindApiCall<FilesRemoteListRequest, FilesRemoteListResponse>(
        this,
        "files.remote.list"
      ),
      add: this.bindApiCall<FilesRemoteAddRequest, FilesRemoteAddResponse>(
        this,
        "files.remote.add"
      ),
      update: this.bindApiCall<
        FilesRemoteUpdateRequest,
        FilesRemoteUpdateResponse
      >(this, "files.remote.update"),
      remove: this.bindApiCall<
        FilesRemoteRemoveRequest,
        FilesRemoteRemoveResponse
      >(this, "files.remote.remove"),
      share: this.bindApiCall<
        FilesRemoteShareRequest,
        FilesRemoteShareResponse
      >(this, "files.remote.share"),
    },
  };

  public readonly migration = {
    exchange: this.bindApiCall<
      MigrationExchangeRequest,
      MigrationExchangeResponse
    >(this, "migration.exchange"),
  };

  public readonly oauth = {
    v2: {
      access: this.bindApiCall<OAuthV2AccessRequest, OAuthV2AccessResponse>(
        this,
        "oauth.v2.access"
      ),
      exchange: this.bindApiCall<
        OAuthV2ExchangeRequest,
        OAuthV2ExchangeResponse
      >(this, "oauth.v2.exchange"),
    },
  };

  public readonly openid = {
    connect: {
      token: this.bindApiCall<
        OpenIDConnectTokenRequest,
        OpenIDConnectTokenResponse
      >(this, "openid.connect.token"),
      userInfo: this.bindApiCall<
        OpenIDConnectUserInfoRequest,
        OpenIDConnectUserInfoResponse
      >(this, "openid.connect.userInfo"),
    },
  };

  public readonly pins = {
    add: this.bindApiCall<PinsAddRequest, PinsAddResponse>(this, "pins.add"),
    list: this.bindApiCall<PinsListRequest, PinsListResponse>(
      this,
      "pins.list"
    ),
    remove: this.bindApiCall<PinsRemoveRequest, PinsRemoveResponse>(
      this,
      "pins.remove"
    ),
  };

  public readonly reactions = {
    add: this.bindApiCall<ReactionsAddRequest, ReactionsAddResponse>(
      this,
      "reactions.add"
    ),
    get: this.bindApiCall<ReactionsGetRequest, ReactionsGetResponse>(
      this,
      "reactions.get"
    ),
    list: this.bindApiCall<ReactionsListRequest, ReactionsListResponse>(
      this,
      "reactions.list"
    ),
    remove: this.bindApiCall<ReactionsRemoveRequest, ReactionsRemoveResponse>(
      this,
      "reactions.remove"
    ),
  };

  public readonly reminders = {
    add: this.bindApiCall<RemindersAddRequest, RemindersAddResponse>(
      this,
      "reminders.add"
    ),
    complete: this.bindApiCall<
      RemindersCompleteRequest,
      RemindersCompleteResponse
    >(this, "reminders.complete"),
    delete: this.bindApiCall<RemindersDeleteRequest, RemindersDeleteResponse>(
      this,
      "reminders.delete"
    ),
    info: this.bindApiCall<RemindersInfoRequest, RemindersInfoResponse>(
      this,
      "reminders.info"
    ),
    list: this.bindApiCall<RemindersListRequest, RemindersListResponse>(
      this,
      "reminders.list"
    ),
  };

  public readonly rtm = {
    connect: this.bindApiCall<RTMConnectRequest, RtmConnectResponse>(
      this,
      "rtm.connect"
    ),
    start: this.bindApiCall<RTMStartRequest, RtmStartResponse>(
      this,
      "rtm.start"
    ),
  };

  public readonly search = {
    all: this.bindApiCall<SearchAllRequest, SearchAllResponse>(
      this,
      "search.all"
    ),
    files: this.bindApiCall<SearchFilesRequest, SearchFilesResponse>(
      this,
      "search.files"
    ),
    messages: this.bindApiCall<SearchMessagesRequest, SearchMessagesResponse>(
      this,
      "search.messages"
    ),
  };

  public readonly stars = {
    add: this.bindApiCall<StarsAddRequest, StarsAddResponse>(this, "stars.add"),
    list: this.bindApiCall<StarsListRequest, StarsListResponse>(
      this,
      "stars.list"
    ),
    remove: this.bindApiCall<StarsRemoveRequest, StarsRemoveResponse>(
      this,
      "stars.remove"
    ),
  };

  public readonly team = {
    accessLogs: this.bindApiCall<TeamAccessLogsRequest, TeamAccessLogsResponse>(
      this,
      "team.accessLogs"
    ),
    billableInfo: this.bindApiCall<
      TeamBillableInfoRequest,
      TeamBillableInfoResponse
    >(this, "team.billableInfo"),
    billing: {
      info: this.bindApiCall<TeamBillingInfoRequest, TeamBillingInfoResponse>(
        this,
        "team.billing.info"
      ),
    },
    info: this.bindApiCall<TeamInfoRequest, TeamInfoResponse>(
      this,
      "team.info"
    ),
    integrationLogs: this.bindApiCall<
      TeamIntegrationLogsRequest,
      TeamIntegrationLogsResponse
    >(this, "team.integrationLogs"),
    preferences: {
      list: this.bindApiCall<
        TeamPreferencesListRequest,
        TeamPreferencesListResponse
      >(this, "team.preferences.list"),
    },
    profile: {
      get: this.bindApiCall<TeamProfileGetRequest, TeamProfileGetResponse>(
        this,
        "team.profile.get"
      ),
    },
  };

  public readonly usergroups = {
    create: this.bindApiCall<UsergroupsCreateRequest, UsergroupsCreateResponse>(
      this,
      "usergroups.create"
    ),
    disable: this.bindApiCall<
      UsergroupsDisableRequest,
      UsergroupsDisableResponse
    >(this, "usergroups.disable"),
    enable: this.bindApiCall<UsergroupsEnableRequest, UsergroupsEnableResponse>(
      this,
      "usergroups.enable"
    ),
    list: this.bindApiCall<UsergroupsListRequest, UsergroupsListResponse>(
      this,
      "usergroups.list"
    ),
    update: this.bindApiCall<UsergroupsUpdateRequest, UsergroupsUpdateResponse>(
      this,
      "usergroups.update"
    ),
    users: {
      list: this.bindApiCall<
        UsergroupsUsersListRequest,
        UsergroupsUsersListResponse
      >(this, "usergroups.users.list"),
      update: this.bindApiCall<
        UsergroupsUsersUpdateRequest,
        UsergroupsUsersUpdateResponse
      >(this, "usergroups.users.update"),
    },
  };

  public readonly users = {
    conversations: this.bindApiCall<
      UsersConversationsRequest,
      UsersConversationsResponse
    >(this, "users.conversations"),
    deletePhoto: this.bindApiCall<
      UsersDeletePhotoRequest,
      UsersDeletePhotoResponse
    >(this, "users.deletePhoto"),
    getPresence: this.bindApiCall<
      UsersGetPresenceRequest,
      UsersGetPresenceResponse
    >(this, "users.getPresence"),
    identity: this.bindApiCall<UsersIdentityRequest, UsersIdentityResponse>(
      this,
      "users.identity"
    ),
    info: this.bindApiCall<UsersInfoRequest, UsersInfoResponse>(
      this,
      "users.info"
    ),
    list: this.bindApiCall<UsersListRequest, UsersListResponse>(
      this,
      "users.list"
    ),
    lookupByEmail: this.bindApiCall<
      UsersLookupByEmailRequest,
      UsersLookupByEmailResponse
    >(this, "users.lookupByEmail"),
    setPhoto: this.bindApiCall<UsersSetPhotoRequest, UsersSetPhotoResponse>(
      this,
      "users.setPhoto"
    ),
    setPresence: this.bindApiCall<
      UsersSetPresenceRequest,
      UsersSetPresenceResponse
    >(this, "users.setPresence"),
    profile: {
      get: this.bindApiCall<UsersProfileGetRequest, UsersProfileGetResponse>(
        this,
        "users.profile.get"
      ),
      set: this.bindApiCall<UsersProfileSetRequest, UsersProfileSetResponse>(
        this,
        "users.profile.set"
      ),
    },
  };

  public readonly views = {
    open: this.bindApiCall<ViewsOpenRequest, ViewsOpenResponse>(
      this,
      "views.open"
    ),
    publish: this.bindApiCall<ViewsPublishRequest, ViewsPublishResponse>(
      this,
      "views.publish"
    ),
    push: this.bindApiCall<ViewsPushRequest, ViewsPushResponse>(
      this,
      "views.push"
    ),
    update: this.bindApiCall<ViewsUpdateRequest, ViewsUpdateResponse>(
      this,
      "views.update"
    ),
  };
}
