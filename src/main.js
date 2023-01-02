import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; 
Vue.use(BootstrapVue)
Vue.config.productionTip = false
new Vue({
  router,BootstrapVue,
  render: h => h(App)
}).$mount('#app')
