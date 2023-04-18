import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('../components/Profile.vue')
    },
    {
      path: '/Profile',
      name: 'home',
      component: () => import('../components/Profile.vue')
    },
    {
      path: '/portopolio',
      name: 'portopolio',
      component: () => import('../components/Portopolio.vue')
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('../components/About.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/art_page/art2',
      name: 'art2',
      component: () => import('../components/art_page/art2.vue')
    },
    {
      path: '/art_page/art3',
      name: 'art3',
      component: () => import('../components/art_page/art3.vue')
    }
  ]
})

export default router
