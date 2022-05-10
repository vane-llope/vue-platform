import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cartView from '../views/cartView.vue'

const routes = [
  {path: '/', name: 'home',component: HomeView},
  {path: '/cart', name: 'cart',component: cartView},
  {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
