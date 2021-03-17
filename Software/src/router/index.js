import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: ['/']
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
