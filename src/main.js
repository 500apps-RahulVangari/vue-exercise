import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

//import QuestionBox from './components/QuestionBox'
//import FillBlanks from './components/FillBlanks'

//import StartPage from './components/StartPage'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
