import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import makeClient from './urql/client'
import urql from '@urql/vue'

const app = createApp(App)

export const urqlClient = makeClient() as unknown as any

app.use(router)
app.use(urql, urqlClient)

app.mount('#app')
