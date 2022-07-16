/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...

    readonly VITE_JIRA_API_TOKEN: string
    readonly VITE_JIRA_API_END_POINT: string
    readonly VITE_JIRA_PROJECT_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }