import Vue from 'vue'
import VueRouter from 'vue-router'
 import HomeView from '../views/HomeView.vue'
 import  FillBlankPage from '../components/FillBlankPage.vue'
import TotalMarks from '../components/TotalMarks.vue'
// import MCQPage from '../components/MCQPage.vue'
import MCQPage from '../components/StartPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/mcq',
  //   name: 'MCQPage',
  //   component: MCQPage
  // },
  {
    path: '/blanks',
    name: 'FillBlankPage',
    component: FillBlankPage
  },
  {
    path: '/mcq',
    name: 'MCQPage',
    component: MCQPage
  },
  {
    path: '/marks',
    name: 'TotalMarks',
    component: TotalMarks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
