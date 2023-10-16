import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18next } from './i18next'

createApp(App)
  .use(i18next)
  .mount('#app')
