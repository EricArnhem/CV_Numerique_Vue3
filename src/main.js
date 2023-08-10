import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* i18n */
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false, // Set to 'false' to use Composition API
  locale: 'fr',
  fallbackLocale: 'en'
})

/* Font Awesome */
// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

// add icons to the library
library.add(faLanguage)

const app = createApp(App)

app.use(router)
app.use(i18n)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')