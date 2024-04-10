/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PB_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
