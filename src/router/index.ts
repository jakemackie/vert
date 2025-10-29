import { createRouter, createWebHistory } from 'vue-router'
import Page from '../layouts/Page.vue'
import Home from '../pages/Home.vue'
import Roster from '../pages/Roster.vue'
import Recruitment from '../pages/Recruitment.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { 
    path: '/',
    component: Page,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: '/roster', name: 'Roster', component: Roster },
      { path: '/recruitment', name: 'Recruitment', component: Recruitment },
      { path: '/about', name: 'About', component: About },
      { path: '/contact', name: 'Contact', component: Contact }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
