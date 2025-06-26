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
  };

  app: {
    title: string;
    welcome: string;
    backToHome: string;
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