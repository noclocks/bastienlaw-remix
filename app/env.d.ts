/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
