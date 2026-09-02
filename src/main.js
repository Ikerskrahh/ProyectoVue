import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index1.js' 
import LoginView from './Views/LoginView.vue'
const app = createApp(App)
createApp(LoginView)
app.use(router)

app.mount('#app')