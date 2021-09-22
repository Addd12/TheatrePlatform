import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeCreators.vue'


const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'',
        name: 'CrDashBoard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../components/creator/Dashboard.vue')

      },
      {
        path:'addnew',
        name: 'AddContent',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/AddContent.vue')

      },
      {
        path:'earnings',
        name: 'earningsecreter',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/Earnings.vue')

      },
      {
        path:'contents',
        name: 'AllContents',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/AllContents.vue')

      },
      {
        path:'profile',
        name: 'crProfile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/Profile.vue')

      },

      {
        path:'invoice',
        name: 'crInvoice',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/Invoice.vue')

      },

      {
        path:'editalbum',
        name: 'crEditAlbum',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/modules/editalbum.vue')

      },

      {
        path:'detailspage',
        name: 'crDetils',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/modules/detailsPage.vue')

      },

      {

        path:'account/settings',
        name: 'settings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/Settings.vue')

      },
      {
        path:'verification',
        name: 'crVerification',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AddContent" */ '../components/creator/Verification.vue')

      },

    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
