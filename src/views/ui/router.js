import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      checkToken: true
    },
    component: () => import(/* webpackChunkName: "Home" */ './Home')
  },
  {
    path: '/indexPt',
    name: 'IndexPt',
    meta: {
      title: '拼团',
      checkToken: true
    },
    component: () => import(/* webpackChunkName: "IndexPt" */ './IndexPt')
  },
]
// const isProd = process.env.NODE_ENV === 'production'
// const PATH_NAME = process.env.VUE_APP_PROJECTNAME
const router = new VueRouter({
  // mode: isProd ? 'history' : 'hash',
  // base: isProd ? PATH_NAME + '/' : '/',
  routes
})

export default router
