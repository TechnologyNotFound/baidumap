import Vue from 'vue'
import VueRouter from 'vue-router'
import wplane from '../components/wplane.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wplane',
    component: wplane
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../components/wplane.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
