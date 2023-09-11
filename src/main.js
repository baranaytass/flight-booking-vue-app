import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

const vuetify = createVuetify({
  theme: {
    primary: '#ffffff',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  }
})

app.use(router)

app.use(vuetify)

app.use(store);

app.mount('#app')
