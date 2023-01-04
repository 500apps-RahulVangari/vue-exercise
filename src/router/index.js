import Vue from 'vue'
import VueRouter from 'vue-router'

import BlanksTest from '@/components/BlanksTest.vue'
import McqTest from '@/components/McqTest.vue'
import start from '@/components/StartPage.vue'
import Result from '@/components/resultPage.vue'
import checkbox from '@/components/CheckBoxs.vue'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  

  {
    path: '/BlanksTest',
    name: 'blanks',
    component: BlanksTest
  },
  {
    path: '/StartPage',
    name: 'start',
    component: start
  },
{
  path: '/McqTest',
  name: 'mcq',
  component: McqTest
},
{
  path: '/resultPage',
  name: 'result',
  component: Result
},
{
  path: '/CheckBoxs',
  name: 'checkbox',
  component: checkbox
},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
