import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './assets/css/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false, // Set to 'false' to use Composition API
  locale: 'fr',
  fallbackLocale: 'en'
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')