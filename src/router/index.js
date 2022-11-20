import { createRouter, createWebHistory } from 'vue-router'
import MembersComponent from '../components/contents/MembersComponent.vue'
import BoardComponent from '../components/contents/BoardComponent.vue'
import LoginComponent from '../components/contents/LoginComponent.vue'


const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/members',
    name: 'Members',
    component: MembersComponent
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
