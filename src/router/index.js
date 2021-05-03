import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTables from '../views/DataTables.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DataTables',
    component: DataTables
  },
  {
    path: '/tabs',
    name: 'Tabs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tabs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
