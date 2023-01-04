import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
 import QuestionBox from '../components/QuestionBox'
 import FillBlanks from '../components/FillBlanks'
 import ResultPage from '../components/ResultPage'
 //import ParentVue from '../components/ParentVue'
 import CheckBox1 from '../components/CheckBox1'

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
 
  {
    path: '/mcq',
    name: 'QuestionBox',
    component: QuestionBox
  },
  {
    path: '/blanks',
    name: 'FillBlanks',
    component: FillBlanks
  },
  {
    path: '/box',
    name: 'CheckBox1',
    component: CheckBox1
  },
    {
    path: '/result',
   name: 'ResultPage',
    component: ResultPage
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
