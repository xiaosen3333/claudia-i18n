/**
 * Translation keys structure for type-safe internationalization
 */
export interface TranslationKeys {
  common: {
    save: string;
    cancel: string;
    loading: string;
    success: string;
    error: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    yes: string;
    no: string;
    delete: string;
    edit: string;
    create: string;
    export: string;
    import: string;
    execute: string;
    search: string;
    add: string;
    remove: string;
    clear: string;
    refresh: string;
    thinking: string;
    seconds: string;
    copy: string;
    copied: string;
    viewOutput: string;
    stop: string;
    collapse: string;
    expand: string;
    searchFailed: string;
    noMatchesFound: string;
    commandFailed: string;
    commandCompleted: string;
    taskInstructions: string;
    noFilesFound: string;
    emptyDirectory: string;
    clickToSelect: string;
    unknownError: string;
    clickExpandToView: string;
    noMatchesForPattern: string;
  };

  app: {
    title: string;
    welcome: string;
    backToHome: string;
    name: string;
  };

  navigation: {
    ccAgents: string;
    ccProjects: string;
    usageDashboard: string;
    claudemd: string;
    mcp: string;
    settings: string;
    about: string;
  };

  projects: {
    title: string;
    description: string;
    newSession: string;
    noProjectsFound: string;
    failedToLoad: string;
    failedToLoadSessions: string;
    sessions: string;
    session: string;
    firstMessage: string;
    hasTodo: string;
  };

  agents: {
    title: string;
    description: string;
    noAgents: string;
    createFirst: string;
    createAgent: string;
    recentExecutions: string;
    deleteAgent: string;
    deleteConfirm: string;
    deleteWarning: string;
    deleting: string;
    created: string;
    updated: string;
    deleted: string;
    imported: string;
    failedToDelete: string;
    runningTitle: string;
    
    // Additional translations for CCAgents
    import: string;
    fromFile: string;
    fromGitHub: string;
    agents: string;
    runningSessions: string;
    execute: string;
    edit: string;
    export: string;
    delete: string;
    previous: string;
    next: string;
    page: string;
    of: string;
    cancel: string;
    exportSuccess: string;
    exportFailed: string;
    importFromFile: string;
    importFromGitHub: string;
    failedToImport: string;
    createdAt: string;
    executeTitle: string;
    editTitle: string;
    exportTitle: string;
    deleteTitle: string;
  };

  settings: {
    title: string;
    description: string;
    saving: string;
    saveSettings: string;
    saved: string;
    failedToSave: string;
    
    tabs: {
      general: string;
      permissions: string;
      environment: string;
      advanced: string;
    };

    general: {
      title: string;
      language: string;
      languageDescription: string;
      claudeAttribution: string;
      claudeAttributionDescription: string;
      verboseOutput: string;
      verboseOutputDescription: string;
      chatRetention: string;
      chatRetentionDescription: string;
      claudeInstallation: string;
      claudeInstallationDescription: string;
      binaryPathChanged: string;
    };

    permissions: {
      title: string;
      description: string;
      allowRules: string;
      denyRules: string;
      addRule: string;
      noAllowRules: string;
      noDenyRules: string;
      examples: string;
    };

    environment: {
      title: string;
      description: string;
      addVariable: string;
      noVariables: string;
      commonVariables: string;
    };

    advanced: {
      title: string;
      description: string;
      apiKeyHelper: string;
      apiKeyHelperDescription: string;
      rawSettings: string;
      rawSettingsDescription: string;
    };
  };

  claude: {
    checking: string;
    notFound: string;
    selectInstallation: string;
    install: string;
    binaryPathSaved: string;
    searchingInstallations: string;
    multipleFound: string;
    pleaseSelect: string;
    notFoundInLocations: string;
    installToContinue: string;
    searchedLocations: string;
    installUsing: string;
  };

  mcp: {
    serverAdded: string;
    serverRemoved: string;
    importedSuccess: string;
    importedFailed: string;
  };

  markdown: {
    saved: string;
    failedToSave: string;
    unsavedChanges: string;
  };

  languages: {
    'zh-CN': string;
    'en': string;
  };

  // Agent Management
  createAgent: {
    title: string;
    editTitle: string;
    backToAgents: string;
    saving: string;
    basicInformation: string;
    agentName: string;
    agentNamePlaceholder: string;
    agentNameRequired: string;
    agentIcon: string;
    systemPrompt: string;
    systemPromptRequired: string;
    systemPromptDescription: string;
    defaultTask: string;
    defaultTaskPlaceholder: string;
    defaultTaskDescription: string;
    model: string;
    icon: string;
    selectIcon: string;
    sandboxSettings: string;
    sandboxEnabled: string;
    sandboxDescription: string;
    filePermissions: string;
    enableFileRead: string;
    enableFileWrite: string;
    networkPermissions: string;
    enableNetwork: string;
    saveAgent: string;
    modelSonnet: string;
    modelSonnetDescription: string;
    modelOpus: string;
    modelOpusDescription: string;
    failedToCreate: string;
    failedToUpdate: string;
    unsavedChanges: string;
  };

  agentExecution: {
    title: string;
    backToAgents: string;
    projectPath: string;
    selectDirectory: string;
    selectProjectDirectory: string;
    task: string;
    taskPlaceholder: string;
    model: string;
    execute: string;
    stop: string;
    executeAgent: string;
    stopExecution: string;
    execution: string;
    executionStarted: string;
    executionCompleted: string;
    executionStopped: string;
    executionError: string;
    projectPathRequired: string;
    taskRequired: string;
    elapsed: string;
    tokens: string;
    totalTokens: string;
    copyOutput: string;
    copyAsJsonl: string;
    copyAsMarkdown: string;
    copySuccess: string;
    copyFailed: string;
    fullscreen: string;
    closeFullscreen: string;
    rawJsonl: string;
    executionLog: string;
    readyToExecute: string;
    readyToExecuteDescription: string;
    initializingAgent: string;
    failedToSelectDirectory: string;
    failedToExecuteAgent: string;
    agentExecutionFailed: string;
    agentExecutionCancelled: string;
    executionStoppedByUser: string;
    runningDescription: string;
    executeDescription: string;
    confirmNavigation: string;
    agentNameOutput: string;
  };

  usageDashboard: {
    title: string;
    backToHome: string;
    overview: string;
    sessions: string;
    loading: string;
    failedToLoad: string;
    totalCost: string;
    totalTokens: string;
    inputTokens: string;
    outputTokens: string;
    totalSessions: string;
    dateRange: string;
    allTime: string;
    last7Days: string;
    last30Days: string;
    costBreakdown: string;
    tokenBreakdown: string;
    sessionBreakdown: string;
    noData: string;
    projectName: string;
    sessionDate: string;
    duration: string;
    cost: string;
    tokens: string;
    exportData: string;
  };

  mcpManager: {
    title: string;
    description: string;
    backToHome: string;
    servers: string;
    addServer: string;
    importExport: string;
    loading: string;
    failedToLoad: string;
    noServers: string;
    serverAdded: string;
    serverRemoved: string;
    importSuccess: string;
    importFailed: string;
    serverName: string;
    serverCommand: string;
    serverArgs: string;
    serverEnv: string;
    removeServer: string;
    editServer: string;
    testConnection: string;
    jsonFormatExamples: string;
  };

  // Checkpoint Settings
  checkpointSettings: {
    title: string;
    experimentalFeature: string;
    experimentalWarning: string;
    automaticCheckpoints: string;
    automaticCheckpointsDescription: string;
    checkpointStrategy: string;
    strategyManual: string;
    strategyPerPrompt: string;
    strategyPerToolUse: string;
    strategySmart: string;
    strategyManualDescription: string;
    strategyPerPromptDescription: string;
    strategyPerToolUseDescription: string;
    strategySmartDescription: string;
    storageManagement: string;
    totalCheckpoints: string;
    keepRecentCheckpoints: string;
    cleanUp: string;
    cleanUpDescription: string;
    removedCheckpoints: string;
    failedToLoadSettings: string;
    failedToSaveSettings: string;
    failedToCleanup: string;
    settingsSaved: string;
  };

  // Common UI elements and placeholders
  placeholders: {
    typePromptHere: string;
    searchIcons: string;
    enterUrl: string;
    exampleText: string;
    searchAgents: string;
    projectPath: string;
    alternativeApproach: string;
    key: string;
    value: string;
    serverName: string;
    serverPath: string;
    serverArgs: string;
    sseEndpoint: string;
    bashExample: string;
    curlExample: string;
    apiKeyPath: string;
    dropImagesHere: string;
  };

  // Status and states
  status: {
    running: string;
    completed: string;
    failed: string;
    pending: string;
    cancelled: string;
    ready: string;
    active: string;
    inactive: string;
  };

  // Error Boundary
  errorBoundary: {
    title: string;
    description: string;
    tryAgain: string;
    errorDetails: string;
    stackTrace: string;
  };

  // Webview Preview
  webviewPreview: {
    title: string;
    webPreview: string;
    noUrlProvided: string;
    tryEntering: string;
    orAnyOtherUrl: string;
  };

  // Preview Prompt Dialog
  previewPromptDialog: {
    openPreview: string;
    openPreviewQuestion: string;
    detectedUrlMessage: string;
    localDevelopmentServer: string;
    externalUrl: string;
    previewWillOpen: string;
  };

  // Session Output Viewer  
  sessionOutput: {
    fullscreen: string;
    refresh: string;
    sessionOutput: string;
    failedToLoad: string;
    refreshed: string;
    failedToRefresh: string;
    waitingForOutput: string;
    agentRunningNoOutput: string;
    noOutputAvailable: string;
  };

  // Agent Run
  agentRun: {
    goBack: string;
    openInFullView: string;
    refreshOutput: string;
    failedToLoad: string;
    runNotFound: string;
    executionHistory: string;
    agentExecution: string;
    duration: string;
    tokens: string;
    cost: string;
    systemInitialization: string;
    sessionId: string;
    model: string;
    workingDirectory: string;
    tools: string;
    assistant: string;
    user: string;
    toolResult: string;
    executionResult: string;
    error: string;
    tool: string;
    tokensUsage: string;
  };

  // Timeline Navigator
  timelineNavigator: {
    checkpoint: string;
    checkpointName: string;
    checkpointNamePlaceholder: string;
    experimentalFeature: string;
    experimentalWarning: string;
    timeline: string;
    checkpoints: string;
    failedToLoadTimeline: string;
    current: string;
    noPrompt: string;
    tokens: string;
    files: string;
    restoreToCheckpoint: string;
    forkFromCheckpoint: string;
    compareWithCheckpoint: string;
    loadingTimeline: string;
    noCheckpointsYet: string;
    createCheckpoint: string;
    createCheckpointTitle: string;
    saveCurrentState: string;
    descriptionOptional: string;
    cancel: string;
    failedToCreateCheckpoint: string;
    failedToRestoreCheckpoint: string;
    failedToCompareCheckpoints: string;
    restoreConfirm: string;
    autoSaveBeforeRestore: string;
    checkpointComparison: string;
    changesBetween: string;
    modifiedFiles: string;
    addedFiles: string;
    deletedFiles: string;
    close: string;
  };

  // Icon Picker
  iconPicker: {
    selectIcon: string;
    selectedIcon: string;
    clickToSelect: string;
    iconsAvailable: string;
  };

  // Claude Version Selector
  claudeVersion: {
    downloadProgress: string;
    officialRelease: string;
    nightlyBuild: string;
    developerBuild: string;
    downloadFailed: string;
    downloadComplete: string;
    verifying: string;
    verified: string;
    validating: string;
    downloadingClaudeCode: string;
    installingClaudeCode: string;
    installationFailed: string;
    selectChannel: string;
    availableVersions: string;
    installed: string;
    downloading: string;
    selectForInstall: string;
    selectInstallation: string;
    noInstallationsFound: string;
    failedToLoadInstallations: string;
    systemPath: string;
    homebrew: string;
    system: string;
    localBin: string;
    claudeLocal: string;
    npmGlobal: string;
    yarn: string;
    bun: string;
    current: string;
    saving: string;
    saveSelection: string;
  };

  // Claude Code Session
  claudeCodeSession: {
    title: string;
    failedToLoadHistory: string;
    selectDirectory: string;
    selectProjectDirectory: string;
    failedToSelectDirectory: string;
    selectProjectFirst: string;
    failedToSendPrompt: string;
    executionCancelledByUser: string;
    failedToCancelExecution: string;
    failedToForkCheckpoint: string;
    screenshotCaptured: string;
    resumingSession: string;
    interactiveSession: string;
    settings: string;
    timeline: string;
    closePreview: string;
    preview: string;
    closeBrowserPreview: string;
    openBrowserPreview: string;
    copyOutput: string;
    copyAsMarkdown: string;
    copyAsJsonl: string;
    loadingSessionHistory: string;
    initializingClaudeCode: string;
    projectDirectory: string;
    project: string;
    date: string;
    systemInitialization: string;
    sessionId: string;
    model: string;
    workingDirectory: string;
    tools: string;
    assistant: string;
    user: string;
    toolResult: string;
    executionResult: string;
    error: string;
    tool: string;
    tokensUsage: string;
    forkSession: string;
    forkSessionDescription: string;
    newSessionName: string;
    cancel: string;
    createFork: string;
    projectPathPlaceholder: string;
    alternativeApproachPlaceholder: string;
  };

  // GitHub Agent Browser
  githubAgentBrowser: {
    title: string;
    browseAgents: string;
    searchPlaceholder: string;
    loading: string;
    loadFailed: string;
    noAgentsFound: string;
    importAgent: string;
    agentDetails: string;
    author: string;
    stars: string;
    importInProgress: string;
    fetchedFrom: string;
    contributeMessage: string;
    tryAgain: string;
    noAgentsMatchingSearch: string;
    noAgentsAvailable: string;
    imported: string;
    preview: string;
    agentPreview: string;
    systemPrompt: string;
    defaultTask: string;
    permissions: string;
    fileRead: string;
    fileWrite: string;
    network: string;
    yes: string;
    no: string;
    version: string;
    exported: string;
    cancel: string;
    importing: string;
    alreadyImported: string;
  };

  // Floating Prompt Input  
  floatingPrompt: {
    placeholder: string;
    send: string;
    cancel: string;
    keyboardHints: string;
  };

  // MCP Add Server
  mcpAddServer: {
    title: string;
    serverType: string;
    typeStdio: string;
    typeSse: string;
    configuration: string;
    name: string;
    namePlaceholder: string;
    nameDescription: string;
    command: string;
    commandPlaceholder: string;
    commandDescription: string;
    args: string;
    argsPlaceholder: string;
    argsDescription: string;
    sseUrl: string;
    sseUrlPlaceholder: string;
    sseUrlDescription: string;
    environmentVariables: string;
    envDescription: string;
    keyPlaceholder: string;
    valuePlaceholder: string;
    addVariable: string;
    cancel: string;
    add: string;
    nameRequired: string;
    commandRequired: string;
    urlRequired: string;
    scope: string;
    scopeLocal: string;
    scopeProject: string;
    scopeUser: string;
    exampleCommands: string;
  };

  // NFO Credits
  nfoCredits: {
    title: string;
    builtWith: string;
    fileABug: string;
    version: string;
    byAsterisk: string;
    credits: string;
    poweredBy: string;
    ultimateCodingAssistant: string;
    mcpProtocol: string;
    dependencies: string;
    runtime: string;
    uiFramework: string;
    styling: string;
    animations: string;
    buildTool: string;
    packageManager: string;
    specialThanks: string;
    toOpenSource: string;
    toBetaTesters: string;
    toEveryone: string;
    sharingIsCaring: string;
    supportDevelopers: string;
  };

  // Stream Message
  streamMessage: {
    executionFailed: string;
    executionComplete: string;
  };

  // Agent Run Output Viewer
  agentRunOutput: {
    failedToLoadOutput: string;
    agentExecutionCompleted: string;
    agentExecutionCancelled: string;
    outputCopiedAsJsonl: string;
    outputCopiedAsMarkdown: string;
    loadingOutput: string;
    noOutputAvailable: string;
    running: string;
    copy: string;
    copyAsJsonl: string;
    copyAsMarkdown: string;
    openInFullView: string;
    exitFullscreen: string;
    enterFullscreen: string;
    refreshOutput: string;
    exitFullscreenButton: string;
    copyOutput: string;
    agentExecution: string;
    claudeOpus: string;
    claudeSonnet: string;
  };


  _meta?: {
    author?: string;
    version?: string;
    locale?: string;
  };
}

/**
 * Available language codes
 */
export type LanguageCode = 'zh-CN' | 'en';

/**
 * Language configuration
 */
export interface LanguageConfig {
  code: LanguageCode;
  name: string;
  nativeName: string;
}