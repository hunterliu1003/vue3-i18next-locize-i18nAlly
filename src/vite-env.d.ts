/// <reference types="vite/client" />

import Resources from './resources.d.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Resources;
  }
}