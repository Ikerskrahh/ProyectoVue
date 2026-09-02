import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../Views/LoginView.vue'
import RegistroView from '@/Views/RegistroView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
  path: '/registrar',
  name: 'registrar',
    component: RegistroView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router