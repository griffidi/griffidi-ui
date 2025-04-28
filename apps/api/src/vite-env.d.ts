/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ACCESS_TOKEN_SECRET: string;
  VITE_CORS_ORIGIN: string;
  VITE_NODE_ENV: 'development' | 'production';
  VITE_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
