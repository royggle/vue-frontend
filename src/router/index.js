import { createRouter, createWebHistory } from 'vue-router'
import BoardComponent from '../components/contents/BoardComponent.vue'
import LoginComponent from '../components/contents/LoginComponent.vue'
import DetailComponent from '../components/contents/DetailComponent.vue'
import WriteComponent from '../components/contents/WriteComponent.vue'
import UpdateComponent from '../components/contents/UpdateComponent.vue'

const routes = [
  { path: '/', redirect: '/board' },
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
    path: '/detail/:board_idx',
    name: 'Detail',
    component: DetailComponent
  },
  {
    path: '/write',
    name: 'Write',
    component: WriteComponent
  },
  {
    path: '/update/:board_idx',
    name: 'Update',
    component: UpdateComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
