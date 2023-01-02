import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import MCQs from '../components/child-one.vue'
import FB from '../components/child-two.vue'
import Result from '../components/Result-total.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/multipleChoiceQuestions',
    name: 'MCQs',
    component:MCQs
  },
  {
    path: '/fillInTheBlanks',
    name: 'FB',
    component:FB
  },
  {
    path:'/resultsView',
    name:'Result',
    component:Result

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
