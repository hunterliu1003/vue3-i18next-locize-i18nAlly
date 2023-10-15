import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend'

i18next
  .use(LanguageDetector)
  .use(HttpBackend)
  .init<HttpBackendOptions>({
    debug: true,
    load: 'currentOnly', // https://www.npmjs.com/package/i18next-http-backend#troubleshooting
    fallbackLng: 'en',
    backend: {
      // https://www.npmjs.com/package/i18next-http-backend
    },
  })

export default i18next