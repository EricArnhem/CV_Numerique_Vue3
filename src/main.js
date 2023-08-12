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
// Font Awesome Animations
import 'font-awesome-animation'

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
// Navbar
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
// Infos
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
// Skills
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// Hobbies
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'

// add icons to the library
library.add(faLanguage, faLocationDot, faEnvelope, faFilePdf, faChevronRight, faGithub, faMicrochip, faRocket, faGamepad, faDisplay)

const app = createApp(App)

app.use(router)
app.use(i18n)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')