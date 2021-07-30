import { createRouter, createWebHistory } from 'vue-router'
const HOME = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Loading = () => import('@/layout/Loading.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HOME,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
