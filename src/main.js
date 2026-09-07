import { createApp } from 'vue'
import App from './App.vue'

import LoginView from './Views/LoginView.vue'
import router from './router'
const app = createApp(App).use(router)
createApp(LoginView).use(router)
app.use(router)

app.mount('#app')