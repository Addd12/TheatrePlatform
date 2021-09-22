import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'

const routes = [

  {
    path: '/',
    name: 'userlogin',
    component: Login,
  },
  {
    path: '/viewer/signup',
    name: 'VrReg',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../components/publicauth/RegisterViewer.vue'),
  },
  {
    path: '/creator/signup',
    name: 'CrReg',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../components/publicauth/RegisterCreator'),
  },

]

const router3 = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router3
