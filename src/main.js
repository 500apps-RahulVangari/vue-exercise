import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import FB from './components/child-one.vue'
import MCQ from './components/child-two.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const routes = [
  {
      path: '/fillintheblanks',
      name: 'FB',
      component: FB
  },
  //  Added our new route file named profile.vue
  {
      path: '/mcq',
      name: 'MCQ',
      Component:MCQ

  },
  {
      path: '/fillintheblanks',
      name: 'FB',
      // The route level code-splitting
      // this generates a separate chunk 
      // (about.[hash].js) for this route
      // which is lazy-loaded when the
      // route is visited.
      component:()=> import(
          /* webpackChunkName: "about" */ 
          './App.vue'
      )
  },
]

// Create Vue Router Object
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router