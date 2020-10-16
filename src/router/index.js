import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/followers',
    name: 'Followers',
    component: () => import(/* webpackChunkName: "followers" */ '../views/Followers.vue')
  },
  {
    path: '/following',
    name: 'Following',
    component: () => import(/* webpackChunkName: "following" */ '../views/Following.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
