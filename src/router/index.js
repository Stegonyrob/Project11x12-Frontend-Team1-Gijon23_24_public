import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminBecadosView from '@/views/AdminBecadosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminBecadosView,
    },
{
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
      
    },

    {
      path: '/user',
      name: 'UserDashboard',
      component: () => import('../views/UserDashboardView.vue')
      
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminDashboardView.vue')
      
    },

    {
      path: '/add',
      name: 'AddParticipant',
      component: () => import('../views/AddParticipantView.vue')
      
    },

    {
      path: '/edit',
      name: 'EditParticipant',
      component: () => import('../views/EditParticipantView.vue')
      
    },



  ]
})

export default router
