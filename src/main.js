import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from '../src/App'
import router from './router'
// import VueRouter from 'vue-router'
// import MCQPage from './components/MCQPage'
// import FillBlankPage from './components/FillBlankPage'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import router from './router'

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
