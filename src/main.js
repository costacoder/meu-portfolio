import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles.css';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
