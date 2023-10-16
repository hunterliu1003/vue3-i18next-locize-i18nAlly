import Resources from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof Resources;
  }
}

declare module 'i18next-vue' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof Resources;
  }
}