import { createRouter, createWebHistory } from 'vue-router'
import menPage from '../components/menPage.vue'
import womenPage from '../components/womenPage.vue'
import unavailable from '../components/unavailable.vue'

const routes = [
  { path: '', component: menPage },
  { path: '/men', component: menPage },
  { path: '/women', component: womenPage },
  { path: '/:pathMatch(.*)*', component: unavailable }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
