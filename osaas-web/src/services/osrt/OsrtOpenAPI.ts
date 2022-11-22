// @ts-ignore
/* eslint-disable */
import { request } from '@/config';

/** 此处后端没有提供注释 GET /analysis/ */
export async function analysisRecord(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.analysisRecordParams,
  options?: { [key: string]: any },
) {
  return request<any>('/analysis/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Apps列表 GET /apps */
export async function getPersonalApps(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPersonalAppsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtApp>('/apps', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /apps/check */
export async function uploadAppPreCheck(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadAppPreCheckParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.Result>('/apps/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的pages资源的count GET /apps/count */
export async function getPersonalAppsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPersonalAppsCountParams,
  options?: { [key: string]: any },
) {
  return request<number>('/apps/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Apps detail GET /apps/detail */
export async function getAppDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtAppDetail>('/apps/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /apps/engines */
export async function getEngineInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getEngineInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.PageEngineInfo>('/apps/engines', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取app的入口 GET /apps/entry */
export async function getAppEntries(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppEntriesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtAppEntry>('/apps/entry', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新app的入口默认参数-硬件资源 PUT /apps/entry-parameters */
export async function updateAppEntryParameters(
  body: API.EntryParameter,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/apps/entry-parameters', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取app的入口默认参数-endpoint GET /apps/entry/endpoints */
export async function getAppEntryEndPoints(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppEntryEndPointsParams,
  options?: { [key: string]: any },
) {
  return request<API.RunParameter>('/apps/entry/endpoints', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取app的入口默认参数-parameters GET /apps/entry/parameters */
export async function getAppEntryRunParameterListInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppEntryRunParameterListInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.RunParameter>('/apps/entry/parameters', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取app的入口默认资源配置和产品类型 GET /apps/entry/resources */
export async function getAppEntryRunResourcesInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppEntryRunResourcesInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.RunParameter>('/apps/entry/resources', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /apps/install-app-file */
export async function installApp(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.installAppParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.AppInstallRet>('/apps/install-app-file', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /apps/install-tools */
export async function installTools(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.installToolsParams,
  options?: { [key: string]: any },
) {
  return request<API.AppInstallRet>('/apps/install-tools', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取app启动时的资源上限 GET /apps/resource */
export async function getRunResourcesUplimit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRunResourcesUplimitParams,
  options?: { [key: string]: any },
) {
  return request<API.ResourceUplimit>('/apps/resource', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 运行程序入口的app POST /apps/run */
export async function runAppWithEntry(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.runAppWithEntryParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtInstance>('/apps/run', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取app的入口的所有启动参数 GET /apps/run-parameters */
export async function getAppEntryRunParameter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppEntryRunParameterParams,
  options?: { [key: string]: any },
) {
  return request<API.RunParameter>('/apps/run-parameters', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 运行程序入口的app的前置提醒 GET /apps/run-remind */
export async function runAppWithEntryRemind(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.runAppWithEntryRemindParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/apps/run-remind', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索searvice appPod POST /apps/search-pod */
export async function getServiceAppPod(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getServiceAppPodParams,
  body: string[],
  options?: { [key: string]: any },
) {
  return request<API.AppPod[]>('/apps/search-pod', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /apps/start-engine */
export async function startEngine(options?: { [key: string]: any }) {
  return request<API.EngineAppRet>('/apps/start-engine', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /apps/stop-engine */
export async function stopEngine(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopEngineParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/apps/stop-engine', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /apps/tools */
export async function getTools(options?: { [key: string]: any }) {
  return request<string[]>('/apps/tools', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /apps/tools-version */
export async function getToolsVersionApp(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getToolsVersionAppParams,
  options?: { [key: string]: any },
) {
  return request<string[]>('/apps/tools-version', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /clusters/ */
export async function getCluster(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getClusterParams,
  options?: { [key: string]: any },
) {
  return request<API.ClusterConfig>('/clusters/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /clusters/ */
export async function delCluster(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delClusterParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/clusters/', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /clusters/all */
export async function getAllCluster(options?: { [key: string]: any }) {
  return request<API.ClusterConfig[]>('/clusters/all', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /clusters/nodes */
export async function getClusterNodes(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/clusters/nodes', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /clusters/resources */
export async function getClusterResources(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/clusters/resources', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /clusters/setup_from_cmapi */
export async function setupClusterFromApi(
  body: API.ClusterApiInfo,
  options?: { [key: string]: any },
) {
  return request<API.ClusterConfig[]>('/clusters/setup_from_cmapi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户默认头像生成 POST /cos/avatar-generate */
export async function userAvatarGenerate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userAvatarGenerateParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/cos/avatar-generate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 图片上传 POST /cos/image */
export async function uploadImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadImageParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.UrlInfo>('/cos/image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 生成预签名的上传连接 GET /cos/url */
export async function generatePresignedUploadUrl(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.generatePresignedUploadUrlParams,
  options?: { [key: string]: any },
) {
  return request<API.CosVo>('/cos/url', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /domains */
export async function getDomains(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDomainsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageDomainDetail>('/domains', {
    method: 'GET',
    params: {
      // type has a default value: all
      type: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑alias PUT /domains */
export async function editDomainAlias(body: API.Domain, options?: { [key: string]: any }) {
  return request<API.Result>('/domains', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除alias DELETE /domains */
export async function deleteDomainAlias(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDomainAliasParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/domains', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 校验alias是否已经存在 GET /domains/check */
export async function checkDomainAliasExist(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkDomainAliasExistParams,
  options?: { [key: string]: any },
) {
  return request<API.Exist>('/domains/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取username所属identity账户信息 GET /identity */
export async function identityUsername(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.identityUsernameParams,
  options?: { [key: string]: any },
) {
  return request<API.Identity>('/identity', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** os获取username所属identity GET /identity/os */
export async function getOsIdentityUsername(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsIdentityUsernameParams,
  options?: { [key: string]: any },
) {
  return request<API.Identity>('/identity/os', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取username所属identity账户信息 GET /identity/relation */
export async function getIdentityInfoByProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIdentityInfoByProjectIdParams,
  options?: { [key: string]: any },
) {
  return request<API.Identity>('/identity/relation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /licenses */
export async function getLicenses(options?: { [key: string]: any }) {
  return request<API.LicensesTemplate[]>('/licenses', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /licenses/${param0} */
export async function getLicenseTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLicenseTemplateParams,
  options?: { [key: string]: any },
) {
  const { license: param0, ...queryParams } = params;
  return request<API.LicensesTemplate>(`/licenses/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /meta/ */
export async function getSeoMetaInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSeoMetaInfoParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/meta/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户通知信息 GET /notifications */
export async function getAllNotifications(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAllNotificationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageNotifyMessage>('/notifications', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /notifications/broadcast */
export async function createSystemAnnounce(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createSystemAnnounceParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/broadcast', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户未读通知数量 GET /notifications/count */
export async function getMsgCounts(options?: { [key: string]: any }) {
  return request<API.NotifyCount>('/notifications/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /notifications/email */
export async function sendTemplateMailest(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendTemplateMailestParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/email', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /notifications/file-template */
export async function saveNotifyFileTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveNotifyFileTemplateParams,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/file-template', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /notifications/message-count */
export async function getMessageCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessageCountParams,
  options?: { [key: string]: any },
) {
  return request<API.MessageCount[]>('/notifications/message-count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /notifications/message/status */
export async function markNotificationsMessageStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markNotificationsMessageStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/message/status', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /notifications/read */
export async function readNotifications(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.readNotificationsParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/read', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /notifications/sync */
export async function pullNotifyReminds(options?: { [key: string]: any }) {
  return request<API.Result>('/notifications/sync', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /notifications/template */
export async function getNotifyTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNotifyTemplateParams,
  options?: { [key: string]: any },
) {
  return request<API.PageMsgTemplate>('/notifications/template', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /notifications/template */
export async function updateNotifyTemplate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateNotifyTemplateParams,
  body: API.MsgTemplateInfo,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/template', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /notifications/template */
export async function saveNotifyTemplate(
  body: API.MsgTemplateInfo,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/notifications/template', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ocms/ */
export async function getUserProjectInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserProjectInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.UserStatisticsQueryResult>('/ocms/', {
    method: 'GET',
    params: {
      ...params,
      userStatisticsQuery: undefined,
      ...params['userStatisticsQuery'],
    },
    ...(options || {}),
  });
}

/** 合并多个OpenAPI 为一个，并且支持重置tags GET /openapis */
export async function mergeOpenAPI(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.mergeOpenAPIParams,
  options?: { [key: string]: any },
) {
  return request<string>('/openapis', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织列表 GET /organizations */
export async function getOrganizations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtOrganization>('/organizations', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** user加入组织的数量 GET /organizations/count */
export async function getUserOrganizationsCount(options?: { [key: string]: any }) {
  return request<number>('/organizations/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 详情 GET /organizations/detail */
export async function getOrganizationDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtOrganization>('/organizations/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织动态 GET /organizations/dynamics */
export async function getOrganizationDynamics(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationDynamicsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtDynamic>('/organizations/dynamics', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织成员列表 GET /organizations/members */
export async function organizeUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.organizeUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUser>('/organizations/members', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据orgnization的name,获取user所在的org的role GET /organizations/role */
export async function getUserOrganizationAccessRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserOrganizationAccessRoleParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtOrganizationMember>('/organizations/role', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取组织Stats信息 GET /organizations/stats */
export async function getOrganizationStats(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationStatsParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrcStats>('/organizations/stats', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** team的项目列表 GET /organizations/team-projects */
export async function organizeTeamProjects(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.organizeTeamProjectsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtProjects>('/organizations/team-projects', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新组织 PUT /organizes */
export async function updateOrganize(body: API.OsrtOrganization, options?: { [key: string]: any }) {
  return request<API.Result>('/organizes', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增组织 POST /organizes */
export async function insertOrganize(body: API.OsrtOrganization, options?: { [key: string]: any }) {
  return request<API.Result>('/organizes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除组织 DELETE /organizes */
export async function deleteOrganize(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrganizeParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看是否有组织权限 GET /organizes/access/check */
export async function checkOrganizePermission(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkOrganizePermissionParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/access/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除已加入组织的成员 DELETE /organizes/member */
export async function removeMemberFromOrganize(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeMemberFromOrganizeParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/member', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询是否存在邀请加入组织-成员 GET /organizes/member/invitation */
export async function queryInvitationFromOrganize(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryInvitationFromOrganizeParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/member/invitation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邀请加入组织-成员 POST /organizes/member/invitation */
export async function invitationJoinOrganizeMember(
  body: API.OsrtOrganizeMemberInvitation,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/member/invitation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 确认接受邀请加入组织-成员 POST /organizes/member/invitation/confirm */
export async function confirmAcceptInvitationJoinOrganizeMember(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.confirmAcceptInvitationJoinOrganizeMemberParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/member/invitation/confirm', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新组织-组 PUT /organizes/team */
export async function updateOrganizeTeam(
  body: API.OsrtOrganizeTeam,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/team', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增组织-组 POST /organizes/team */
export async function insertOrganizeTeam(
  body: API.OsrtOrganizeTeam,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/team', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除组织-组 DELETE /organizes/team */
export async function deleteOrganizeTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrganizeTeamParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/team', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邀请加入组织-组 POST /organizes/team/invitation */
export async function invitationJoinOrganizeTeam(
  body: API.OsrtOrganizeTeamInvitation,
  options?: { [key: string]: any },
) {
  return request<API.OsrtOrganizeTeamInvitation>('/organizes/team/invitation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 加入组织-组 POST /organizes/team/join */
export async function joinOrganizeTeam(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.joinOrganizeTeamParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/organizes/team/join', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的app信息 GET /os/projects/apps */
export async function getOsProjectApps(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectAppsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtApp>('/os/projects/apps', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的ci信息 GET /os/projects/cis */
export async function getOsProjectCis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectCisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtCi>('/os/projects/cis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** project的详情info GET /os/projects/detail */
export async function getOsProjectInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ProjectInfo>('/os/projects/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的page信息 GET /os/projects/pages */
export async function getOsProjectPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectPagesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtPage>('/os/projects/pages', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的runtime信息 GET /os/projects/runtimes */
export async function getOsProjectRuntimes(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectRuntimesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtRuntime>('/os/projects/runtimes', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** project的versions GET /os/projects/versions */
export async function getOsProjectVersions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectVersionsParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectVersion[]>('/os/projects/versions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的wiki信息 GET /os/projects/wikis */
export async function getOsProjectWikis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOsProjectWikisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtWiki>('/os/projects/wikis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索apps GET /os/search/apps */
export async function searchOsApps(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsAppsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtApp>('/os/search/apps', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索apps count GET /os/search/apps/count */
export async function searchOsAppsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsAppsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/apps/count', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索组织 GET /os/search/organizations */
export async function searchOsOrganizations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsOrganizationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtOrganization>('/os/search/organizations', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索组织 count GET /os/search/organizations/count */
export async function searchOsOrganizationsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsOrganizationsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/organizations/count', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索pages GET /os/search/pages */
export async function searchOsPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsPagesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtPage>('/os/search/pages', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索pages count GET /os/search/pages/count */
export async function searchOsPagesCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsPagesCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/pages/count', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索project GET /os/search/projects */
export async function searchOsProjects(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsProjectsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtProjects>('/os/search/projects', {
    method: 'GET',
    params: {
      // select has a default value: created
      select: 'created',
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索project GET /os/search/projects/count */
export async function searchOsProjectsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsProjectsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/projects/count', {
    method: 'GET',
    params: {
      // select has a default value: created
      select: 'created',
      // filter has a default value: all
      filter: 'all',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索runtimes GET /os/search/runtimes */
export async function searchOsRuntimes(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsRuntimesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtRuntime>('/os/search/runtimes', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索runtimes count GET /os/search/runtimes/count */
export async function searchOsRuntimesCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsRuntimesCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/runtimes/count', {
    method: 'GET',
    params: {
      // filter has a default value: ALL
      filter: 'ALL',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索user GET /os/search/users */
export async function searchOsUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUser>('/os/search/users', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索user count GET /os/search/users/count */
export async function searchOsUsersCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsUsersCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/users/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索wiki GET /os/search/wikis */
export async function searchOsWikis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsWikisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtWiki>('/os/search/wikis', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索wiki count GET /os/search/wikis/count */
export async function searchOsWikisCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOsWikisCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/os/search/wikis/count', {
    method: 'GET',
    params: {
      // filter has a default value: all
      filter: 'all',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取消息 POST /osrcer/chat/message */
export async function getMessages(body: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.OsrcerChatContent>('/osrcer/chat/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取消息 GET /osrcer/chat/message/internal */
export async function getMessagesInternal(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMessagesInternalParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrcerChatContent>('/osrcer/chat/message/internal', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 个人最近聊天 GET /osrcer/chat/message/recent */
export async function userRecentChats(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userRecentChatsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrcerChatMessage>('/osrcer/chat/message/recent', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 发送消息 POST /osrcer/chat/message/send */
export async function sendMessage(body: API.OsrcerChatMessage, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/osrcer/chat/message/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的Pages列表 GET /pages */
export async function getPersonalPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPersonalPagesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtPage>('/pages', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pages/check */
export async function uploadFilePreCheck(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFilePreCheckParams,
  body: API.PageInfo,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/pages/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 单个pages的详细信息 GET /pages/detail */
export async function getPageDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtPageDetail>('/pages/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得Page文件列表 GET /pages/files */
export async function getPageFiles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageFilesParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtFileBrowser>('/pages/files', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** page的代理配置 GET /pages/proxies */
export async function getPageProxies(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageProxiesParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtPageProxy[]>('/pages/proxies', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** pages编辑proxy配置 PUT /pages/proxy */
export async function editPagesProxy(body: API.ProxyInfo, options?: { [key: string]: any }) {
  return request<API.Result>('/pages/proxy', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** pages增加proxy配置 POST /pages/proxy */
export async function addPagesProxy(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addPagesProxyParams,
  body: API.ProxyInfo,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/pages/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** proxy的删除 DELETE /pages/proxy */
export async function deletePagesProxy(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePagesProxyParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/pages/proxy', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pages/upload */
export async function uploadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileParams,
  body: {
    pageInfo?: API.PageInfo;
  },
  options?: { [key: string]: any },
) {
  return request<API.PageInstall>('/pages/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pay/ali/notify */
export async function aliNotify(options?: { [key: string]: any }) {
  return request<string>('/pay/ali/notify', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/ali/scan-code */
export async function aliScanCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.aliScanCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.ScanCode>('/pay/ali/scan-code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/validate */
export async function validatePayTrade(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validatePayTradeParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultInteger>('/pay/validate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/wechat-v3/get */
export async function wxV3Get(options?: { [key: string]: any }) {
  return request<string>('/pay/wechat-v3/get', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /pay/wechat-v3/notify */
export async function wxNotify(options?: { [key: string]: any }) {
  return request<any>('/pay/wechat-v3/notify', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/wechat-v3/plat-serial-number */
export async function wxPlatSerialNumber(options?: { [key: string]: any }) {
  return request<string>('/pay/wechat-v3/plat-serial-number', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/wechat-v3/scan-code */
export async function wxScanCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wxScanCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.ScanCode>('/pay/wechat-v3/scan-code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /pay/wechat-v3/serial-number */
export async function wxSerialNumber(options?: { [key: string]: any }) {
  return request<string>('/pay/wechat-v3/serial-number', {
    method: 'GET',
    ...(options || {}),
  });
}

/** add GET /product/add */
export async function addUserAmountTest(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUserAmountTestParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/product/add', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品折扣 POST /product/discount */
export async function productDiscount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.productDiscountParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListProductDiscount>('/product/discount', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 我的产品列表 GET /product/products */
export async function pageUserPurchaseProduct(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageUserPurchaseProductParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUserProduct>('/product/products', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 购买产品 POST /product/purchase */
export async function purchaseProduct(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.purchaseProductParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/product/purchase', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品规格 POST /product/specs */
export async function allProductSpecs(options?: { [key: string]: any }) {
  return request<API.ResultListProductSpecs>('/product/specs', {
    method: 'POST',
    ...(options || {}),
  });
}

/** update项目 PUT /projects */
export async function updateProject(body: API.OsrtProjects, options?: { [key: string]: any }) {
  return request<API.Result>('/projects', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create new project POST /projects */
export async function createProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createProjectParams,
  body: API.OsrtProjects,
  options?: { [key: string]: any },
) {
  return request<API.Projects>('/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** delete项目 DELETE /projects */
export async function deleteProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** add project when deploy app POST /projects/app-add */
export async function addAppProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addAppProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Projects>('/projects/app-add', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** add project app bundle relations POST /projects/app-bundle */
export async function addProjectsAppBundleRelations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addProjectsAppBundleRelationsParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/projects/app-bundle', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /projects/app-deploy */
export async function checkUserAppDeployInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUserAppDeployInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectBundleInfo>('/projects/app-deploy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的app信息 GET /projects/apps */
export async function getProjectApps(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectAppsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtApp>('/projects/apps', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** project的fork/vote/favor/score状态判断 GET /projects/census */
export async function getProjectCensus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectCensusParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectCensus[]>('/projects/census', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project评分、收藏、点赞、fork POST /projects/census */
export async function projectCensus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectCensusParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/census', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /projects/check */
export async function checkProjectInfoByName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkProjectInfoByNameParams,
  options?: { [key: string]: any },
) {
  return request<API.Projects>('/projects/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的ci信息 GET /projects/cis */
export async function getProjectCis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectCisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtCi>('/projects/cis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询项目下的协作者 GET /projects/collaborator */
export async function queryCollaboratorFromProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryCollaboratorFromProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUser>('/projects/collaborator', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除已加入仓库的协作者 DELETE /projects/collaborator */
export async function removeCollaboratorFromProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeCollaboratorFromProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/collaborator', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询是否存在邀请加入项目协做者 GET /projects/collaborator/invitation */
export async function queryInvitationFromProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryInvitationFromProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/collaborator/invitation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 邀请加入项目协作者 POST /projects/collaborator/invitation */
export async function invitationCollaboratorJoinProject(
  body: API.ProjectCollaboratorInvitation,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/collaborator/invitation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 确认接受邀请加入项目协作者 POST /projects/collaborator/invitation/confirm */
export async function confirmAcceptInvitationJoinProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.confirmAcceptInvitationJoinProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/collaborator/invitation/confirm', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project的详情info GET /projects/detail */
export async function getProjectInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.ProjectInfo>('/projects/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project下的domain的访问统计 GET /projects/domains */
export async function getProjectDomainsViews(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectDomainsViewsParams,
  options?: { [key: string]: any },
) {
  return request<API.DomainViews[]>('/projects/domains', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** fork进度状态查看 GET /projects/fork */
export async function getProjectForkStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectForkStatusParams,
  options?: { [key: string]: any },
) {
  return request<API.ForkTasks>('/projects/fork', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project的fork POST /projects/fork */
export async function forkProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.forkProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.ForkTasks>('/projects/fork', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** fork时,检查当前账户下user和user所在的organization)的fork状态 GET /projects/fork-identities */
export async function getForkIdentities(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getForkIdentitiesParams,
  options?: { [key: string]: any },
) {
  return request<API.ForkIdentity[]>('/projects/fork-identities', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /projects/guidance */
export async function getProjectDeployGuidance(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectDeployGuidanceParams,
  options?: { [key: string]: any },
) {
  return request<API.ProjectGuidance>('/projects/guidance', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看project的license GET /projects/license */
export async function getProjectLicense(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectLicenseParams,
  options?: { [key: string]: any },
) {
  return request<API.Licenses>('/projects/license', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** update项目的license PUT /projects/license */
export async function updateProjectLicense(body: API.Licenses, options?: { [key: string]: any }) {
  return request<API.Result>('/projects/license', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete项目的license DELETE /projects/license */
export async function deleteProjectLicense(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProjectLicenseParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/license', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 对Link链接可用性状态检查 GET /projects/link/check */
export async function checkLinkAvailable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkLinkAvailableParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultLinkStatus>('/projects/link/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** web上,创建project时,判断name是否已经存在 GET /projects/name-check */
export async function checkProjectNameExists(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkProjectNameExistsParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectBundleInfo>('/projects/name-check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** add project when deploy pages POST /projects/page-add */
export async function addPagesProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addPagesProjectParams,
  options?: { [key: string]: any },
) {
  return request<API.Projects>('/projects/page-add', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** add project page bundle relations POST /projects/page-bundle */
export async function addProjectsPageBundleRelations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addProjectsPageBundleRelationsParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/projects/page-bundle', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的page信息 GET /projects/pages */
export async function getProjectPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectPagesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtPage>('/projects/pages', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /projects/pages-deploy */
export async function checkUserPagesDeployInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUserPagesDeployInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectBundleInfo>('/projects/pages-deploy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project统计数据 GET /projects/panel-data */
export async function projectPanelData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectPanelDataParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectPanelData>('/projects/panel-data', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** project发布 POST /projects/publish */
export async function setProjectPublishState(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setProjectPublishStateParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/publish', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库private/public检查 GET /projects/repo/check */
export async function checkRepoPrivate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkRepoPrivateParams,
  options?: { [key: string]: any },
) {
  return request<API.RepoCheck>('/projects/repo/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的runtime信息 GET /projects/runtimes */
export async function getProjectRuntimes(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectRuntimesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtRuntime>('/projects/runtimes', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** project分享 POST /projects/share */
export async function shareProject(body: API.ShareInfo, options?: { [key: string]: any }) {
  return request<API.Share>('/projects/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sync repo from origin source POST /projects/sync */
export async function syncProjectRepoInfo(body: API.RepoInfo, options?: { [key: string]: any }) {
  return request<API.Result>('/projects/sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消收藏、点赞 POST /projects/uncensus */
export async function projectUnCensus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectUnCensusParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/uncensus', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** fork时,检查当前user的fork状态 GET /projects/user-fork-identities */
export async function getUserForkIdentities(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserForkIdentitiesParams,
  options?: { [key: string]: any },
) {
  return request<API.ForkIdentity>('/projects/user-fork-identities', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** update项目版本 PUT /projects/version */
export async function updateProjectVersion(
  body: API.OsrtProjectVersion,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/version', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** update项目version的 live link PUT /projects/version/link */
export async function updateProjectVersionLiveLink(
  body: API.OsrtProjectVersion,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/projects/version/link', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** project的versions GET /projects/versions */
export async function getProjectVersions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectVersionsParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtProjectVersion[]>('/projects/versions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得project的wiki信息 GET /projects/wikis */
export async function getProjectWikis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectWikisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtWiki>('/projects/wikis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据过滤条件,获得当前owner的所有运行时 GET /runtimes */
export async function getOwnerRuntimes(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOwnerRuntimesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtRuntime>('/runtimes', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** runtime详情 GET /runtimes/detail */
export async function getRuntimeDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRuntimeDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtRuntimeDetail>('/runtimes/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取运行时的endPoint列表 GET /runtimes/endpoint */
export async function getRuntimeEndPoints(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRuntimeEndPointsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageEntryEndPoint>('/runtimes/endpoint', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取实例详情 GET /runtimes/instance */
export async function getRuntimeInstanceDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRuntimeInstanceDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtInstanceDetail>('/runtimes/instance', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 停止instance POST /runtimes/instance-stop */
export async function stopInstance(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopInstanceParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtInstance>('/runtimes/instance-stop', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获得runtime的实例列表 GET /runtimes/instances */
export async function getRuntimeInstances(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRuntimeInstancesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtInstance>('/runtimes/instances', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** instance的log信息 GET /runtimes/log */
export async function getRuntimeInstanceLog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRuntimeInstanceLogParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/runtimes/log', {
    method: 'GET',
    params: {
      // start has a default value: -4096
      start: '-4096',
      // end has a default value: 2147483647
      end: '2147483647',
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新instance的端口号 PUT /runtimes/port */
export async function updateInstanceRunningPort(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateInstanceRunningPortParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/runtimes/port', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 停止runtime POST /runtimes/stop */
export async function stopRuntime(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopRuntimeParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtRuntime>('/runtimes/stop', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索apps GET /search/apps */
export async function searchApps(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchAppsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtApp>('/search/apps', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索apps count GET /search/apps/count */
export async function searchAppsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchAppsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/apps/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** dashboard搜索project GET /search/dashboard */
export async function searchProjectsDashboard(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchProjectsDashboardParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtProjects>('/search/dashboard', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索组织 GET /search/organizations */
export async function searchOrganizations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOrganizationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtOrganization>('/search/organizations', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索组织 count GET /search/organizations/count */
export async function searchOrganizationsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchOrganizationsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/organizations/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索pages GET /search/pages */
export async function searchPages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPagesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtPage>('/search/pages', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索pages count GET /search/pages/count */
export async function searchPagesCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPagesCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/pages/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** popular搜索project GET /search/polular */
export async function searchProjectsPolular(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchProjectsPolularParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtProjects>('/search/polular', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索project GET /search/projects */
export async function searchProjects(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchProjectsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtProjects>('/search/projects', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索project GET /search/projects/count */
export async function searchProjectsCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchProjectsCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/projects/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索runtimes GET /search/runtimes */
export async function searchRuntimes(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchRuntimesParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtRuntime>('/search/runtimes', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索runtimes count GET /search/runtimes/count */
export async function searchRuntimesCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchRuntimesCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/runtimes/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索user GET /search/users */
export async function searchUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUser>('/search/users', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索user count GET /search/users/count */
export async function searchUsersCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUsersCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/users/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索wiki GET /search/wikis */
export async function searchWikis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchWikisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtWiki>('/search/wikis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 搜索wiki count GET /search/wikis/count */
export async function searchWikisCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchWikisCountParams,
  options?: { [key: string]: any },
) {
  return request<API.Count>('/search/wikis/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /setting/langs */
export async function changeSessionLanauage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.changeSessionLanauageParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/setting/langs', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /setting/notification */
export async function getNotifySetting(options?: { [key: string]: any }) {
  return request<API.NotifySettings[]>('/setting/notification', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /setting/notification */
export async function updateNotifySetting(
  body: API.NotifySettings[],
  options?: { [key: string]: any },
) {
  return request<API.Result>('/setting/notification', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /sitemap.xml */
export async function getSitemapFile(options?: { [key: string]: any }) {
  return request<string>('/sitemap.xml', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /system/feedback */
export async function feedbackMessage(body: API.FeedbackMessage, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/system/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /system/menu/community */
export async function getCommunityNavigationMenus(options?: { [key: string]: any }) {
  return request<API.UserMenu>('/system/menu/community', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /system/menu/os */
export async function getOsNavigationMenus(options?: { [key: string]: any }) {
  return request<API.UserMenu>('/system/menu/os', {
    method: 'GET',
    ...(options || {}),
  });
}

/** topic详情列表 GET /topics */
export async function pageTopicInfos(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageTopicInfosParams,
  options?: { [key: string]: any },
) {
  return request<API.PageTopicInfo>('/topics', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建或更新topic POST /topics */
export async function newOrUpdateTopic(body: API.Topic, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** topic关联项目列表 GET /topics/${param0} */
export async function queryTopicInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryTopicInfoParams,
  options?: { [key: string]: any },
) {
  const { topicName: param0, ...queryParams } = params;
  return request<API.Topic>(`/topics/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** topic关联项目列表 GET /topics/${param0}/projects */
export async function pageTopicRelateProjects(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.pageTopicRelateProjectsParams,
  options?: { [key: string]: any },
) {
  const { topicName: param0, ...queryParams } = params;
  return request<API.PageOsrtProjects>(`/topics/${param0}/projects`, {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 关联项目topic GET /topics/bind */
export async function projectBindTopic(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.projectBindTopicParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultVoid>('/topics/bind', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 账单列表 GET /user/billing */
export async function userBillingPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userBillingPageParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUserBilling>('/user/billing', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取主钱包信息 GET /user/wallet */
export async function getUserWallet(options?: { [key: string]: any }) {
  return request<API.UserWallet>('/user/wallet', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户充值记录 GET /user/wallet/recharge */
export async function getRechargeRecord(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRechargeRecordParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUserRecharge>('/user/wallet/recharge', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取个人信息 GET /users */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<API.User>('/users', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户完善个人信息 PUT /users */
export async function richUserInfo(body: API.User, options?: { [key: string]: any }) {
  return request<API.Result>('/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 三方账户关联信息列表 GET /users/account/oauth */
export async function getOauthList(options?: { [key: string]: any }) {
  return request<API.UserOauth[]>('/users/account/oauth', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 解绑三方账户关联 DELETE /users/account/oauth/${param0} */
export async function unbindOauth(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unbindOauthParams,
  options?: { [key: string]: any },
) {
  const { source: param0, ...queryParams } = params;
  return request<API.Result>(`/users/account/oauth/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取当前登陆用户角色信息 GET /users/current-location */
export async function getCurrentLocation(options?: { [key: string]: any }) {
  return request<API.ClientLocation>('/users/current-location', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/deploy/access */
export async function checkUserDeployAccess(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUserDeployAccessParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/deploy/access', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/dynamics */
export async function getUserDynamics(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserDynamicsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtDynamic>('/users/dynamics', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册-发送邮箱验证码 POST /users/email */
export async function sendSignUpEmailVerification(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendSignUpEmailVerificationParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/email', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 发送邮箱验证码-下一步校验 POST /users/email-password/check */
export async function verifyPasswordEmail(body: API.CodeVerify, options?: { [key: string]: any }) {
  return request<API.Token>('/users/email-password/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** user的收藏 GET /users/favorites */
export async function getUserFavorites(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserFavoritesParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/users/favorites', {
    method: 'GET',
    params: {
      // type has a default value: project
      type: 'project',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** user的关注信息 GET /users/follow */
export async function getIdentityFollowInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIdentityFollowInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.FollowInfo>('/users/follow', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 关注 PUT /users/follow */
export async function followUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.followUserParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/follow', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 粉丝列表 GET /users/followers */
export async function getFollowers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFollowersParams,
  options?: { [key: string]: any },
) {
  return request<API.PageUser>('/users/followers', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 关注列表 GET /users/followings */
export async function getFollowings(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFollowingsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageObject>('/users/followings', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** user的浏览历史 GET /users/history */
export async function getUserBrowserHistory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserBrowserHistoryParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/users/history', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** generate browser history POST /users/history */
export async function generateBrowserHistory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.generateBrowserHistoryParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/history', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** generate browser history POST /users/identity-history */
export async function generateBrowserHistoryByName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.generateBrowserHistoryByNameParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/identity-history', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 申请开票 POST /users/invoice/apply */
export async function applyInvoice(body: API.OsrtUserInvoice, options?: { [key: string]: any }) {
  return request<API.Result>('/users/invoice/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 充值能开票列表 GET /users/invoice/enable */
export async function enableInvoice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.enableInvoiceParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtUserBalanceLog>('/users/invoice/enable', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 发票导出 GET /users/invoice/export */
export async function exportInvoice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.exportInvoiceParams,
  options?: { [key: string]: any },
) {
  return request<any>('/users/invoice/export', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 开票 POST /users/invoice/make */
export async function makeInvoice(body: API.OsrtUserInvoice, options?: { [key: string]: any }) {
  return request<API.Result>('/users/invoice/make', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** name唯一性检查 GET /users/name-unique */
export async function checkIdentityName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkIdentityNameParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/name-unique', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/oauth/access-token */
export async function getAccessTokens(options?: { [key: string]: any }) {
  return request<API.ResultListPersonalAccessToken>('/users/oauth/access-token', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /users/oauth/access-token */
export async function issueToken(body: API.PersonalAccessToken, options?: { [key: string]: any }) {
  return request<API.ResultPersonalAccessToken>('/users/oauth/access-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /users/oauth/access-token */
export async function revokeToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.revokeTokenParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultVoid>('/users/oauth/access-token', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/oauth/access-token/scope */
export async function getScopes(options?: { [key: string]: any }) {
  return request<API.ResultListScopeDefine>('/users/oauth/access-token/scope', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/oauth/callback/${param0} */
export async function oauthCallback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.oauthCallbackParams,
  options?: { [key: string]: any },
) {
  const { source: param0, ...queryParams } = params;
  return request<any>(`/users/oauth/callback/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
      callback: undefined,
      ...queryParams['callback'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /users/oauth/clients */
export async function updateRegisterClient(
  body: API.Oauth2RegisterClient,
  options?: { [key: string]: any },
) {
  return request<API.ResultOauth2RegisterClient>('/users/oauth/clients', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /users/oauth/clients */
export async function newRegisterClient(
  body: API.Oauth2RegisterClient,
  options?: { [key: string]: any },
) {
  return request<API.ResultOauth2RegisterClient>('/users/oauth/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/oauth/render/${param0} */
export async function renderAuth(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.renderAuthParams & {
    // header
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  const { source: param0, ...queryParams } = params;
  return request<API.RenderAuth>(`/users/oauth/render/${param0}`, {
    method: 'GET',
    headers: {},
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 账户密码变更 POST /users/password */
export async function updatePassword(body: API.UpdatePassword, options?: { [key: string]: any }) {
  return request<API.Result>('/users/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 忘记密码 POST /users/password/change */
export async function changePassword(body: API.PasswordChange, options?: { [key: string]: any }) {
  return request<API.Result>('/users/password/change', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/people */
export async function getOrganizationPeople(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationPeopleParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/users/people', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 个人资源的search GET /users/resources */
export async function searchUserResources(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUserResourcesParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/users/resources', {
    method: 'GET',
    params: {
      // type has a default value: repo
      type: 'repo',

      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录-用户名/邮箱 POST /users/signin */
export async function userSignIn(body: API.UserLogin, options?: { [key: string]: any }) {
  return request<API.Token>('/users/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册 POST /users/signup */
export async function userSignUp(body: API.UserSignUp, options?: { [key: string]: any }) {
  return request<API.Token>('/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送短信验证码 POST /users/sms */
export async function sendSignInSMSVerification(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendSignInSMSVerificationParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/sms', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户Stats信息 GET /users/stats */
export async function getUserStats(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserStatsParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrcStats>('/users/stats', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** user在team中的auth检查 GET /users/team/access */
export async function checkUserTeamAccess(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUserTeamAccessParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/team/access', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/teams */
export async function getUserOrganizationTeams(options?: { [key: string]: any }) {
  return request<API.OsrtUserTeam[]>('/users/teams', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /users/teams/members */
export async function getOrganizationTeamsMembers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationTeamsMembersParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/users/teams/members', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** token刷新 POST /users/token/refresh */
export async function refreshToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.refreshTokenParams,
  options?: { [key: string]: any },
) {
  return request<API.Token>('/users/token/refresh', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取关 PUT /users/unfollow */
export async function unfollowUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unfollowUserParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/unfollow', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 发送验证码 GET /users/verify-code */
export async function sendVerifyCode(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendVerifyCodeParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/users/verify-code', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki列表 GET /wikis */
export async function getSearchWikis(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSearchWikisParams,
  options?: { [key: string]: any },
) {
  return request<API.PageOsrtWiki>('/wikis', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新wiki PUT /wikis */
export async function updateWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateWikiParams,
  body: API.WikiModel,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增wiki POST /wikis */
export async function createWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createWikiParams,
  body: API.WikiModel,
  options?: { [key: string]: any },
) {
  return request<API.OsrtWiki>('/wikis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除wiki DELETE /wikis */
export async function delWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**  wiki审核 POST /wikis/audit */
export async function wikiAudit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wikiAuditParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/audit', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 申请审核 POST /wikis/audit_apply */
export async function wikiAuditApply(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.wikiAuditApplyParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/audit_apply', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki的统计信息 GET /wikis/census */
export async function getWikiCensus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWikiCensusParams,
  options?: { [key: string]: any },
) {
  return request<API.WikiCensus>('/wikis/census', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki的detail GET /wikis/detail */
export async function getWikiDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWikiDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.OsrtWikiDetail>('/wikis/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki收藏 POST /wikis/favor */
export async function favorWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.favorWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/favor', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki发布 POST /wikis/publish */
export async function setWikiPublishState(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.setWikiPublishStateParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/publish', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** wiki的relations search GET /wikis/relations */
export async function searchWikiRelations(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchWikiRelationsParams,
  options?: { [key: string]: any },
) {
  return request<API.PageRelation>('/wikis/relations', {
    method: 'GET',
    params: {
      // size has a default value: 20
      size: '20',
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消收藏 POST /wikis/unfavor */
export async function unfavorWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unfavorWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/unfavor', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消发布 POST /wikis/unpublish */
export async function unPublishWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unPublishWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/unpublish', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 取消点赞 POST /wikis/unvote */
export async function unvoteWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unvoteWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/unvote', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 点赞 POST /wikis/vote */
export async function voteWiki(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.voteWikiParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>('/wikis/vote', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
