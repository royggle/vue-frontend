import { createRouter, createWebHistory } from 'vue-router'
import MembersComponent from '../components/contents/MembersComponent.vue'
import BoardComponent from '../components/contents/BoardComponent.vue'
import LoginComponent from '../components/contents/LoginComponent.vue'
import DetailComponent from '../components/contents/DetailComponent.vue'
import WriteComponent from '../components/contents/WriteComponent.vue'


const routes = [
  { path: '/', redirect: '/board' },
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
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailComponent
  },
  {
    path: '/write',
    name: 'Write',
    component: WriteComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
