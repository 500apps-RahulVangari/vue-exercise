import Vue from 'vue'
import VueRouter from 'vue-router'
import fillBlanks from '../components/fillBlanks.vue'
import mcqCode from '../components/mcqCode.vue'
import StartPage from '../components/StartPage.vue'
import EndPage from '../components/EndPage.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; 
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    path: '/Start',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/End',
    name: 'EndPage',
    component: EndPage
  },
  {
    path: '/fill',
    name: 'fillB',
    component: fillBlanks
  },
  {
    path: '/mcq',
    name: 'mcqC',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: mcqCode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
