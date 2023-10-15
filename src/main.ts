import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18next from './i18n'
import I18NextVue from 'i18next-vue'

createApp(App).use(I18NextVue, {
  i18next,
  slotStart: '<slot>',
  slotEnd: '</slot>',
}).mount('#app')
