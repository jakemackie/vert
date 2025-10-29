import { createRouter, createWebHistory } from 'vue-router'
import Page from '../layouts/Page.vue'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { 
    path: '/',
    component: Page,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: '/about', name: 'About', component: About }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
