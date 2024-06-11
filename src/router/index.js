import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Signup.vue')
    },
    {
      path: '/email',
      name: 'email',
      component: () => import('../components/ForgetEmail.vue')
    },
    {
      path: '/resetpass',
      name: 'resetpass',
      component: () => import('../components/ForgetPass.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/DashBoard.vue')
    },
    {
      path: '/newnote',
      name: 'newnote',
      component: () => import('../components/NewNote.vue')
    }
  ]
})

export default router
