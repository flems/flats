import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:page?',
    name: 'index',
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    component: () => import('../pages/Detail.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
