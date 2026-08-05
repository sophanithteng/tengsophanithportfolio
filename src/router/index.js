import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Certificates from '../components/Certificates.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: Certificates,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
