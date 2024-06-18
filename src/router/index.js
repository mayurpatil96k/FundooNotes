import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
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
      component: () => import('../components/DashBoard.vue'),
      children: [
        {
          path: '/dashboard/notes',
          name: 'notes',
          component: () => import('../components/Notes.vue')
        },
        {
          path: '/dashboard/archieve',
          name: 'archieve',
          component: () => import('../components/Archieve.vue')
        },
        {
          path: '/dashboard/trash',
          name: 'trash',
          component: () => import('../components/TrashNotes.vue')
        }
      ]
    },
    {
      path: '/newnote',
      name: 'newnote',
      component: () => import('../components/NewNote.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../components/Login.vue')
    }
  ]
})
router.beforeEach(async (to, from) => {
  const isAuthenticated = localStorage.getItem('API_KEY')
  if (!isAuthenticated && to.name !== 'Login' && to.name !== 'signup' && to.name !== '') {
    console.log(to.path)
    return { name: 'Login' }
  }
  if (isAuthenticated && (to.name == 'Login' || to.name == 'signup' || to.name == 'index')) {
    console.log(to.path)
    return { name: 'notes' }
  }
})

export default router
