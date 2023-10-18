import { Plugin } from 'vue'
import _i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import BackendChained, { ChainedBackendOptions } from 'i18next-chained-backend'
import BackendLocalStorage, { LocalStorageBackendOptions } from 'i18next-localstorage-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
// import BackendHttp, { HttpBackendOptions } from 'i18next-http-backend'
import BackendLocize, { LocizeBackendOptions } from 'i18next-locize-backend'
import { locizePlugin } from 'locize'

const backendLocalStorageOptions: LocalStorageBackendOptions = {
  // prefix for stored languages
  prefix: 'i18next_res_',
  // expiration
  expirationTime: 7 * 24 * 60 * 60 * 1000,
  // Version applied to all languages, can be overwritten using the option `versions`
  defaultVersion: 'v1',
  // language versions
  versions: {},
  // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
  store: typeof window !== 'undefined' ? window.localStorage : null
}

// const backendHttpOptions: HttpBackendOptions = {
//   loadPath: '/locales/{{lng}}/{{ns}}.json'
// }

const backendLocizeOptions: LocizeBackendOptions = {
  projectId: '6db84fbf-323e-4089-a4c8-d50e0583a316',
  apiKey: 'b69c537a-dace-4b21-9fa9-a09145224fc5'
}

export const i18next: Plugin = {
  install(app) {
    _i18next
      .use(locizePlugin)
      .use(BackendChained)
      .use(LanguageDetector)
      .init<ChainedBackendOptions>({
        debug: true,
        load: 'currentOnly', // https://www.npmjs.com/package/i18next-http-backend#troubleshooting
        fallbackLng: 'en',
        interpolation: {
          skipOnVariables: false
        },
        backend: {
          backends: [
            BackendLocalStorage,
            resourcesToBackend((language: any, namespace: any) => import(`./locales/${language}/${namespace}.json`)),
            // BackendHttp,
            BackendLocize,
          ],
          backendOptions: [
            backendLocalStorageOptions,
            {},
            // backendHttpOptions,
            backendLocizeOptions,
          ]
        }
      })

    app.use(I18NextVue, {
      i18next: _i18next,
      slotStart: '<slot>',
      slotEnd: '</slot>',
    })
  }
}