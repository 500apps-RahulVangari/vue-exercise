import Vue from 'vue'
import VueRouter from 'vue-router'

import BlanksTest from '@/components/BlanksTest.vue'
import McqTest from '@/components/McqTest.vue'
import start from '@/components/StartPage.vue'
import Result from '@/components/resultPage.vue'

Vue.use(VueRouter)

const routes = [
  

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
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
