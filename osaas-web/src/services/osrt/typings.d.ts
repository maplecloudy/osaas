declare namespace API {
  type Activation = {
    activeByDefault?: boolean;
    jdk?: string;
    os?: ActivationOS;
    property?: ActivationProperty;
    file?: ActivationFile;
  };

  type ActivationFile = {
    missing?: string;
    exists?: string;
  };

  type ActivationOS = {
    name?: string;
    family?: string;
    arch?: string;
    version?: string;
  };

  type ActivationProperty = {
    name?: string;
    value?: string;
  };

  type addAppProjectParams = {
    scopeId: number;
    type: string;
    name: string;
    bundleStr: string;
  };

  type addPagesProjectParams = {
    scopeId: number;
    type: string;
    name: string;
    bundleStr: string;
  };

  type addPagesProxyParams = {
    id: string;
  };

  type addProjectsAppBundleRelationsParams = {
    scopeId: number;
    type: string;
    projectId: string;
    bundleStr: string;
  };

  type addProjectsPageBundleRelationsParams = {
    scopeId: number;
    type: string;
    projectId: string;
    bundleStr: string;
  };

  type addUserAmountTestParams = {
    amount: number;
    account: number;
  };

  type Alias = {
    alias?: string;
    /** 正常-0,待激活-1,删除-2 */
    status?: number;
  };

  type aliScanCodeParams = {
    amount: string;
  };

  type analysisRecordParams = {
    clientId: string;
    userId?: number;
    uri?: string;
    lang?: string;
    browserName?: string;
    browserVersion?: string;
    screenH?: string;
    screenW?: string;
    colorMode?: string;
  };

  type App = {
    /** 应用的类型,SERVICE类型，除非主动停止不会主动停止的应用，比如任何web service，TASK类型，在完成工作后，会自动停止的应用，TOOLS，提供运行环境类的应用，可以被其他应用作为依赖，比如JAVA环境是一个TOOLS应用 */
    type?: 'RUNABLE' | 'TOOLS';
    /** 决定应用的路径，可以为空，以Java为例，一个应用一般由groupId和artifactId组成 */
    bundle?: string[];
    /** 应用编译时继承版本信息 */
    version?: string;
    /** 应用在发布的时候重新定义的版本信息 */
    releaseVersion?: string;
    commit?: Commit;
    appPackage?: AppPackage;
    /** 全路径 */
    appPath?: string;
    /** 根据app的dir生成的key */
    appKey?: string;
    osrtAppKey?: string;
    osrtAppPath?: string;
    /** 应用的名称 */
    name?: string;
    /** 应用的类型 */
    subType?: string;
    /** 应用的简介，可以是Markdown形式的文档 */
    description?: string;
    modelVersion?: string;
    parent?: Parent;
    packaging?: string;
    url?: string;
    childInheritAppendPath?: string;
    inceptionYear?: string;
    organization?: Organization;
    licenses?: License[];
    developers?: Developer[];
    contributors?: Contributor[];
    mailingLists?: MailingList[];
    prerequisites?: Prerequisites;
    scm?: Scm;
    issueManagement?: IssueManagement;
    ciManagement?: CiManagement;
    build?: Build;
    profiles?: Profile[];
    modelEncoding?: string;
    /** 此应用依赖的tools应用 */
    tools?: Tools[];
    podEntries?: PodEntry[];
  };

  type AppInstallRet = {
    appId?: string;
    type?: 'RUNABLE' | 'TOOLS';
    appUrl?: string;
  };

  type AppPackage = {
    /** 应用包的名称 */
    packageName?: string;
    /** 应用包的类型，FILE将以文件的形式呈现在Container的work Dir，ARCHIVE将自动被解压缩后呈现在Container的work Dir */
    type?: 'FILE' | 'ARCHIVE';
  };

  type AppPod = {
    app?: App;
    type?: 'TASK' | 'SERVICE';
    cmd?: string;
    appPodId?: number;
    hard?: Hard;
    extraSource?: string[];
    parameter?: Record<string, any>;
    env?: Record<string, any>;
    original?: boolean;
  };

  type Apps = {
    /** app的id */
    id?: string;
    /** project的id */
    projectId?: string;
    /** project的名字 */
    projectName?: string;
    /** project的published状态 */
    published?: boolean;
    /** 关联的cid */
    getcId?: string;
    /** topics */
    topics?: string[];
    /** 可自定义-app的图标 */
    avatarUrl?: string;
    createBy?: string;
    updateBy?: string;
    /** 文件大小 */
    fileSize?: number;
    createTime?: string;
    updateTime?: string;
    /** 程序入口 */
    podEntries?: PodEntry[];
    del?: boolean;
    /** 应用的名称 */
    name?: string;
    /** 应用的描述 */
    description?: string;
    /** 应用的类型 */
    subType?: string;
    /** app的打包方式 */
    packaging?: string;
    licenses?: License[];
    scm?: Scm;
    /** 应用的类型,RUNABLE类型/TASK类型 */
    type?: 'RUNABLE' | 'TOOLS';
    /** 决定应用的路径，可以为空，以Java为例，一个应用一般由groupId和artifactId组成 */
    bundle?: string[];
    /** 应用编译时继承版本信息 */
    version?: string;
    commit?: Commit;
    appPackage?: AppPackage;
    appPath?: string;
    appKey?: string;
    osrtAppKey?: string;
    osrtAppPath?: string;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
  };

  type AuthCallback = {
    code?: string;
    auth_code?: string;
    state?: string;
    authorization_code?: string;
    oauth_token?: string;
    oauth_verifier?: string;
  };

  type Bugs = {
    url?: string;
  };

  type Build = {
    plugins?: Plugin[];
    pluginManagement?: PluginManagement;
    defaultGoal?: string;
    resources?: Resource[];
    testResources?: Resource[];
    directory?: string;
    finalName?: string;
    filters?: string[];
    sourceDirectory?: string;
    scriptSourceDirectory?: string;
    testSourceDirectory?: string;
    outputDirectory?: string;
    testOutputDirectory?: string;
    extensions?: Extension[];
    pluginsAsMap?: Record<string, any>;
  };

  type BuildBase = {
    plugins?: Plugin[];
    pluginManagement?: PluginManagement;
    defaultGoal?: string;
    resources?: Resource[];
    testResources?: Resource[];
    directory?: string;
    finalName?: string;
    filters?: string[];
    pluginsAsMap?: Record<string, any>;
  };

  type changeSessionLanauageParams = {
    lang: string;
  };

  type checkDomainAliasExistParams = {
    alias: string;
  };

  type checkIdentityNameParams = {
    name: string;
  };

  type checkLinkAvailableParams = {
    link: string;
  };

  type checkOrganizePermissionParams = {
    orgId: number;
  };

  type checkProjectInfoByNameParams = {
    name: string;
    scopeId: number;
    type: string;
  };

  type checkProjectNameExistsParams = {
    name: string;
    ownerId: number;
    ownerType: 'USER' | 'ORGANIZATION';
  };

  type checkRepoPrivateParams = {
    url: string;
  };

  type checkUserAppDeployInfoParams = {
    bundleStr: string;
    version?: string;
    type: string;
    scopeId: number;
  };

  type checkUserDeployAccessParams = {
    scopeId: number;
    type: string;
  };

  type checkUserPagesDeployInfoParams = {
    bundleStr: string;
    version?: string;
    type: string;
    scopeId: number;
  };

  type checkUserTeamAccessParams = {
    id: number;
  };

  type CiManagement = {
    system?: string;
    url?: string;
    notifiers?: Notifier[];
  };

  type ClientLocation = {
    ip?: string;
    lat?: number;
    lng?: number;
    nation?: string;
    province?: string;
    city?: string;
    district?: string;
    adcode?: number;
  };

  type ClusterApiInfo = {
    id?: number;
    host?: string;
    user?: string;
    password?: string;
  };

  type ClusterConfig = {
    name?: string;
    version?: string;
    httpfsHost?: string;
    oozieHost?: string;
    spark2YarnHistoryServer?: string;
    httpfsPort?: number;
    hdfsAble?: boolean;
    hiveAble?: boolean;
    yarnAble?: boolean;
  };

  type CodeVerify = {
    email?: string;
    uuid?: string;
    code?: string;
  };

  type Commit = {
    /** 代码分支 */
    branch?: string;
    /** 代码当前的commit hash */
    commitId?: string;
  };

  type confirmAcceptInvitationJoinOrganizeMemberParams = {
    organizeId: number;
  };

  type confirmAcceptInvitationJoinProjectParams = {
    projectId: string;
  };

  type Container = {
    nodeId?: string;
    nodeHttpAddress?: string;
    priority?: number;
    allocationRequestId?: number;
    containerToken?: string;
    containerId?: string;
    executionType?: string;
  };

  type Contributor = {
    name?: string;
    email?: string;
    url?: string;
    organization?: string;
    organizationUrl?: string;
    roles?: string[];
    timezone?: string;
    properties?: Record<string, any>;
  };

  type CosVo = {
    presignedUrl?: string;
  };

  type Count = {
    count?: number;
  };

  type createProjectParams = {
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
  };

  type createSystemAnnounceParams = {
    content: string;
  };

  type createWikiParams = {
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
  };

  type delClusterParams = {
    clusterName: string;
  };

  type deleteDomainAliasParams = {
    id: number;
  };

  type deleteOrganizeParams = {
    id: number;
  };

  type deleteOrganizeTeamParams = {
    id: number;
  };

  type deletePagesProxyParams = {
    id: number;
  };

  type deleteProjectLicenseParams = {
    id: string;
  };

  type deleteProjectParams = {
    id: string;
    version?: string;
  };

  type delWikiParams = {
    id: string;
  };

  type Dependency = {
    groupId?: string;
    artifactId?: string;
    version?: string;
    type?: string;
    classifier?: string;
    scope?: string;
    systemPath?: string;
    exclusions?: Exclusion[];
    optional?: string;
    managementKey?: string;
  };

  type DependencyManagement = {
    dependencies?: Dependency[];
  };

  type DeploymentRepository = {
    id?: string;
    name?: string;
    url?: string;
    layout?: string;
    releases?: RepositoryPolicy;
    snapshots?: RepositoryPolicy;
    uniqueVersion?: boolean;
  };

  type Developer = {
    name?: string;
    email?: string;
    url?: string;
    organization?: string;
    organizationUrl?: string;
    roles?: string[];
    timezone?: string;
    properties?: Record<string, any>;
    id?: string;
  };

  type DistributionManagement = {
    repository?: DeploymentRepository;
    snapshotRepository?: DeploymentRepository;
    site?: Site;
    downloadUrl?: string;
    relocation?: Relocation;
    status?: string;
  };

  type Domain = {
    id?: number;
    sourceId?: string;
    type?: string;
    alias?: string;
  };

  type DomainDetail = {
    /** 创建者 */
    creator?: number;
    /** 最新修改者 */
    modifier?: number;
    /** 创建时间 */
    createTime?: string;
    /** 最新修改时间 */
    updateTime?: string;
    id?: number;
    /** domain的类型,runtime 1/pages 2/instance 3 */
    domainType?: number;
    /** domain:pages+'username'+md5key(bundle+version+name),instance-xxxxx */
    domain?: string;
    alias?: Alias;
    /** runtime/pages/instance的主键id */
    sourceId?: string;
    /** 当前的domain 是否enable,用于管理多个domain */
    enabled?: boolean;
    del?: boolean;
    /** false: domain为平台默认生成, true:domain为别名  */
    aliased?: boolean;
    /** 0:正常 ,1: 删除 */
    status?: number;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
    projectId?: string;
    version?: string;
    sourceName?: string;
  };

  type Domains = {
    /** 创建者 */
    creator?: number;
    /** 最新修改者 */
    modifier?: number;
    /** 创建时间 */
    createTime?: string;
    /** 最新修改时间 */
    updateTime?: string;
    id?: number;
    /** domain的类型,runtime 1/pages 2/instance 3 */
    domainType?: number;
    /** domain:pages+'username'+md5key(bundle+version+name),instance-xxxxx */
    domain?: string;
    alias?: Alias;
    /** runtime/pages/instance的主键id */
    sourceId?: string;
    /** 当前的domain 是否enable,用于管理多个domain */
    enabled?: boolean;
    del?: boolean;
    /** false: domain为平台默认生成, true:domain为别名  */
    aliased?: boolean;
    /** 0:正常 ,1: 删除 */
    status?: number;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
    projectId?: string;
    version?: string;
  };

  type DomainViews = {
    domain?: string;
    views?: number;
    domainType?: string;
  };

  type enableInvoiceParams = {
    invoicing?: number;
  };

  type EngineAppRet = {
    engineId?: string;
    applicationId?: string;
  };

  type EngineInfo = {
    id?: string;
    name?: string;
    host?: string;
    state?: string;
    finalState?: string;
    trackingUrl?: string;
    originalTrackingUrl?: string;
    submitBy?: string;
    queue?: string;
    rpcPort?: number;
    startTime?: number;
    launchTime?: number;
    finishTime?: number;
    applicationType?: string;
    userdResource?: Resources;
  };

  type EntryEndPoint = {
    endPoint?: string;
    url?: string;
    description?: string;
  };

  type EntryParameter = {
    entryId: number;
    quota?: Quota;
    productType?: number;
    userProductId?: number;
    parameters?: Record<string, any>;
    entryEndPoints?: EntryEndPoint[];
    environments?: Record<string, any>;
  };

  type Exclusion = {
    artifactId?: string;
    groupId?: string;
  };

  type Exist = {
    exist?: boolean;
  };

  type exportInvoiceParams = {
    id: number;
  };

  type Extension = {
    groupId?: string;
    artifactId?: string;
    version?: string;
  };

  type favorWikiParams = {
    id: string;
  };

  type FeedbackMessage = {
    id?: number;
    /** 反馈账户ID 非必须 */
    accountId?: number;
    /** 反馈用户名称 */
    username?: string;
    /** 反馈用户邮箱 */
    email?: string;
    /** 反馈用户电话 */
    phone?: string;
    /** 反馈内容 */
    content?: string;
    /** 反馈状态 0: 未处理 1: 已处理 */
    status?: number;
    /** 记录创建时间 */
    createTime?: string;
    /** 记录最新修改时间 */
    updateTime?: string;
  };

  type FollowInfo = {
    /** 粉丝数量 */
    followerCount?: number;
    /** 关注数量 */
    followingCount?: number;
    /** 当前是否关注 */
    followed?: boolean;
  };

  type followUserParams = {
    id: number;
    type: number;
  };

  type ForkIdentity = {
    /** user/org的主键id */
    id?: number;
    /** type: user,organization */
    type?: number;
    /** user/org的name */
    name?: string;
    /** user/org的头像 */
    avatarUrl?: string;
    projectForkDetail?: ProjectForkDetail;
  };

  type forkProjectParams = {
    id: string;
    version?: string;
    scopeId: number;
    type: number;
  };

  type ForkTasks = {
    /** id */
    id?: number;
    /** fork 操作的创建者 */
    createBy?: number;
    /** fork目标账号的ownerId */
    ownerId?: number;
    /** fork目标账号的ownerType */
    ownerType?: number;
    ownerName?: string;
    /** fork生成的projectId */
    projectId?: string;
    /** fork的projectId */
    forkProjectId?: string;
    /** origin的projectId */
    originProjectId?: string;
    /** 0: 进行中 1: 成功 2: 失败 */
    status?: number;
    createTime?: string;
    endTime?: string;
    subTasks?: SubTask[];
  };

  type generateBrowserHistoryByNameParams = {
    username: string;
    name?: string;
  };

  type generateBrowserHistoryParams = {
    id: string;
    type: string;
  };

  type generatePresignedUploadUrlParams = {
    path: string;
    contentType: string;
  };

  type getAllNotificationsParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getAppDetailParams = {
    id: string;
  };

  type getAppEntriesParams = {
    id: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getAppEntryEndPointsParams = {
    entryId: number;
  };

  type getAppEntryRunParameterListInfoParams = {
    entryId: number;
  };

  type getAppEntryRunParameterParams = {
    entryId: number;
  };

  type getAppEntryRunResourcesInfoParams = {
    entryId: number;
  };

  type getClusterParams = {
    clusterName: string;
  };

  type getDomainsParams = {
    type?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getEngineInfoParams = {
    id?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getFollowersParams = {
    username: string;
    followingType?: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getFollowingsParams = {
    username: string;
    followingType?: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getForkIdentitiesParams = {
    id: string;
    version?: string;
  };

  type getIdentityFollowInfoParams = {
    type: number;
    id: number;
  };

  type getIdentityInfoByProjectIdParams = {
    projectId: string;
  };

  type getLicenseTemplateParams = {
    license: string;
  };

  type getMessageCountParams = {
    notifyAction?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
  };

  type getMessagesInternalParams = {
    identity?: string;
    project?: string;
    app?: string;
    runtime?: string;
    page?: string;
    wiki?: string;
  };

  type getNotifyTemplateParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOrganizationDetailParams = {
    id: number;
  };

  type getOrganizationDynamicsParams = {
    id: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOrganizationPeopleParams = {
    username: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOrganizationsParams = {
    /** all, created, joined */
    tab: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOrganizationStatsParams = {
    organizationId: number;
  };

  type getOrganizationTeamsMembersParams = {
    id: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOsIdentityUsernameParams = {
    username: string;
  };

  type getOsProjectAppsParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOsProjectCisParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOsProjectInfoParams = {
    id: string;
    version?: string;
  };

  type getOsProjectPagesParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOsProjectRuntimesParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOsProjectVersionsParams = {
    id: string;
  };

  type getOsProjectWikisParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getOwnerRuntimesParams = {
    q?: string;
    projectId?: string;
    version?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getPageDetailParams = {
    id: string;
    shareId?: string;
    code?: string;
  };

  type getPageFilesParams = {
    id: string;
    path?: string;
  };

  type getPageProxiesParams = {
    id: string;
  };

  type getPersonalAppsCountParams = {
    q?: string;
    username?: string;
    repoId?: string;
    runtimeId?: string;
    cId?: string;
    wikiId?: string;
    appId?: string;
    filter?: 'ALL' | 'PUBLISH' | 'PRIVATE';
    auditStatus?: string;
    pageId?: string;
  };

  type getPersonalAppsParams = {
    q?: string;
    username?: string;
    projectId?: string;
    runtimeId?: string;
    cId?: string;
    wikiId?: string;
    appId?: string;
    pageId?: string;
    auditStatus?: string;
    filter?: 'ALL' | 'PUBLISH' | 'PRIVATE';
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getPersonalPagesParams = {
    q?: string;
    username?: string;
    repoId?: string;
    runtimeId?: string;
    cId?: string;
    wikiId?: string;
    appId?: string;
    pageId?: string;
    auditStatus?: string;
    filter?: 'ALL' | 'PUBLISH' | 'PRIVATE';
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getProjectAppsParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getProjectCensusParams = {
    id: string;
  };

  type getProjectCisParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getProjectDeployGuidanceParams = {
    title?: string;
  };

  type getProjectDomainsViewsParams = {
    id: string;
    version?: string;
  };

  type getProjectForkStatusParams = {
    id: number;
    projectId?: string;
  };

  type getProjectInfoParams = {
    id: string;
    version?: string;
  };

  type getProjectLicenseParams = {
    id: string;
  };

  type getProjectPagesParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getProjectRuntimesParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getProjectVersionsParams = {
    id: string;
  };

  type getProjectWikisParams = {
    id: string;
    version: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getRechargeRecordParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getRunResourcesUplimitParams = {
    id?: number;
  };

  type getRuntimeDetailParams = {
    id: string;
  };

  type getRuntimeEndPointsParams = {
    id: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getRuntimeInstanceDetailParams = {
    id: string;
  };

  type getRuntimeInstanceLogParams = {
    id: string;
    start?: number;
    end?: number;
  };

  type getRuntimeInstancesParams = {
    id: string;
    state?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getSearchWikisParams = {
    q?: string;
    username?: string;
    repoId?: string;
    runtimeId?: string;
    cId?: string;
    wikiId?: string;
    appId?: string;
    pageId?: string;
    auditStatus?: string;
    isAudit?: boolean;
    filter?: 'ALL' | 'PUBLISH' | 'PRIVATE';
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getSeoMetaInfoParams = {
    projectId?: string;
    wikiId?: string;
    identity?: string;
    topic?: string;
  };

  type getServiceAppPodParams = {
    version: string;
    commitId: string;
    type?: 'TASK' | 'SERVICE';
  };

  type getToolsVersionAppParams = {
    name: string;
  };

  type getUserBrowserHistoryParams = {
    type?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getUserDynamicsParams = {
    id: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getUserFavoritesParams = {
    type?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type getUserForkIdentitiesParams = {
    id: string;
    version?: string;
  };

  type getUserOrganizationAccessRoleParams = {
    name: string;
  };

  type getUserProjectInfoParams = {
    userStatisticsQuery: UserStatisticsQuery;
  };

  type getUserStatsParams = {
    username: string;
  };

  type getWikiCensusParams = {
    id: string;
  };

  type getWikiDetailParams = {
    id: string;
    shareId?: string;
    code?: string;
  };

  type Hard = {
    memory?: number;
    virtualCores?: number;
    nodes?: string[];
    racks?: string[];
    priority?: number;
    configMap?: Record<string, any>;
    node?: string;
  };

  type Identity = {
    /** 账户类型 0 用户，1 组织 */
    type?: number;
    /** 账户ID userId | organizationId */
    id?: number;
    /** 账户名称 */
    username?: string;
    /** 账户昵称 */
    nickname?: string;
    /** 邮箱 */
    email?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 手机号 */
    phone?: string;
    /** 公司 */
    company?: string;
    /** 地址 */
    location?: string;
    /** 简介 */
    bio?: string;
  };

  type identityUsernameParams = {
    username: string;
  };

  type installAppParams = {
    projectId: string;
    scopeId: number;
    type: string;
  };

  type installToolsParams = {
    name: string;
    version: string;
  };

  type IssueManagement = {
    system?: string;
    url?: string;
  };

  type joinOrganizeTeamParams = {
    id: number;
  };

  type License = {
    name?: string;
    url?: string;
    distribution?: string;
    comments?: string;
  };

  type Licenses = {
    /** project的license id */
    id?: number;
    shortKey?: string;
    name?: string;
    featured?: boolean;
    htmlUrl?: string;
    description?: string;
    implementation?: string;
    body: string;
    permissions?: string[];
    conditions?: string[];
    limitations?: string[];
    projectId: string;
    /** license的开源协议模板id,可能为null */
    templateId?: number;
  };

  type LicensesTemplate = {
    id?: number;
    shortKey?: string;
    name?: string;
    featured?: boolean;
    htmlUrl?: string;
    description?: string;
    implementation?: string;
    body?: string;
    permissions?: string[];
    conditions?: string[];
    limitations?: string[];
  };

  type LinkStatus = {
    /** link检查可用性状态 0:可用正常 1:部分可用 2:不可用异常 */
    status?: number;
    /** 状态异常时的异常信息 */
    error?: string;
  };

  type MailingList = {
    name?: string;
    subscribe?: string;
    unsubscribe?: string;
    post?: string;
    archive?: string;
    otherArchives?: string[];
  };

  type markNotificationsMessageStatusParams = {
    id: number;
    status: number;
  };

  type Menu = {
    /** 资源名 */
    name?: string;
    /** 资源名enName */
    enName?: string;
  };

  type mergeOpenAPIParams = {
    apiDocUrls: string[];
    resetTag: string;
  };

  type MessageCount = {
    notifyAction?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    count?: number;
  };

  type MsgTemplate = {
    id?: number;
    notifyAction?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    /** 站内模板 */
    content?: string;
    /** 通知提醒-邮件模板 */
    notifyEmailTemplate?: string;
    /** 创建者 */
    createBy?: number;
    /** 更新者 */
    updateBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    del?: boolean;
    enabled?: boolean;
  };

  type MsgTemplateInfo = {
    notifyAction?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    /** 站内模板 */
    content?: string;
    /** 通知提醒-邮件模板 */
    notifyEmailTemplate?: string;
  };

  type Notifier = {
    type?: string;
    sendOnError?: boolean;
    sendOnFailure?: boolean;
    sendOnSuccess?: boolean;
    sendOnWarning?: boolean;
    address?: string;
    configuration?: Record<string, any>;
  };

  type NotifyCount = {
    /** 全部 */
    total?: number;
  };

  type NotifyMessage = {
    id?: number;
    /** 消息的触发者ID, 0为系统触发 */
    sender?: number;
    /** 消息的接收者ID */
    receiver?: number;
    /** 通知内容 */
    content?: string;
    /** 通知关联变量tag {link: xxx} */
    tags?: Record<string, any>;
    /** 通知触发原因[assigned, mention, wiki_publish, project_publish] */
    reasons?: string[];
    /** 通知类型 */
    action?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    /** 状态 0: 未读 1: 已读 */
    status?: number;
    createTime?: string;
  };

  type NotifySettings = {
    id?: number;
    uid?: number;
    createBy?: string;
    createTime?: string;
    updateTime?: string;
    /** 通知类型 */
    notifyAction?: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    /** 邮件提醒 */
    emailEnable?: boolean;
    /** 短信提醒 */
    smsEnable?: boolean;
    /** 站内提醒 */
    siteEnable?: boolean;
    description?: string;
  };

  type Oauth2RegisterClient = {
    id?: string;
    clientId?: string;
    clientIdIssuedAt?: string;
    clientSecret?: string;
    clientSecretExpiresAt?: string;
    clientName?: string;
    redirectUris?: string[];
    scopes?: string[];
  };

  type oauthCallbackParams = {
    source: string;
    callback: AuthCallback;
  };

  type Organization = {
    name?: string;
    url?: string;
  };

  type organizeTeamProjectsParams = {
    id: number;
    teamId: number;
  };

  type organizeUsersParams = {
    id: number;
    search?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type OsrcerChatContent = {
    page?: PageOsrcerChatMessage;
    users?: Users[];
  };

  type OsrcerChatMessage = {
    /** id */
    id?: number;
    /** room信息json: {identity: 'osrc', project: 'xx', instance: 'xx'} */
    room?: string;
    /** room name, for recent chat */
    roomName?: string;
    /** room url link, for recent chat */
    roomUrl?: string;
    /** room 头像 url, for recent chat */
    roomAvatarUrl?: string;
    /** 消息内容 */
    content?: string;
    /** 发送者 */
    sender?: number;
    /** 接收人列表 */
    receivers?: number[];
    /** 创建时间 */
    createTime?: string;
  };

  type OsrcStats = {
    /** 账户名称 */
    name?: string;
    /** 主体下项目数量 */
    totalProject?: number;
    /** 主体下运行时数量 */
    totalRunTime?: number;
    /** 主体下项目已获取的总喜欢数 */
    totalStarEarned?: number;
    /** 主体下运行时被点击观看的总次数 */
    totalWatched?: number;
    /** 主体的follower数量 */
    totalFollower?: number;
    /** 主体的总体质量等级 A A+ A++ A+++ */
    rank?: string;
  };

  type OsrtApp = {
    /** app的id */
    id?: string;
    /** app的名字 */
    name?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 描述 */
    description?: string;
    /** 关联的projectId */
    projectId?: string;
    /** app的版本 */
    version?: string;
    /** 关联的cid */
    getcId?: string;
    /** topics关键词 */
    topics?: string[];
    /** owner */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** 来源url */
    originalSourceUrl?: string;
    /** 正在运行的实例数量 */
    runningInstances?: number;
    /** app程序入口数量 */
    entries?: number;
    ownerName?: string;
    ownerType?: number;
  };

  type OsrtAppDetail = {
    /** app的id */
    id?: string;
    /** app的名字 */
    name?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 描述 */
    description?: string;
    /** 关联的projectId */
    projectId?: string;
    /** app的版本 */
    version?: string;
    /** 关联的cid */
    getcId?: string;
    /** topics关键词 */
    topics?: string[];
    /** owner */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** 来源url */
    originalSourceUrl?: string;
    /** 正在运行的实例数量 */
    runningInstances?: number;
    /** app程序入口数量 */
    entries?: number;
    ownerName?: string;
    ownerType?: number;
    appEntries?: OsrtAppEntry[];
  };

  type OsrtAppEntry = {
    /** app pod的id */
    id?: number;
    /** 入口的全类名 */
    entryName?: string;
    /** service/task */
    type?: 'TASK' | 'SERVICE';
    /** 根据特定规则生成的该app入口对应的runtime的domianUrl,如果runtime未运行,则不能访问 */
    domainUrl?: string;
    entryEndPoints?: EntryEndPoint[];
    runInfo?: RunInfo;
    /** 正在运行的实例数量 */
    runningInstances?: number;
    /** 所有的实例数量 */
    allInstances?: number;
  };

  type OsrtCi = {
    id?: string;
    name: string;
    topics?: string[];
    description?: string;
    avatarUrl?: string;
    stars?: number;
    repoId?: string;
    /** 系统模板-system,个人-username */
    createBy?: string;
    filter?: 'ALL' | 'PUBLISH' | 'PRIVATE';
    createTime?: string;
    updateTime?: string;
    viewRange?: 'ALL' | 'PUBLISH' | 'PRIVATE';
  };

  type OsrtContributor = {
    email?: string;
    avatarUrl?: string;
    username?: string;
    contributions?: number;
  };

  type OsrtDynamic = {
    /** id */
    id?: number;
    /** project_id */
    projectId?: string;
    /** create_by */
    createBy?: number;
    createByName?: string;
    /** 操作名称 */
    operationName?: string;
    operateActionCode?: number;
    operationActionEn?: string;
    operationAction?: string;
    sourceType?: 'APP' | 'CI' | 'RUNTIME' | 'WIKI' | 'PAGE' | 'PROJECT';
    sourceId?: string;
    /** 操作版本 */
    operationVersion?: string;
    /** create_time */
    createTime?: string;
    projects?: OsrtProjects;
    user?: User;
  };

  type OsrtFileBrowser = {
    /** 当前目录下的文件 */
    fileStatuses?: OsrtFileStatus[];
    /** 当前目录文件大小 */
    totalLength?: number;
    /** 文件数量 */
    fileCount?: number;
    /** 目录数量 */
    directoryCount?: number;
  };

  type OsrtFileStatus = {
    /** 文件大小,bytes */
    length?: number;
    /** 是否是目录 */
    isdir?: boolean;
    /** 更新时间 */
    modificationTime?: string;
    /** 文件的owner */
    owner?: string;
    /** 文件的名字 */
    fileName?: string;
  };

  type OsrtInstance = {
    id?: string;
    runtimeId?: string;
    getcId?: string;
    appId?: string;
    projectId?: string;
    version?: string;
    createBy?: string;
    type?: string;
    runInfo?: RunInfo;
    portUpdated?: boolean;
  };

  type OsrtInstanceDetail = {
    id?: string;
    runtimeId?: string;
    getcId?: string;
    appId?: string;
    projectId?: string;
    version?: string;
    createBy?: string;
    type?: string;
    runInfo?: RunInfo;
    portUpdated?: boolean;
    runtimeName?: string;
    appName?: string;
    domainUrl?: string;
    port?: number;
  };

  type OsrtOrganization = {
    /** id */
    id: number;
    /** 机构/部门名称 */
    name: string;
    avatarUrl?: string;
    email?: string;
    topics?: string[];
    /** 展示的名称 */
    displayName?: string;
    /** 缩写 */
    nameAbbr?: string;
    /** 描述 */
    bio: string;
    /** 机构类别 1公司，2个人 */
    orgCategory: string;
    /** 机构编码 */
    orgCode?: string;
    /** 手机号 */
    mobile?: string;
    /** 传真 */
    fax?: string;
    /** 行政区划 */
    administrativeDivisions?: string;
    /** 地址 */
    location?: string;
    /** 备注 */
    memo?: string;
    /** 成员 */
    users?: User[];
    membersCount?: number;
    type?: number;
    status?: number;
  };

  type OsrtOrganizationMember = {
    orgId?: number;
    orgName?: string;
    accessRole?: 'OWNER' | 'ADMIN' | 'MEMBER' | 'WRITE' | 'READ';
  };

  type OsrtOrganizeMemberInvitation = {
    /** organize_id 组织ID */
    organizeId?: number;
    /** invitee 受邀者ID */
    invitee?: number;
    /** 组织内成员的role: 0-owner,1-admin,2-member */
    accessRole?: number;
  };

  type OsrtOrganizeTeam = {
    /** id */
    id: number;
    /** 组织id */
    organizeId: number;
    /** 名称 */
    name: string;
  };

  type OsrtOrganizeTeamInvitation = {
    /** id */
    id?: number;
    /** organize_id */
    organizeId?: number;
    /** organize_team_id */
    organizeTeamId?: number;
    /** invitees */
    invitees?: string;
  };

  type OsrtPage = {
    /** pages的id */
    id?: string;
    name?: string;
    avatarUrl?: string;
    description?: string;
    projectId?: string;
    getcId?: string;
    topics?: string[];
    createBy?: string;
    createTime?: string;
    version?: string;
    fileSize?: number;
    /** 资源的原始来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    originalSourceUrl?: string;
    proxies?: number;
    files?: number;
    domainUrl?: string;
    aliasUrl?: string;
    domainAlias?: string;
    ownerName?: string;
    ownerType?: number;
  };

  type OsrtPageDetail = {
    /** pages的id */
    id?: string;
    name?: string;
    avatarUrl?: string;
    description?: string;
    projectId?: string;
    getcId?: string;
    topics?: string[];
    createBy?: string;
    createTime?: string;
    version?: string;
    fileSize?: number;
    /** 资源的原始来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    originalSourceUrl?: string;
    proxies?: number;
    files?: number;
    domainUrl?: string;
    aliasUrl?: string;
    domainAlias?: string;
    ownerName?: string;
    ownerType?: number;
  };

  type OsrtPageProxy = {
    id?: number;
    /** 代理目标类型:RUNTIME/URL */
    targetType?: 'URL' | 'RUNTIME';
    /** runtime的id */
    runtimeId?: string;
    /** runtime的name */
    runtimeName?: string;
    /** 代理的目标url,targetType=URL时为自定义输入的url 'https://www.maplecloudy.com',targetType为RUNTIME时为runtime的domainUrl */
    targetUrl?: string;
    /** proxy的具体配置: 主要为predicates和filters */
    yaml?: string;
  };

  type OsrtProjectBundleInfo = {
    projectId?: string;
    /** project的所属者的name */
    ownerName?: string;
    /** project的英文名字 */
    name?: string;
    displayName?: string;
    /** project是否存在的标识 */
    exist?: boolean;
  };

  type OsrtProjectCensus = {
    /** 评级 1、2、3、4、5 */
    grade?: number;
    /** 1、评分2、点赞 3、观察4、fork */
    type?: number;
    /** 备注 */
    remarks?: string;
  };

  type OsrtProjectPanelData = {
    ci?: number;
    app?: number;
    rt?: number;
    pages?: number;
    wiki?: number;
  };

  type OsrtProjects = {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 项目的展示名称 */
    displayName?: string;
    /** 主题[ flink ， kafka ] */
    topics?: string[];
    avatarUrl?: string;
    cover?: string;
    /** 代码占比{ java :657244} */
    codeLanguages?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 贡献者[{ avatarurl : h12?v=4 ， username : zhisheng17 ， contributions :325}] */
    contributors?: OsrtContributor[];
    /** 所属者 */
    ownerId?: number;
    ownerType?: number;
    ownerName?: string;
    /** git地址 */
    originalSourceUrl?: string;
    /** 来源 github gitee */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** 项目创建者 */
    createBy?: string;
    /** 项目创建者昵称 */
    nickname?: string;
    /** 开源协议 */
    license?: number;
    licenseKey?: string;
    licenses?: Licenses;
    /** fork */
    forkCounts?: number;
    /** 点赞 */
    voteCounts?: number;
    /** 收藏 */
    favorCounts?: number;
    /** 聊天数 */
    chatNum?: number;
    score?: ProjectScore;
    createTime?: string;
    updateTime?: string;
    published?: boolean;
    del?: boolean;
    version?: string;
    /** 是否为forked的project */
    original?: boolean;
    forkProjectId?: string;
    forkProjectName?: string;
    forkOwnerName?: string;
    type?: number;
    views?: number;
  };

  type OsrtProjectVersion = {
    /** id */
    id?: number;
    /** 项目id[ project_id ] */
    projectId?: string;
    /** app访问链接[{ url : xyz ， appname : }] */
    link?: ProjectLink[];
    /** 项目预览[ oss_url ] */
    previewPicture?: string[];
    /** 版本号 */
    version?: string;
    /** 版本说明 */
    versionNotes?: string;
    /** version的说明外链url */
    versionUrl?: string;
    /** readme */
    readme?: string;
    wikiId?: string;
    updateTime?: string;
    published?: boolean;
  };

  type OsrtRuntime = {
    id?: string;
    getcId?: string;
    projectId?: string;
    version?: string;
    appId?: string;
    /** runtime的name */
    name?: string;
    createBy?: string;
    createTime?: string;
    /** 来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** 来源url */
    originalSourceUrl?: string;
    /** app的名字 */
    appName?: string;
    /** 头像 */
    avatarUrl?: string;
    runInfo?: RunInfo;
    /** 正在运行的实例数量 */
    runningInstances?: number;
    /** 所有的实例数量 */
    allInstances?: number;
    ownerName?: string;
    ownerType?: number;
  };

  type OsrtRuntimeDetail = {
    id?: string;
    getcId?: string;
    projectId?: string;
    version?: string;
    appId?: string;
    /** runtime的name */
    name?: string;
    createBy?: string;
    createTime?: string;
    /** 来源 */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** 来源url */
    originalSourceUrl?: string;
    /** app的名字 */
    appName?: string;
    /** 头像 */
    avatarUrl?: string;
    runInfo?: RunInfo;
    /** 正在运行的实例数量 */
    runningInstances?: number;
    /** 所有的实例数量 */
    allInstances?: number;
    ownerName?: string;
    ownerType?: number;
    domainUrl?: string;
    aliasUrl?: string;
    domainAlias?: string;
    entryId?: number;
    endPointNum?: number;
  };

  type OsrtUserBalanceLog = {
    id?: number;
    /** user_name */
    userName?: string;
    /** 支付类型1、支付宝2、微信 */
    type?: string;
    /** 三方订单号 */
    outTradeNo?: string;
    /** 金额 */
    value?: number;
    /** 创建时间 */
    createTime?: string;
    /** 是否开票 0未1开 */
    invoicing?: number;
  };

  type OsrtUserInvoice = {
    /** id */
    id?: number;
    /** 发票类型 1电子普通发票2纸质普通发票3纸质增值税专用发票 */
    invoiceType?: number;
    /** 发票抬头 1个人 2企业 */
    invoiceHeaderType?: number;
    /** 发票抬头 */
    invoiceHeader?: string;
    /** 纳税人识别号 */
    tin?: string;
    /** 发票金额 */
    invoiceAmount?: number;
    /** 收票邮箱 */
    email?: string;
    /** 充值记录id */
    userBalanceLogIds?: number[];
    /** 0未1开 */
    state?: number;
    /** 电子发票url */
    geteInvoice?: string;
    /** 用户名称 */
    userName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type OsrtUserTeam = {
    /** team的id */
    teamId?: number;
    /** team的名称 */
    teamName?: string;
  };

  type OsrtWiki = {
    /** wiki的id */
    id?: string;
    projectId?: string;
    version?: string;
    /** wiki的编码方式 */
    wikiCoding?: string;
    /** wiki的title */
    title?: string;
    /** wiki的创建者 */
    createBy?: string;
    /** wiki的更新者 */
    updateBy?: string;
    /** wiki的topics */
    topics?: string[];
    createTime?: string;
    updateTime?: string;
    auditStatus?: string;
    /** 关联的pj/app/rt */
    relations?: Relation[];
    /** 评论数量 */
    comments?: number;
    /** 收藏数量 */
    favorites?: number;
    /** 阅读量 */
    pv?: number;
    /** 点赞数量 */
    votes?: number;
    ownerName?: string;
    ownerType?: number;
    ownerId?: number;
    published?: boolean;
    type?: number;
    del?: boolean;
  };

  type OsrtWikiDetail = {
    /** wiki的id */
    id?: string;
    projectId?: string;
    version?: string;
    /** wiki的编码方式 */
    wikiCoding?: string;
    /** wiki的title */
    title?: string;
    /** wiki的创建者 */
    createBy?: string;
    /** wiki的更新者 */
    updateBy?: string;
    /** wiki的topics */
    topics?: string[];
    createTime?: string;
    updateTime?: string;
    auditStatus?: string;
    /** 关联的pj/app/rt */
    relations?: Relation[];
    /** 评论数量 */
    comments?: number;
    /** 收藏数量 */
    favorites?: number;
    /** 阅读量 */
    pv?: number;
    /** 点赞数量 */
    votes?: number;
    ownerName?: string;
    ownerType?: number;
    ownerId?: number;
    published?: boolean;
    type?: number;
    del?: boolean;
    content?: string;
    favored?: boolean;
    voted?: boolean;
  };

  type Pageable = {
    paged?: boolean;
    pageSize?: number;
    pageNumber?: number;
    sort?: Sort;
    unpaged?: boolean;
    offset?: number;
  };

  type PageDomainDetail = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: DomainDetail[];
    number?: number;
    empty?: boolean;
  };

  type PageEngineInfo = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: EngineInfo[];
    number?: number;
    empty?: boolean;
  };

  type PageEntryEndPoint = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: EntryEndPoint[];
    number?: number;
    empty?: boolean;
  };

  type PageInfo = {
    bundle?: string[];
    /** 对应bundle的信息 */
    name?: string;
    /** 来自自述文件的信息或空字符串 */
    description?: string;
    /** 默认永远1.0.0 */
    version?: string;
    main?: string;
    topics?: string[];
    author?: string;
    /** ISC */
    license?: string;
    scripts?: Scripts;
    bugs?: Bugs;
    repository?: Repository;
    /** 项目(github)主页 */
    homePage?: string;
  };

  type PageInstall = {
    pageId?: string;
    pageUrl?: string;
  };

  type PageMsgTemplate = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: MsgTemplate[];
    number?: number;
    empty?: boolean;
  };

  type PageNotifyMessage = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: NotifyMessage[];
    number?: number;
    empty?: boolean;
  };

  type PageObject = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Record<string, any>[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrcerChatMessage = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrcerChatMessage[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtApp = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtApp[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtAppEntry = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtAppEntry[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtCi = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtCi[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtDynamic = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtDynamic[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtInstance = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtInstance[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtOrganization = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtOrganization[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtPage = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtPage[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtProjects = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtProjects[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtRuntime = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtRuntime[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtUserBalanceLog = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtUserBalanceLog[];
    number?: number;
    empty?: boolean;
  };

  type PageOsrtWiki = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: OsrtWiki[];
    number?: number;
    empty?: boolean;
  };

  type PageRelation = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: Relation[];
    number?: number;
    empty?: boolean;
  };

  type Pages = {
    id?: string;
    projectId?: string;
    /** project的名字 */
    projectName?: string;
    /** project的published状态 */
    published?: boolean;
    /** 关联的actionId */
    getcId?: string;
    /** 可自定义-app的图标 */
    avatarUrl?: string;
    createBy?: string;
    updateBy?: string;
    createTime?: string;
    updateTime?: string;
    del?: boolean;
    fileSize?: number;
    domainUrl?: string;
    pageKey?: string;
    pagePath?: string;
    /** 决定应用的路径 */
    bundle?: string[];
    /** name */
    name?: string;
    /** 描述 */
    description?: string;
    /** 版本 */
    version?: string;
    /** package.json中指定的main */
    main?: string;
    /** 关键词 */
    topics?: string[];
    /** 该pages的build文件数量 */
    files?: number;
    /** 代理配置数量 */
    proxies?: number;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
  };

  type PageTopicInfo = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: TopicInfo[];
    number?: number;
    empty?: boolean;
  };

  type pageTopicInfosParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type pageTopicRelateProjectsParams = {
    topicName: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type PageUser = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: User[];
    number?: number;
    empty?: boolean;
  };

  type PageUserBilling = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: UserBilling[];
    number?: number;
    empty?: boolean;
  };

  type PageUserProduct = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: UserProduct[];
    number?: number;
    empty?: boolean;
  };

  type pageUserPurchaseProductParams = {
    state?: boolean;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type PageUserRecharge = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    pageable?: Pageable;
    sort?: Sort;
    numberOfElements?: number;
    last?: boolean;
    size?: number;
    content?: UserRecharge[];
    number?: number;
    empty?: boolean;
  };

  type Parent = {
    groupId?: string;
    artifactId?: string;
    version?: string;
    relativePath?: string;
    id?: string;
  };

  type PasswordChange = {
    email?: string;
    phone?: string;
    verificationCode?: string;
    password?: string;
    confirmPassword?: string;
  };

  type PersonalAccessToken = {
    tokenName: string;
    accessToken: string;
    scope?: string[];
    expiredTime?: string;
    createTime?: string;
  };

  type Plugin = {
    inherited?: string;
    configuration?: Record<string, any>;
    inheritanceApplied?: boolean;
    groupId?: string;
    artifactId?: string;
    version?: string;
    extensions?: string;
    executions?: PluginExecution[];
    dependencies?: Dependency[];
    goals?: Record<string, any>;
    key?: string;
    executionsAsMap?: Record<string, any>;
    id?: string;
  };

  type PluginExecution = {
    inherited?: string;
    configuration?: Record<string, any>;
    inheritanceApplied?: boolean;
    id?: string;
    phase?: string;
    priority?: number;
    goals?: string[];
  };

  type PluginManagement = {
    plugins?: Plugin[];
    pluginsAsMap?: Record<string, any>;
  };

  type PodEntry = {
    cmd?: string;
    appPodType?: 'TASK' | 'SERVICE';
    entry?: string;
  };

  type Port = {
    name?: string;
    port?: number;
    updated?: boolean;
    portType?: 'RUN';
  };

  type Prerequisites = {
    maven?: string;
  };

  type ProductDiscount = {
    id?: number;
    purchaseDuration?: string;
    discount?: string;
    productSpecsId?: number;
    cycleTime?: number;
    price?: number;
  };

  type productDiscountParams = {
    productSpecsId: number;
  };

  type ProductSpecs = {
    id?: number;
    productId?: number;
    productSpecs?: string;
    cpu?: number;
    ram?: number;
    sort?: number;
    createTime?: string;
    updateTime?: string;
  };

  type Profile = {
    modules?: string[];
    distributionManagement?: DistributionManagement;
    properties?: Record<string, any>;
    dependencyManagement?: DependencyManagement;
    dependencies?: Dependency[];
    repositories?: Repository[];
    pluginRepositories?: Repository[];
    reports?: Record<string, any>;
    reporting?: Reporting;
    id?: string;
    activation?: Activation;
    build?: BuildBase;
    source?: string;
  };

  type projectBindTopicParams = {
    projectId: string;
    topicId: number;
  };

  type projectCensusParams = {
    id: string;
    type: number;
    grade?: number;
    remarks?: string;
  };

  type ProjectCollaboratorInvitation = {
    /** project ID */
    projectId?: string;
    /** invitee 受邀者ID */
    invitee?: number;
    /** 操作角色: 0-owner,1-admin,2-write,3-read */
    accessRole?: number;
  };

  type ProjectFork = {
    /** forked 的projectId */
    forkProjectId?: string;
    /** origin 的projectId */
    originProjectId?: string;
    /** fork的project的version */
    versions?: string[];
  };

  type ProjectForkDetail = {
    /** forked 的projectId */
    forkProjectId?: string;
    /** origin 的projectId */
    originProjectId?: string;
    /** fork的project的version */
    versions?: string[];
    forked?: boolean;
    forkProjectName?: string;
    original?: boolean;
    originProjectName?: string;
  };

  type ProjectGuidance = {
    title?: string;
    content?: string;
  };

  type ProjectInfo = {
    projects?: OsrtProjects;
    projectVersion?: OsrtProjectVersion;
  };

  type ProjectLink = {
    url?: string;
    introduce?: string;
    type?: 'RUNTIME' | 'PAGE' | 'CUSTOM';
  };

  type projectPanelDataParams = {
    id: string;
    version: string;
  };

  type Projects = {
    /** id */
    id?: string;
    /** 名称-英文 */
    name?: string;
    /** 项目的展示名称 */
    displayName?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 代码占比{ java :657244} */
    codeLanguages?: Record<string, any>;
    /** 描述 */
    description?: string;
    /** 贡献者[{ avatarurl : h12?v=4 ， username : zhisheng17 ， contributions :325}] */
    contributors?: OsrtContributor[];
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
    /** 主题[ flink ， kafka ] */
    topics?: string[];
    /** 来源 github gitee */
    originalSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    /** git地址 */
    originalSourceUrl?: string;
    repoPrivate?: boolean;
    /** 是否发布 */
    published?: boolean;
    /** 项目创建时间 */
    createTime?: string;
    /** 项目更新时间 */
    updateTime?: string;
    /** git创建时间 */
    createAt?: string;
    /** git更新时间 */
    updateAt?: string;
    /** 项目创建者 */
    createBy?: string;
    /** 项目更新者 */
    updateBy?: string;
    /** 逻辑删除 */
    del?: boolean;
    /** 开源协议 */
    license?: number;
    licenseKey?: string;
    /** fork */
    forkCounts?: number;
    /** 点赞 */
    voteCounts?: number;
    /** 收藏 */
    favorCounts?: number;
    /** 聊天数 */
    chatNum?: number;
    score?: ProjectScore;
    cover?: string;
    /** 标识是否为fork的project,true: 否,false: 是fork的project,此时会有ProjectFork信息 */
    original?: boolean;
    projectFork?: ProjectFork;
    /** 标识是否从originalSource同步过信息 */
    synced?: boolean;
    /** 0: 未同步 1: 成功 2: 同步中 3:失败 */
    syncStatus?: number;
  };

  type ProjectScore = {
    score?: string;
    numOfRaters?: string;
    details?: ProjectScoreDetails[];
  };

  type ProjectScoreDetails = {
    grade?: number;
    num?: number;
  };

  type projectUnCensusParams = {
    id: string;
    type: number;
  };

  type ProjectVersion = {
    /** 创建者 */
    creator?: number;
    /** 最新修改者 */
    modifier?: number;
    /** 创建时间 */
    createTime?: string;
    /** 最新修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 项目id[ project_id ] */
    projectId?: string;
    /** 所属者 */
    ownerId?: number;
    ownerType?: number;
    /** app访问链接[{ url : xyz ， appname : }] */
    link?: ProjectLink[];
    /** 项目预览[ oss_url ] */
    previewPicture?: string[];
    /** 版本号 */
    version?: string;
    /** 版本说明 */
    versionNotes?: string;
    /** version的说明外链url */
    versionUrl?: string;
    wikiId?: string;
    /** 0: 正常,1 :删除  */
    status?: number;
    published?: boolean;
  };

  type ProxyInfo = {
    id: number;
    /** 代理目标类型:RUNTIME/URL */
    targetType?: 'URL' | 'RUNTIME';
    /** runtime的id,当targetType为URL时为null */
    runtimeId?: string;
    /** 代理的目标url,targetType=URL时为自定义输入的url 'https://www.maplecloudy.com',targetType为RUNTIME时为runtime的domainUrl */
    targetUrl?: string;
    /** proxy的具体配置: 主要为predicates[-Host,-Path...]和filters[-RewritePath...] */
    yaml: string;
  };

  type purchaseProductParams = {
    productSpecsId: number;
    numOfInstances: number;
    productDiscountId: number;
  };

  type queryCollaboratorFromProjectParams = {
    projectId: string;
    search?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type queryInvitationFromOrganizeParams = {
    id: number;
  };

  type queryInvitationFromProjectParams = {
    projectId: string;
  };

  type queryTopicInfoParams = {
    topicName: string;
  };

  type Quota = {
    memory?: number;
    virtualCores?: number;
  };

  type readNotificationsParams = {
    id: number;
  };

  type refreshTokenParams = {
    refreshToken: string;
  };

  type Relation = {
    name?: string;
    version?: string;
    sourceType?: 'APP' | 'CI' | 'RUNTIME' | 'WIKI' | 'PAGE' | 'PROJECT';
    sourceId?: string;
    /** identity: username */
    sourceOwnerName?: string;
    sourceProjectId?: string;
    /** 关联的资源的状态: 0-正常,1-删除 */
    status?: number;
  };

  type Relocation = {
    groupId?: string;
    artifactId?: string;
    version?: string;
    message?: string;
  };

  type removeCollaboratorFromProjectParams = {
    userId: number;
    projectId: string;
  };

  type removeMemberFromOrganizeParams = {
    userId: number;
    organizeId: number;
  };

  type RenderAuth = {
    jumpUrl?: string;
  };

  type renderAuthParams = {
    source: string;
    type?: string;
    Authorization?: string;
  };

  type RepoCheck = {
    repoSource?: 'Gitlab' | 'Github' | 'Gitee' | 'Bitbucket' | 'Other';
    repoPrivate?: boolean;
  };

  type RepoInfo = {
    projectId?: string;
    version?: string;
    url: string;
    repoPrivate?: boolean;
    username?: string;
    token?: string;
  };

  type Reporting = {
    excludeDefaults?: string;
    outputDirectory?: string;
    plugins?: ReportPlugin[];
    reportPluginsAsMap?: Record<string, any>;
  };

  type ReportPlugin = {
    inherited?: string;
    configuration?: Record<string, any>;
    inheritanceApplied?: boolean;
    groupId?: string;
    artifactId?: string;
    version?: string;
    reportSets?: ReportSet[];
    reportSetsAsMap?: Record<string, any>;
    key?: string;
  };

  type ReportSet = {
    inherited?: string;
    configuration?: Record<string, any>;
    inheritanceApplied?: boolean;
    id?: string;
    reports?: string[];
  };

  type Repository = {
    /** 代码仓库的SCM地址 */
    url?: string;
    /** 来源网站 */
    type?: string;
  };

  type RepositoryPolicy = {
    enabled?: string;
    updatePolicy?: string;
    checksumPolicy?: string;
  };

  type Resource = {
    includes?: string[];
    excludes?: string[];
    directory?: string;
    targetPath?: string;
    filtering?: string;
    mergeId?: string;
  };

  type Resources = {
    memory?: number;
    virtualCores?: number;
    nodes?: string[];
    racks?: string[];
    priority?: number;
    configMap?: Record<string, any>;
  };

  type ResourceUplimit = {
    maxMemory?: number;
    maxVirtualCores?: number;
  };

  type Result = {
    code?: number;
    msg?: string;
    data?: Record<string, any>;
  };

  type ResultInteger = {
    code?: number;
    msg?: string;
    data?: number;
  };

  type ResultLinkStatus = {
    code?: number;
    msg?: string;
    data?: LinkStatus;
  };

  type ResultListPersonalAccessToken = {
    code?: number;
    msg?: string;
    data?: PersonalAccessToken[];
  };

  type ResultListProductDiscount = {
    code?: number;
    msg?: string;
    data?: ProductDiscount[];
  };

  type ResultListProductSpecs = {
    code?: number;
    msg?: string;
    data?: ProductSpecs[];
  };

  type ResultListScopeDefine = {
    code?: number;
    msg?: string;
    data?: ScopeDefine[];
  };

  type ResultOauth2RegisterClient = {
    code?: number;
    msg?: string;
    data?: Oauth2RegisterClient;
  };

  type ResultPersonalAccessToken = {
    code?: number;
    msg?: string;
    data?: PersonalAccessToken;
  };

  type ResultVoid = {
    code?: number;
    msg?: string;
    data?: Record<string, any>;
  };

  type revokeTokenParams = {
    tokenName: string;
  };

  type runAppWithEntryParams = {
    appId?: string;
    entryId: number;
  };

  type runAppWithEntryRemindParams = {
    appId?: string;
    entryId: number;
  };

  type RunInfo = {
    /** runtimeId/instanceId */
    id?: string;
    /** 运行的状态 */
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    /** 开始运行时间 */
    startTime?: string;
    /** 结束运行时间 */
    endTime?: string;
    quota?: Quota;
    /** 保留: */
    extraSource?: string[];
    /** 保留:启动时的参数 */
    parameter?: Record<string, any>;
    /** 保留: */
    env?: Record<string, any>;
  };

  type RunParameter = {
    entryId: number;
    quota?: Quota;
    appName?: string;
    entryName?: string;
    /** 当前运行方式:固定配置/serverless */
    type?: string;
    productId?: number;
    parameters?: Record<string, any>;
    environments?: Record<string, any>;
    entryEndPoints?: EntryEndPoint[];
  };

  type RuntimeInstances = {
    /** 创建者 */
    creator?: number;
    /** 最新修改者 */
    modifier?: number;
    /** 创建时间 */
    createTime?: string;
    /** 最新修改时间 */
    updateTime?: string;
    /** instanceId */
    id?: string;
    /** 当前的intance运行在哪个engine上 */
    engineId?: string;
    runtimeId?: string;
    appId?: string;
    getcId?: string;
    projectId?: string;
    version?: string;
    instanceOrderId?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    /** Hard */
    hard?: string;
    /** parameter,存json */
    parameter?: string;
    /** env,存json */
    env?: string;
    extraSource?: string;
    startTime?: string;
    endTime?: string;
    del?: boolean;
    /** instance启动的端口号 */
    port?: number;
    ports?: Port[];
    container?: Container;
    portUpdated?: boolean;
    /** 内部实际运行的uri地址 */
    internalUri?: string;
    /** 产品id */
    productId?: number;
    /** 产品类型 1固定 2server less */
    productType?: number;
    accessTimes?: number;
    lastAccessTime?: string;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
  };

  type Runtimes = {
    id?: string;
    appPodId?: number;
    avatarUrl?: string;
    projectId?: string;
    /** project的published状态 */
    published?: boolean;
    version?: string;
    getcId?: string;
    appId?: string;
    /** 默认为程序入口的名字 */
    name?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    startTime?: string;
    endTime?: string;
    /** Hard */
    hard?: string;
    createBy?: string;
    updateBy?: string;
    /** 请求提交时间 */
    createTime?: string;
    updateTime?: string;
    del?: boolean;
    runningInstances?: number;
    allInstances?: number;
    /** 所属者 */
    ownerId?: number;
    ownerName?: string;
    /** 0-个人,1-organization */
    ownerType?: number;
  };

  type saveNotifyFileTemplateParams = {
    notifyAction: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
  };

  type ScanCode = {
    qrCode?: string;
    outTradeNo?: string;
  };

  type Scm = {
    connection?: string;
    developerConnection?: string;
    tag?: string;
    url?: string;
    childInheritAppendPath?: string;
  };

  type ScopeDefine = {
    scope?: string;
    note?: string;
  };

  type Scripts = {
    test?: string;
  };

  type searchAppsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
  };

  type searchAppsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOrganizationsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
  };

  type searchOrganizationsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsAppsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    filter?: string;
  };

  type searchOsAppsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsOrganizationsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    filter?: string;
  };

  type searchOsOrganizationsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsPagesCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    pageId?: string;
    filter?: string;
  };

  type searchOsPagesParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    pageId?: string;
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsProjectsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    select?: string;
    filter?: string;
  };

  type searchOsProjectsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    select?: string;
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsRuntimesCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    runtimeId?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    filter?: string;
  };

  type searchOsRuntimesParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    runtimeId?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsUsersCountParams = {
    q?: string;
  };

  type searchOsUsersParams = {
    q?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchOsWikisCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    cid?: string;
    appId?: string;
    runtimeId?: string;
    pageId?: string;
    wikiId?: string;
    auditStatus?: string;
    filter?: string;
  };

  type searchOsWikisParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    cid?: string;
    appId?: string;
    runtimeId?: string;
    pageId?: string;
    wikiId?: string;
    auditStatus?: string;
    filter?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchPagesCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    pageId?: string;
  };

  type searchPagesParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    pageId?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchProjectsCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
  };

  type searchProjectsDashboardParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchProjectsParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchProjectsPolularParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchRuntimesCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    runtimeId?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
  };

  type searchRuntimesParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    appId?: string;
    runtimeId?: string;
    state?:
      | 'NEW'
      | 'SUBMITTED'
      | 'SCHEDULED'
      | 'ALLOCATED_SAVING'
      | 'ALLOCATED'
      | 'LAUNCHED'
      | 'FAILED'
      | 'RUNNING'
      | 'FINISHING'
      | 'FINISHED'
      | 'KILLED'
      | 'STOP'
      | 'STOPPING';
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchUserResourcesParams = {
    username: string;
    q?: string;
    type?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchUsersCountParams = {
    q?: string;
  };

  type searchUsersParams = {
    q?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchWikiRelationsParams = {
    q: string;
    ownerId: number;
    ownerType: 'USER' | 'ORGANIZATION';
    type: 'APP' | 'CI' | 'RUNTIME' | 'WIKI' | 'PAGE' | 'PROJECT';
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type searchWikisCountParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    cid?: string;
    appId?: string;
    runtimeId?: string;
    pageId?: string;
    wikiId?: string;
    auditStatus?: string;
  };

  type searchWikisParams = {
    q?: string;
    ownerName?: string;
    ownerId?: number;
    ownerType?: 'USER' | 'ORGANIZATION';
    projectId?: string;
    version?: string;
    cid?: string;
    appId?: string;
    runtimeId?: string;
    pageId?: string;
    wikiId?: string;
    auditStatus?: string;
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type sendSignInSMSVerificationParams = {
    mobile: string;
    uuid: string;
  };

  type sendSignUpEmailVerificationParams = {
    email: string;
    uuid: string;
  };

  type sendTemplateMailestParams = {
    notifyAction: 'PROJECT_FAVOR' | 'ACCOUNT_FOLLOW' | 'RESOURCE' | 'RUNTIME' | 'OTHER';
    operateAction?:
      | 'WIKI_PUBLISH'
      | 'WIKI_CREATE'
      | 'WIKI_EDIT'
      | 'WIKI_DELETE'
      | 'WIKI_FAVOR'
      | 'APP_ADD'
      | 'APP_UPDATE'
      | 'APP_DELETE'
      | 'PAGE_ADD'
      | 'PAGE_UPDATE'
      | 'PAGE_DELETE'
      | 'RUNTIME_STOP'
      | 'RUNTIME_DELETE'
      | 'INSTANCE_STOP'
      | 'INSTANCE_DELETE';
    sourceName?: string;
  };

  type sendVerifyCodeParams = {
    receiver: string;
    verifyType: 'CHANGE' | 'LOGIN' | 'REGISTER';
    sendType: 'PHONE' | 'EMAIL';
  };

  type setProjectPublishStateParams = {
    id: string;
    version?: string;
    publish: boolean;
  };

  type setWikiPublishStateParams = {
    id: string;
    publish: boolean;
  };

  type Share = {
    id?: string;
    expireTime?: string;
    url?: string;
    code?: string;
    shareId?: string;
  };

  type ShareInfo = {
    id: string;
    url: string;
    expireTime?: string;
  };

  type Site = {
    id?: string;
    name?: string;
    url?: string;
    childInheritAppendPath?: string;
  };

  type Sort = {
    sorted?: boolean;
    unsorted?: boolean;
    empty?: boolean;
  };

  type stopEngineParams = {
    id: string;
  };

  type stopInstanceParams = {
    id: string;
  };

  type stopRuntimeParams = {
    id: string;
  };

  type SubStep = {
    startTime?: string;
    subStep?: string;
    subStepEnum?:
      | 'APP_DETECT'
      | 'APP_DETECT_INVALID'
      | 'APP_FILES_COPY_START'
      | 'APP_FILES_COPY_FAILED'
      | 'APP_FILES_COPY_SUCCEED'
      | 'PAGE_DETECT'
      | 'PAGE_DETECT_INVALID'
      | 'PAGE_FILES_COPY_START'
      | 'PAGE_FILES_COPY_FAILED'
      | 'PAGE_FILES_COPY_SUCCEED'
      | 'ENTITIES_HANDLE_START'
      | 'ENTITIES_HANDLE_SUCCEED'
      | 'ENTITIES_HANDLE_FAILED'
      | 'ES_ENTITIES_HANDLE_START'
      | 'ES_ENTITIES_HANDLE_SUCCEED'
      | 'ES_ENTITIES_HANDLE_FAILED'
      | 'PROJECT_INIT_SUCCEED'
      | 'PROJECT_INIT_FAILED'
      | 'PROJECT_FORK_START';
  };

  type SubTask = {
    /** 1:hdfs 文件 copy 2: mysql entity 生成 3: es entity 生成 */
    step?: number;
    /** 0: 进行中 1: 成功 2: 失败 */
    status?: number;
    /** 任务开始时间 */
    startTime?: string;
    subSteps?: SubStep[];
  };

  type Token = {
    code?: number;
    msg?: string;
    accessToken?: string;
    tokenType?: string;
    refreshToken?: string;
    expiresIn?: number;
    scope?: string;
    jti?: string;
  };

  type Tools = {
    /** 应用的类型,SERVICE类型，除非主动停止不会主动停止的应用，比如任何web service，TASK类型，在完成工作后，会自动停止的应用，TOOLS，提供运行环境类的应用，可以被其他应用作为依赖，比如JAVA环境是一个TOOLS应用 */
    type?: 'RUNABLE' | 'TOOLS';
    /** 决定应用的路径，可以为空，以Java为例，一个应用一般由groupId和artifactId组成 */
    bundle?: string[];
    /** 应用编译时继承版本信息 */
    version?: string;
    /** 应用在发布的时候重新定义的版本信息 */
    releaseVersion?: string;
    commit?: Commit;
    appPackage?: AppPackage;
    /** 全路径 */
    appPath?: string;
    /** 根据app的dir生成的key */
    appKey?: string;
    osrtAppKey?: string;
    osrtAppPath?: string;
    /** 应用的名称 */
    name?: string;
    /** 应用的类型 */
    subType?: string;
    /** 应用的简介，可以是Markdown形式的文档 */
    description?: string;
    modelVersion?: string;
    parent?: Parent;
    packaging?: string;
    url?: string;
    childInheritAppendPath?: string;
    inceptionYear?: string;
    organization?: Organization;
    licenses?: License[];
    developers?: Developer[];
    contributors?: Contributor[];
    mailingLists?: MailingList[];
    prerequisites?: Prerequisites;
    scm?: Scm;
    issueManagement?: IssueManagement;
    ciManagement?: CiManagement;
    build?: Build;
    profiles?: Profile[];
    modelEncoding?: string;
    /** tools应用提供对应的shell扩展,应用本身的环境变量配置，通过环境变量加载对应的命令 */
    env?: Record<string, any>;
    /** 工具以单一package方式呈现，在使用前需要预制的命令进行安装，安装以绿色方式进行，仅可以安装到当前container的workdir */
    preCmds?: string[];
  };

  type Topic = {
    id?: number;
    /** topic name */
    name?: string;
    /** alias name */
    aliasName?: string;
    /** topic description */
    description?: string;
    /** topic avatar url */
    avatar?: string;
    /** topic web links */
    links?: Record<string, any>;
    /** topic定义发布者, eg: angular由google定义发布 */
    publisher?: string;
    /** topic定义发布时间, eg: September 14, 2016 */
    releasedDate?: string;
    /** 这条记录的创建者 */
    creator?: number;
    /** 这条记录的最新修改者 */
    modifier?: number;
    /** 这条记录的创建时间 */
    createTime?: string;
    /** 这条记录的最新修改时间 */
    updateTime?: string;
  };

  type TopicInfo = {
    topic?: Topic;
    /** project num */
    projectNum?: number;
    /** topic new relate projects, max 4 size */
    osrtProjects?: OsrtProjects[];
  };

  type unbindOauthParams = {
    source: string;
  };

  type unfavorWikiParams = {
    id: string;
  };

  type unfollowUserParams = {
    id: number;
    type: number;
  };

  type unPublishWikiParams = {
    id: string;
  };

  type unvoteWikiParams = {
    id: string;
  };

  type updateInstanceRunningPortParams = {
    id: string;
    port: number;
  };

  type updateNotifyTemplateParams = {
    id: number;
  };

  type UpdatePassword = {
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };

  type updateWikiParams = {
    id: string;
  };

  type uploadAppPreCheckParams = {
    scopeId: number;
    type: string;
  };

  type uploadFileParams = {
    projectId: string;
    scopeId: number;
    type: string;
  };

  type uploadFilePreCheckParams = {
    scopeId: number;
    type: string;
  };

  type uploadImageParams = {
    type?:
      | 'USER_AVATAR'
      | 'APP_AVATAR'
      | 'APP_SHOT'
      | 'WIKI_IMG'
      | 'ORGANIZATIONS_IMG'
      | 'PROJECT_IMG';
  };

  type UrlInfo = {
    url?: string;
  };

  type User = {
    id?: number;
    /** login/username */
    username?: string;
    /** 邮箱 */
    email?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 简介 */
    bio?: string;
    /** 公司 */
    company?: string;
    /** 地区 */
    location?: string;
    mobile?: string;
    /** 微信 */
    weChat?: string;
    /** 推特username */
    twitterUsername?: string;
    /** 个人主页 */
    blog?: string;
    /** 注册时间 */
    createTime?: string;
    type?: number;
    enablePasswd?: boolean;
    topics?: string[];
    /** 组织成员：组织内成员的role: 0-owner,1-admin,2-member */
    accessRole?: number;
    /** 组织成员：成员状态, 0: 正常成员 1: 邀请中 2: 已离开删除 */
    status?: number;
    active?: number;
  };

  type userAvatarGenerateParams = {
    userNames: string[];
  };

  type UserBilling = {
    id?: number;
    /** 账户用户ID */
    accountId?: number;
    /** 关联钱包ID 即此账单由此钱包扣费支付 */
    walletId?: number;
    /** 产品类型 */
    productType?: string;
    /** 产品ID */
    productId?: number;
    /** 账期 (小时)例：2022012018 */
    period?: string;
    /** 计费时间 */
    billingTime?: string;
    /** 已付金额 */
    paidAmount?: number;
    /** 数据快照 实例配置、产品计价公式 */
    dataSnapshot?: string;
    /** instances_id */
    instanceId?: string;
    /** runtime_id */
    runtimeId?: string;
    /** app_id */
    appId?: string;
    /** project_id */
    projectId?: string;
  };

  type userBillingPageParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type UserLogin = {
    username: string;
    password: string;
  };

  type UserMenu = {
    menuType?: 'COMMUNITY' | 'OS';
    menus?: Menu[];
  };

  type UserOauth = {
    /** 用户名 */
    username?: string;
    /** 用户昵称 */
    nickname?: string;
    /** 用户头像 */
    avatar?: string;
    /** 用户网址 */
    blog?: string;
    /** 所在公司 */
    company?: string;
    /** 位置 */
    location?: string;
    /** 用户邮箱 */
    email?: string;
    /** 用户备注（各平台中的用户个人介绍） */
    remark?: string;
    /** 性别 */
    gender?: string;
    /** 用户来源 */
    source?: string;
    /** 绑定本地账户 */
    localAccount?: string;
  };

  type UserProduct = {
    id?: number;
    name?: string;
    label?: string;
    runInfo?: Record<string, any>;
    disable?: boolean;
    productSpecsSnapshot?: string;
    creator?: number;
    expirationTime?: string;
    createTime?: string;
    /** 版本号（乐观锁） */
    version?: number;
  };

  type userRecentChatsParams = {
    /** Zero-based page index (0..N) */
    page?: number;
    /** The size of the page to be returned */
    size?: number;
    /** Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
    sort?: string[];
  };

  type UserRecharge = {
    id?: number;
    /** 关联子钱包ID */
    walletId?: number;
    /** 账户用户ID */
    accountId?: number;
    /** 支付类型 1:支付宝, 2:微信 */
    type?: number;
    /** 金额 */
    value?: number;
    /** 三方订单号 */
    outTradeNo?: string;
    /** 三方支付回调报文 */
    callbackMsg?: string;
    /** 三方支付账户名 */
    payer?: string;
    /** 支付状态 0:未完成, 1:已完成 */
    state?: number;
    /** 是否已开票 0:未开, 1:开发票 */
    invoicing?: number;
    /** 此条记录创建者 */
    creator?: number;
    /** 此条记录最新修改者 */
    modifier?: number;
    /** 记录创建时间 */
    gmtCreate?: string;
    /** 记录最新修改时间 */
    gmtUpdate?: string;
  };

  type Users = {
    id?: number;
    username?: string;
    /** 昵称 */
    nickname?: string;
    realName?: string;
    email?: string;
    mobile?: string;
    phone?: string;
    weChat?: string;
    qq?: string;
    weibo?: string;
    /** 公司 */
    company?: string;
    /** 地址 */
    location?: string;
    gender?: 'MALE' | 'FAMALE';
    /** 推特username */
    twitterUsername?: string;
    /** 主页 */
    blog?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 简介 */
    bio?: string;
    vipGrade?: string;
    active?: boolean;
    createTime?: string;
    registerTime?: string;
    lastLoginTime?: string;
    githubId?: number;
    giteeId?: number;
    /** 个人标签-自定义文本输入 */
    topics?: string;
    /** 国际化 语言类型 */
    lang?: string;
  };

  type UserSignUp = {
    /** login/username */
    username: string;
    /** 邮箱 */
    email: string;
    /** 密码 */
    password: string;
    /** 验证码 */
    verificationCode: string;
  };

  type UserStatistics = {
    project?: Projects;
    pages?: Pages[];
    apps?: Apps[];
    runtimes?: Runtimes[];
    instances?: RuntimeInstances[];
    domains?: Domains[];
    identity?: Identity;
    projectVersions?: ProjectVersion[];
  };

  type UserStatisticsQuery = {
    excludeUsers?: string[];
    original?: boolean;
    hasVersion?: boolean;
  };

  type UserStatisticsQueryResult = {
    projectCounts?: number;
    domainCounts?: number;
    originalProjectCounts?: number;
    forkProjectCounts?: number;
    userStatistics?: UserStatistics[];
  };

  type UserWallet = {
    id?: number;
    /** 账户用户ID */
    accountId?: number;
    /** 钱包总收入 */
    income?: number;
    /** 钱包总支出 */
    outcome?: number;
    /** 钱包余额 */
    balance?: number;
    /** 记录签名,用于安全检查,检查不通过为异常 */
    signature?: string;
    /** 此条记录创建者 */
    creator?: number;
    /** 此条记录最新修改者 */
    modifier?: number;
    /** 记录创建时间 */
    gmtCreate?: string;
    /** 记录最新修改时间 */
    gmtUpdate?: string;
  };

  type validatePayTradeParams = {
    outTradeNo: string;
  };

  type voteWikiParams = {
    id: string;
  };

  type wikiAuditApplyParams = {
    id: string;
  };

  type wikiAuditParams = {
    id: string;
    isAudit: boolean;
  };

  type WikiCensus = {
    /** 收藏数量 */
    favorites?: number;
    /** 阅读量 */
    pv?: number;
    /** 点赞数量 */
    votes?: number;
    favored?: boolean;
    voted?: boolean;
  };

  type WikiModel = {
    projectId?: string;
    version?: string;
    title?: string;
    content?: string;
    relations?: Relation[];
    topics?: string[];
  };

  type wxScanCodeParams = {
    amount: string;
  };
}
