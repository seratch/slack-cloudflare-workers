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
    return await this.#call(name, params);
  }

  async #call(
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

  bind<A extends SlackAPIRequest, R extends SlackAPIResponse>(
    client: SlackAPIClient,
    method: string
  ): SlackAPI<A, R> {
    return client.call.bind(self, method) as SlackAPI<A, R>;
  }

  public readonly admin = {
    apps: {
      approve: this.bind<AdminAppsApproveRequest, AdminAppsApproveResponse>(
        this,
        "admin.apps.approve"
      ),
      approved: {
        list: this.bind<
          AdminAppsApprovedListRequest,
          AdminAppsApprovedListResponse
        >(this, "admin.apps.approved.list"),
      },
      clearResolution: this.bind<
        AdminAppsClearResolutionRequest,
        AdminAppsClearResolutionResponse
      >(this, "admin.apps.clearResolution"),
      requests: {
        cancel: this.bind<
          AdminAppsRequestsCancelRequest,
          AdminAppsRequestsCancelResponse
        >(this, "admin.apps.requests.cancel"),
        list: this.bind<
          AdminAppsRequestsListRequest,
          AdminAppsRequestsListResponse
        >(this, "admin.apps.requests.list"),
      },
      restrict: this.bind<AdminAppsRestrictRequest, AdminAppsRestrictResponse>(
        this,
        "admin.apps.restrict"
      ),
      restricted: {
        list: this.bind<
          AdminAppsRestrictedListRequest,
          AdminAppsRestrictedListResponse
        >(this, "admin.apps.restricted.list"),
      },
      uninstall: this.bind<
        AdminAppsUninstallRequest,
        AdminAppsUninstallResponse
      >(this, "admin.apps.uninstall"),
    },
    auth: {
      policy: {
        assignEntities: this.bind<
          AdminAuthPolicyAssignEntitiesRequest,
          AdminAuthPolicyAssignEntitiesResponse
        >(this, "admin.auth.policy.assignEntities"),
        getEntities: this.bind<
          AdminAuthPolicyGetEntitiesRequest,
          AdminAuthPolicyGetEntitiesResponse
        >(this, "admin.auth.policy.getEntities"),
        removeEntities: this.bind<
          AdminAuthPolicyRemoveEntitiesRequest,
          AdminAuthPolicyRemoveEntitiesResponse
        >(this, "admin.auth.policy.removeEntities"),
      },
    },
    barriers: {
      create: this.bind<
        AdminBarriersCreateRequest,
        AdminBarriersCreateResponse
      >(this, "admin.barriers.create"),
      delete: this.bind<
        AdminBarriersDeleteRequest,
        AdminBarriersDeleteResponse
      >(this, "admin.barriers.delete"),
      list: this.bind<AdminBarriersListRequest, AdminBarriersListResponse>(
        this,
        "admin.barriers.list"
      ),
      update: this.bind<
        AdminBarriersUpdateRequest,
        AdminBarriersUpdateResponse
      >(this, "admin.barriers.update"),
    },
    conversations: {
      archive: this.bind<
        AdminConversationsArchiveRequest,
        AdminConversationsArchiveResponse
      >(this, "admin.conversations.archive"),
      bulkArchive: this.bind<
        AdminConversationsBulkArchiveRequest,
        AdminConversationsBulkArchiveResponse
      >(this, "admin.conversations.bulkArchive"),
      bulkDelete: this.bind<
        AdminConversationsBulkDeleteRequest,
        AdminConversationsBulkDeleteResponse
      >(this, "admin.conversations.bulkDelete"),
      bulkMove: this.bind<
        AdminConversationsBulkMoveRequest,
        AdminConversationsBulkMoveResponse
      >(this, "admin.conversations.bulkMove"),
      convertToPrivate: this.bind<
        AdminConversationsConvertToPrivateRequest,
        AdminConversationsConvertToPrivateResponse
      >(this, "admin.conversations.convertToPrivate"),
      create: this.bind<
        AdminConversationsCreateRequest,
        AdminConversationsCreateResponse
      >(this, "admin.conversations.create"),
      delete: this.bind<
        AdminConversationsDeleteRequest,
        AdminConversationsDeleteResponse
      >(this, "admin.conversations.delete"),
      disconnectShared: this.bind<
        AdminConversationsDisconnectSharedRequest,
        AdminConversationsDisconnectSharedResponse
      >(this, "admin.conversations.disconnectShared"),
      ekm: {
        listOriginalConnectedChannelInfo: this.bind<
          AdminConversationsEKMListOriginalConnectedChannelInfoRequest,
          AdminConversationsEkmListOriginalConnectedChannelInfoResponse
        >(this, "admin.conversations.ekm.listOriginalConnectedChannelInfo"),
      },
      getConversationPrefs: this.bind<
        AdminConversationsGetConversationPrefsRequest,
        AdminConversationsGetConversationPrefsResponse
      >(this, "admin.conversations.getConversationPrefs"),
      getTeams: this.bind<
        AdminConversationsGetTeamsRequest,
        AdminConversationsGetTeamsResponse
      >(this, "admin.conversations.getTeams"),
      invite: this.bind<
        AdminConversationsInviteRequest,
        AdminConversationsInviteResponse
      >(this, "admin.conversations.invite"),
      rename: this.bind<
        AdminConversationsRenameRequest,
        AdminConversationsRenameResponse
      >(this, "admin.conversations.rename"),
      restrictAccess: {
        addGroup: this.bind<
          AdminConversationsRestrictAccessAddGroupRequest,
          AdminConversationsRestrictAccessAddGroupResponse
        >(this, "admin.conversations.restrictAccess.addGroup"),
        listGroups: this.bind<
          AdminConversationsRestrictAccessListGroupsRequest,
          AdminConversationsRestrictAccessListGroupsResponse
        >(this, "admin.conversations.restrictAccess.listGroups"),
        removeGroup: this.bind<
          AdminConversationsRestrictAccessRemoveGroupRequest,
          AdminConversationsRestrictAccessRemoveGroupResponse
        >(this, "admin.conversations.restrictAccess.removeGroup"),
      },
      getCustomRetention: this.bind<
        AdminConversationsGetCustomRetentionRequest,
        AdminConversationsGetCustomRetentionResponse
      >(this, "admin.conversations.getCustomRetention"),
      setCustomRetention: this.bind<
        AdminConversationsSetCustomRetentionRequest,
        AdminConversationsSetCustomRetentionResponse
      >(this, "admin.conversations.setCustomRetention"),
      removeCustomRetention: this.bind<
        AdminConversationsRemoveCustomRetentionRequest,
        AdminConversationsRemoveCustomRetentionResponse
      >(this, "admin.conversations.removeCustomRetention"),
      search: this.bind<
        AdminConversationsSearchRequest,
        AdminConversationsSearchResponse
      >(this, "admin.conversations.search"),
      setConversationPrefs: this.bind<
        AdminConversationsSetConversationPrefsRequest,
        AdminConversationsSetConversationPrefsResponse
      >(this, "admin.conversations.setConversationPrefs"),
      setTeams: this.bind<
        AdminConversationsSetTeamsRequest,
        AdminConversationsSetTeamsResponse
      >(this, "admin.conversations.setTeams"),
      unarchive: this.bind<
        AdminConversationsUnarchiveRequest,
        AdminConversationsUnarchiveResponse
      >(this, "admin.conversations.unarchive"),
    },
    emoji: {
      add: this.bind<AdminEmojiAddRequest, AdminEmojiAddResponse>(
        this,
        "admin.emoji.add"
      ),
      addAlias: this.bind<
        AdminEmojiAddAliasRequest,
        AdminEmojiAddAliasResponse
      >(this, "admin.emoji.addAlias"),
      list: this.bind<AdminEmojiListRequest, AdminEmojiListResponse>(
        this,
        "admin.emoji.list"
      ),
      remove: this.bind<AdminEmojiRemoveRequest, AdminEmojiRemoveResponse>(
        this,
        "admin.emoji.remove"
      ),
      rename: this.bind<AdminEmojiRenameRequest, AdminEmojiRenameResponse>(
        this,
        "admin.emoji.rename"
      ),
    },
    inviteRequests: {
      approve: this.bind<
        AdminInviteRequestsApproveRequest,
        AdminInviteRequestsApproveResponse
      >(this, "admin.inviteRequests.approve"),
      approved: {
        list: this.bind<
          AdminInviteRequestsApprovedListRequest,
          AdminInviteRequestsApprovedListResponse
        >(this, "admin.inviteRequests.approved.list"),
      },
      denied: {
        list: this.bind<
          AdminInviteRequestsDeniedListRequest,
          AdminInviteRequestsDeniedListResponse
        >(this, "admin.inviteRequests.denied.list"),
      },
      deny: this.bind<
        AdminInviteRequestsDenyRequest,
        AdminInviteRequestsDenyResponse
      >(this, "admin.inviteRequests.deny"),
      list: this.bind<
        AdminInviteRequestsListRequest,
        AdminInviteRequestsListResponse
      >(this, "admin.inviteRequests.list"),
    },
    teams: {
      admins: {
        list: this.bind<
          AdminTeamsAdminsListRequest,
          AdminTeamsAdminsListResponse
        >(this, "admin.teams.admins.list"),
      },
      create: this.bind<AdminTeamsCreateRequest, AdminTeamsCreateResponse>(
        this,
        "admin.teams.create"
      ),
      list: this.bind<AdminTeamsListRequest, AdminTeamsListResponse>(
        this,
        "admin.teams.list"
      ),
      owners: {
        list: this.bind<
          AdminTeamsOwnersListRequest,
          AdminTeamsOwnersListResponse
        >(this, "admin.teams.owners.list"),
      },
      settings: {
        info: this.bind<
          AdminTeamsSettingsInfoRequest,
          AdminTeamsSettingsInfoResponse
        >(this, "admin.teams.settings.info"),
        setDefaultChannels: this.bind<
          AdminTeamsSettingsSetDefaultChannelsRequest,
          AdminTeamsSettingsSetDefaultChannelsResponse
        >(this, "admin.teams.settings.setDefaultChannels"),
        setDescription: this.bind<
          AdminTeamsSettingsSetDescriptionRequest,
          AdminTeamsSettingsSetDescriptionResponse
        >(this, "admin.teams.settings.setDescription"),
        setDiscoverability: this.bind<
          AdminTeamsSettingsSetDiscoverabilityRequest,
          AdminTeamsSettingsSetDiscoverabilityResponse
        >(this, "admin.teams.settings.setDiscoverability"),
        setIcon: this.bind<
          AdminTeamsSettingsSetIconRequest,
          AdminTeamsSettingsSetIconResponse
        >(this, "admin.teams.settings.setIcon"),
        setName: this.bind<
          AdminTeamsSettingsSetNameRequest,
          AdminTeamsSettingsSetNameResponse
        >(this, "admin.teams.settings.setName"),
      },
    },
    usergroups: {
      addChannels: this.bind<
        AdminUsergroupsAddChannelsRequest,
        AdminUsergroupsAddChannelsResponse
      >(this, "admin.usergroups.addChannels"),
      addTeams: this.bind<
        AdminUsergroupsAddTeamsRequest,
        AdminUsergroupsAddTeamsResponse
      >(this, "admin.usergroups.addTeams"),
      listChannels: this.bind<
        AdminUsergroupsListChannelsRequest,
        AdminUsergroupsListChannelsResponse
      >(this, "admin.usergroups.listChannels"),
      removeChannels: this.bind<
        AdminUsergroupsRemoveChannelsRequest,
        AdminUsergroupsRemoveChannelsResponse
      >(this, "admin.usergroups.removeChannels"),
    },
    users: {
      assign: this.bind<AdminUsersAssignRequest, AdminUsersAssignResponse>(
        this,
        "admin.users.assign"
      ),
      invite: this.bind<AdminUsersInviteRequest, AdminUsersInviteResponse>(
        this,
        "admin.users.invite"
      ),
      list: this.bind<AdminUsersListRequest, AdminUsersListResponse>(
        this,
        "admin.users.list"
      ),
      remove: this.bind<AdminUsersRemoveRequest, AdminUsersRemoveResponse>(
        this,
        "admin.users.remove"
      ),
      session: {
        list: this.bind<
          AdminUsersSessionListRequest,
          AdminUsersSessionListResponse
        >(this, "admin.users.session.list"),
        reset: this.bind<
          AdminUsersSessionResetRequest,
          AdminUsersSessionResetResponse
        >(this, "admin.users.session.reset"),
        resetBulk: this.bind<
          AdminUsersSessionResetBulkRequest,
          AdminUsersSessionResetBulkResponse
        >(this, "admin.users.session.resetBulk"),
        invalidate: this.bind<
          AdminUsersSessionInvalidateRequest,
          AdminUsersSessionInvalidateResponse
        >(this, "admin.users.session.invalidate"),
        getSettings: this.bind<
          AdminUsersSessionGetSettingsRequest,
          AdminUsersSessionGetSettingsResponse
        >(this, "admin.users.session.getSettings"),
        setSettings: this.bind<
          AdminUsersSessionSetSettingsRequest,
          AdminUsersSessionSetSettingsResponse
        >(this, "admin.users.session.setSettings"),
        clearSettings: this.bind<
          AdminUsersSessionClearSettingsRequest,
          AdminUsersSessionClearSettingsResponse
        >(this, "admin.users.session.clearSettings"),
      },
      unsupportedVersions: {
        export: this.bind<
          AdminUsersUnsupportedVersionsExportRequest,
          AdminUsersUnsupportedVersionsExportResponse
        >(this, "admin.users.unsupportedVersions.export"),
      },
      setAdmin: this.bind<
        AdminUsersSetAdminRequest,
        AdminUsersSetAdminResponse
      >(this, "admin.users.setAdmin"),
      setExpiration: this.bind<
        AdminUsersSetExpirationRequest,
        AdminUsersSetExpirationResponse
      >(this, "admin.users.setExpiration"),
      setOwner: this.bind<
        AdminUsersSetOwnerRequest,
        AdminUsersSetOwnerResponse
      >(this, "admin.users.setOwner"),
      setRegular: this.bind<
        AdminUsersSetRegularRequest,
        AdminUsersSetRegularResponse
      >(this, "admin.users.setRegular"),
    },
  };

  public readonly api = {
    test: this.bind<APITestRequest, ApiTestResponse>(this, "api.test"),
  };

  public readonly apps = {
    connections: {
      open: this.bind<AppsConnectionsOpenRequest, AppsConnectionsOpenResponse>(
        this,
        "apps.connections.open"
      ),
    },
    event: {
      authorizations: {
        list: this.bind<
          AppsEventAuthorizationsListRequest,
          AppsEventAuthorizationsListResponse
        >(this, "apps.event.authorizations.list"),
      },
    },
    uninstall: this.bind<AppsUninstallRequest, AppsUninstallResponse>(
      this,
      "apps.uninstall"
    ),
  };

  public readonly auth = {
    revoke: this.bind<AuthRevokeRequest, AuthRevokeResponse>(
      this,
      "auth.revoke"
    ),
    teams: {
      list: this.bind<AuthTeamsListRequest, AuthTeamsListResponse>(
        this,
        "auth.teams.list"
      ),
    },
    test: this.bind<AuthTestRequest, AuthTestResponse>(this, "auth.test"),
  };

  public readonly bots = {
    info: this.bind<BotsInfoRequest, BotsInfoResponse>(this, "bots.info"),
  };

  public readonly bookmarks = {
    add: this.bind<BookmarksAddRequest, BookmarksAddResponse>(
      this,
      "bookmarks.add"
    ),
    edit: this.bind<BookmarksEditRequest, BookmarksEditResponse>(
      this,
      "bookmarks.edit"
    ),
    list: this.bind<BookmarksListRequest, BookmarksListResponse>(
      this,
      "bookmarks.list"
    ),
    remove: this.bind<BookmarksRemoveRequest, BookmarksRemoveResponse>(
      this,
      "bookmarks.remove"
    ),
  };

  public readonly chat = {
    delete: this.bind<ChatDeleteRequest, ChatDeleteResponse>(
      this,
      "chat.delete"
    ),
    deleteScheduledMessage: this.bind<
      ChatDeleteScheduledMessageRequest,
      ChatDeleteScheduledMessageResponse
    >(this, "chat.deleteScheduledMessage"),
    getPermalink: this.bind<ChatGetPermalinkRequest, ChatGetPermalinkResponse>(
      this,
      "chat.getPermalink"
    ),
    meMessage: this.bind<ChatMeMessageRequest, ChatMeMessageResponse>(
      this,
      "chat.meMessage"
    ),
    postEphemeral: this.bind<
      ChatPostEphemeralRequest,
      ChatPostEphemeralResponse
    >(this, "chat.postEphemeral"),
    postMessage: this.bind<ChatPostMessageRequest, ChatPostMessageResponse>(
      this,
      "chat.postMessage"
    ),
    scheduleMessage: this.bind<
      ChatScheduleMessageRequest,
      ChatScheduleMessageResponse
    >(this, "chat.scheduleMessage"),
    scheduledMessages: {
      list: this.bind<
        ChatScheduledMessagesListRequest,
        ChatScheduledMessagesListResponse
      >(this, "chat.scheduledMessages.list"),
    },
    unfurl: this.bind<ChatUnfurlRequest, ChatUnfurlResponse>(
      this,
      "chat.unfurl"
    ),
    update: this.bind<ChatUpdateRequest, ChatUpdateResponse>(
      this,
      "chat.update"
    ),
  };

  public readonly conversations = {
    acceptSharedInvite: this.bind<
      ConversationsAcceptSharedInviteRequest,
      ConversationsAcceptSharedInviteResponse
    >(this, "conversations.acceptSharedInvite"),
    approveSharedInvite: this.bind<
      ConversationsApproveSharedInviteRequest,
      ConversationsApproveSharedInviteResponse
    >(this, "conversations.approveSharedInvite"),
    archive: this.bind<
      ConversationsArchiveRequest,
      ConversationsArchiveResponse
    >(this, "conversations.archive"),
    close: this.bind<ConversationsCloseRequest, ConversationsCloseResponse>(
      this,
      "conversations.close"
    ),
    create: this.bind<ConversationsCreateRequest, ConversationsCreateResponse>(
      this,
      "conversations.create"
    ),
    declineSharedInvite: this.bind<
      ConversationsDeclineSharedInviteRequest,
      ConversationsDeclineSharedInviteResponse
    >(this, "conversations.declineSharedInvite"),
    history: this.bind<
      ConversationsHistoryRequest,
      ConversationsHistoryResponse
    >(this, "conversations.history"),
    info: this.bind<ConversationsInfoRequest, ConversationsInfoResponse>(
      this,
      "conversations.info"
    ),
    invite: this.bind<ConversationsInviteRequest, ConversationsInviteResponse>(
      this,
      "conversations.invite"
    ),
    inviteShared: this.bind<
      ConversationsInviteSharedRequest,
      ConversationsInviteSharedResponse
    >(this, "conversations.inviteShared"),
    join: this.bind<ConversationsJoinRequest, ConversationsJoinResponse>(
      this,
      "conversations.join"
    ),
    kick: this.bind<ConversationsKickRequest, ConversationsKickResponse>(
      this,
      "conversations.kick"
    ),
    leave: this.bind<ConversationsLeaveRequest, ConversationsLeaveResponse>(
      this,
      "conversations.leave"
    ),
    list: this.bind<ConversationsListRequest, ConversationsListResponse>(
      this,
      "conversations.list"
    ),
    listConnectInvites: this.bind<
      ConversationsListConnectInvitesRequest,
      ConversationsListConnectInvitesResponse
    >(this, "conversations.listConnectInvites"),
    mark: this.bind<ConversationsMarkRequest, ConversationsMarkResponse>(
      this,
      "conversations.mark"
    ),
    members: this.bind<
      ConversationsMembersRequest,
      ConversationsMembersResponse
    >(this, "conversations.members"),
    open: this.bind<ConversationsOpenRequest, ConversationsOpenResponse>(
      this,
      "conversations.open"
    ),
    rename: this.bind<ConversationsRenameRequest, ConversationsRenameResponse>(
      this,
      "conversations.rename"
    ),
    replies: this.bind<
      ConversationsRepliesRequest,
      ConversationsRepliesResponse
    >(this, "conversations.replies"),
    setPurpose: this.bind<
      ConversationsSetPurposeRequest,
      ConversationsSetPurposeResponse
    >(this, "conversations.setPurpose"),
    setTopic: this.bind<
      ConversationsSetTopicRequest,
      ConversationsSetTopicResponse
    >(this, "conversations.setTopic"),
    unarchive: this.bind<
      ConversationsUnarchiveRequest,
      ConversationsUnarchiveResponse
    >(this, "conversations.unarchive"),
  };

  public readonly dnd = {
    endDnd: this.bind<DndEndDndRequest, DndEndDndResponse>(this, "dnd.endDnd"),
    endSnooze: this.bind<DndEndSnoozeRequest, DndEndSnoozeResponse>(
      this,
      "dnd.endSnooze"
    ),
    info: this.bind<DndInfoRequest, DndInfoResponse>(this, "dnd.info"),
    setSnooze: this.bind<DndSetSnoozeRequest, DndSetSnoozeResponse>(
      this,
      "dnd.setSnooze"
    ),
    teamInfo: this.bind<DndTeamInfoRequest, DndTeamInfoResponse>(
      this,
      "dnd.teamInfo"
    ),
  };

  public readonly emoji = {
    list: this.bind<EmojiListRequest, EmojiListResponse>(this, "emoji.list"),
  };

  public readonly files = {
    delete: this.bind<FilesDeleteRequest, FilesDeleteResponse>(
      this,
      "files.delete"
    ),
    info: this.bind<FilesInfoRequest, FilesInfoResponse>(this, "files.info"),
    list: this.bind<FilesListRequest, FilesListResponse>(this, "files.list"),
    revokePublicURL: this.bind<
      FilesRevokePublicURLRequest,
      FilesRevokePublicURLResponse
    >(this, "files.revokePublicURL"),
    sharedPublicURL: this.bind<
      FilesSharedPublicURLRequest,
      FilesSharedPublicURLResponse
    >(this, "files.sharedPublicURL"),
    upload: this.bind<FilesUploadRequest, FilesUploadResponse>(
      this,
      "files.upload"
    ),
    getUploadURLExternal: this.bind<
      FilesGetUploadURLExternalRequest,
      FilesGetUploadURLExternalResponse
    >(this, "files.getUploadURLExternal"),
    completeUploadExternal: this.bind<
      FilesCompleteUploadExternalRequest,
      FilesCompleteUploadExternalResponse
    >(this, "files.completeUploadExternal"),
    comments: {
      delete: this.bind<
        FilesCommentsDeleteRequest,
        FilesCommentsDeleteResponse
      >(this, "files.comments.delete"),
    },
    remote: {
      info: this.bind<FilesRemoteInfoRequest, FilesRemoteInfoResponse>(
        this,
        "files.remote.info"
      ),
      list: this.bind<FilesRemoteListRequest, FilesRemoteListResponse>(
        this,
        "files.remote.list"
      ),
      add: this.bind<FilesRemoteAddRequest, FilesRemoteAddResponse>(
        this,
        "files.remote.add"
      ),
      update: this.bind<FilesRemoteUpdateRequest, FilesRemoteUpdateResponse>(
        this,
        "files.remote.update"
      ),
      remove: this.bind<FilesRemoteRemoveRequest, FilesRemoteRemoveResponse>(
        this,
        "files.remote.remove"
      ),
      share: this.bind<FilesRemoteShareRequest, FilesRemoteShareResponse>(
        this,
        "files.remote.share"
      ),
    },
  };

  public readonly migration = {
    exchange: this.bind<MigrationExchangeRequest, MigrationExchangeResponse>(
      this,
      "migration.exchange"
    ),
  };

  public readonly oauth = {
    v2: {
      access: this.bind<OAuthV2AccessRequest, OAuthV2AccessResponse>(
        this,
        "oauth.v2.access"
      ),
      exchange: this.bind<OAuthV2ExchangeRequest, OAuthV2ExchangeResponse>(
        this,
        "oauth.v2.exchange"
      ),
    },
  };

  public readonly openid = {
    connect: {
      token: this.bind<OpenIDConnectTokenRequest, OpenIDConnectTokenResponse>(
        this,
        "openid.connect.token"
      ),
      userInfo: this.bind<
        OpenIDConnectUserInfoRequest,
        OpenIDConnectUserInfoResponse
      >(this, "openid.connect.userInfo"),
    },
  };

  public readonly pins = {
    add: this.bind<PinsAddRequest, PinsAddResponse>(this, "pins.add"),
    list: this.bind<PinsListRequest, PinsListResponse>(this, "pins.list"),
    remove: this.bind<PinsRemoveRequest, PinsRemoveResponse>(
      this,
      "pins.remove"
    ),
  };

  public readonly reactions = {
    add: this.bind<ReactionsAddRequest, ReactionsAddResponse>(
      this,
      "reactions.add"
    ),
    get: this.bind<ReactionsGetRequest, ReactionsGetResponse>(
      this,
      "reactions.get"
    ),
    list: this.bind<ReactionsListRequest, ReactionsListResponse>(
      this,
      "reactions.list"
    ),
    remove: this.bind<ReactionsRemoveRequest, ReactionsRemoveResponse>(
      this,
      "reactions.remove"
    ),
  };

  public readonly reminders = {
    add: this.bind<RemindersAddRequest, RemindersAddResponse>(
      this,
      "reminders.add"
    ),
    complete: this.bind<RemindersCompleteRequest, RemindersCompleteResponse>(
      this,
      "reminders.complete"
    ),
    delete: this.bind<RemindersDeleteRequest, RemindersDeleteResponse>(
      this,
      "reminders.delete"
    ),
    info: this.bind<RemindersInfoRequest, RemindersInfoResponse>(
      this,
      "reminders.info"
    ),
    list: this.bind<RemindersListRequest, RemindersListResponse>(
      this,
      "reminders.list"
    ),
  };

  public readonly rtm = {
    connect: this.bind<RTMConnectRequest, RtmConnectResponse>(
      this,
      "rtm.connect"
    ),
    start: this.bind<RTMStartRequest, RtmStartResponse>(this, "rtm.start"),
  };

  public readonly search = {
    all: this.bind<SearchAllRequest, SearchAllResponse>(this, "search.all"),
    files: this.bind<SearchFilesRequest, SearchFilesResponse>(
      this,
      "search.files"
    ),
    messages: this.bind<SearchMessagesRequest, SearchMessagesResponse>(
      this,
      "search.messages"
    ),
  };

  public readonly stars = {
    add: this.bind<StarsAddRequest, StarsAddResponse>(this, "stars.add"),
    list: this.bind<StarsListRequest, StarsListResponse>(this, "stars.list"),
    remove: this.bind<StarsRemoveRequest, StarsRemoveResponse>(
      this,
      "stars.remove"
    ),
  };

  public readonly team = {
    accessLogs: this.bind<TeamAccessLogsRequest, TeamAccessLogsResponse>(
      this,
      "team.accessLogs"
    ),
    billableInfo: this.bind<TeamBillableInfoRequest, TeamBillableInfoResponse>(
      this,
      "team.billableInfo"
    ),
    billing: {
      info: this.bind<TeamBillingInfoRequest, TeamBillingInfoResponse>(
        this,
        "team.billing.info"
      ),
    },
    info: this.bind<TeamInfoRequest, TeamInfoResponse>(this, "team.info"),
    integrationLogs: this.bind<
      TeamIntegrationLogsRequest,
      TeamIntegrationLogsResponse
    >(this, "team.integrationLogs"),
    preferences: {
      list: this.bind<TeamPreferencesListRequest, TeamPreferencesListResponse>(
        this,
        "team.preferences.list"
      ),
    },
    profile: {
      get: this.bind<TeamProfileGetRequest, TeamProfileGetResponse>(
        this,
        "team.profile.get"
      ),
    },
  };

  public readonly usergroups = {
    create: this.bind<UsergroupsCreateRequest, UsergroupsCreateResponse>(
      this,
      "usergroups.create"
    ),
    disable: this.bind<UsergroupsDisableRequest, UsergroupsDisableResponse>(
      this,
      "usergroups.disable"
    ),
    enable: this.bind<UsergroupsEnableRequest, UsergroupsEnableResponse>(
      this,
      "usergroups.enable"
    ),
    list: this.bind<UsergroupsListRequest, UsergroupsListResponse>(
      this,
      "usergroups.list"
    ),
    update: this.bind<UsergroupsUpdateRequest, UsergroupsUpdateResponse>(
      this,
      "usergroups.update"
    ),
    users: {
      list: this.bind<UsergroupsUsersListRequest, UsergroupsUsersListResponse>(
        this,
        "usergroups.users.list"
      ),
      update: this.bind<
        UsergroupsUsersUpdateRequest,
        UsergroupsUsersUpdateResponse
      >(this, "usergroups.users.update"),
    },
  };

  public readonly users = {
    conversations: this.bind<
      UsersConversationsRequest,
      UsersConversationsResponse
    >(this, "users.conversations"),
    deletePhoto: this.bind<UsersDeletePhotoRequest, UsersDeletePhotoResponse>(
      this,
      "users.deletePhoto"
    ),
    getPresence: this.bind<UsersGetPresenceRequest, UsersGetPresenceResponse>(
      this,
      "users.getPresence"
    ),
    identity: this.bind<UsersIdentityRequest, UsersIdentityResponse>(
      this,
      "users.identity"
    ),
    info: this.bind<UsersInfoRequest, UsersInfoResponse>(this, "users.info"),
    list: this.bind<UsersListRequest, UsersListResponse>(this, "users.list"),
    lookupByEmail: this.bind<
      UsersLookupByEmailRequest,
      UsersLookupByEmailResponse
    >(this, "users.lookupByEmail"),
    setPhoto: this.bind<UsersSetPhotoRequest, UsersSetPhotoResponse>(
      this,
      "users.setPhoto"
    ),
    setPresence: this.bind<UsersSetPresenceRequest, UsersSetPresenceResponse>(
      this,
      "users.setPresence"
    ),
    profile: {
      get: this.bind<UsersProfileGetRequest, UsersProfileGetResponse>(
        this,
        "users.profile.get"
      ),
      set: this.bind<UsersProfileSetRequest, UsersProfileSetResponse>(
        this,
        "users.profile.set"
      ),
    },
  };

  public readonly views = {
    open: this.bind<ViewsOpenRequest, ViewsOpenResponse>(this, "views.open"),
    publish: this.bind<ViewsPublishRequest, ViewsPublishResponse>(
      this,
      "views.publish"
    ),
    push: this.bind<ViewsPushRequest, ViewsPushResponse>(this, "views.push"),
    update: this.bind<ViewsUpdateRequest, ViewsUpdateResponse>(
      this,
      "views.update"
    ),
  };
}
