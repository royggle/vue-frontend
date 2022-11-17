import { createRouter, createWebHistory } from 'vue-router'
import MembersComponent from '../components/contents/MembersComponent.vue'
import SearchComponent from '../components/contents/SearchComponent.vue'
import LoginComponent from '../components/contents/LoginComponent.vue'


const routes = [
  { path: '/', redirect: '/members' },
  {
    path: '/members',
    name: 'Members',
    component: MembersComponent
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchComponent
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
