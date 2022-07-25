import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/Home'
import AboutView from '../views/pages/About'
import ServiceView from '../views/pages/Service'
import TeamView from '../views/pages/Team'
import ClientView from '../views/pages/Clients'
import ContactView from '../views/pages/Contact'
import RegisterView from '@/views/auth/Register'
import LoginView from '@/views/auth/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : AboutView
  },
  {
    path: '/service',
    name: 'service',
    component : ServiceView
  },
  {
    path: '/team',
    name: 'team',
    component : TeamView
  },
  {
    path: '/clients',
    name: 'clients',
    component : ClientView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path : '/register',
    name : 'register',
    component : RegisterView
  },
  {
    path : '/login',
    name : 'login',
    component : LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
