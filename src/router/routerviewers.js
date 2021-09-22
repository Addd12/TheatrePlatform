import { createRouter, createWebHistory } from 'vue-router'
import HomeViewers from '../views/HomeViewers.vue'


const routes = [
  {
    path: '/',
    name: 'appviewers',
    component: HomeViewers,
    children: [
      {
        path:'',
        name: 'VrDashBoard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../components/viewer/Dashboard.vue')

      },
      {
        path: 'albums',
        name: 'Viewalbums',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/ViewAlbums.vue')

      },
      {
        path: 'followings',
        name: 'UsersFollowings',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/Followings.vue')
      },
      {
        path: 'search',
        name: 'UsersSearch',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/Search.vue')
      },
      {
        path: 'setting',
        name: 'VrSetting',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/Setting.vue')
      },
      {
        path: 'profile',
        name: 'VrProfile',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/Profile.vue')
      },
      {
        path: 'purchased',
        name: 'ViewPurchased',
        component: () => import(/* webpackChunkName: "ViewPurchased"*/ '../components/viewer/PurchasedItems.vue')

      }
    ],
  },

]

const router2 = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router2
