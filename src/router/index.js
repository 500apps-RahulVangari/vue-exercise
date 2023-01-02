import Vue from "vue";
import VueRouter from "vue-router";
import MCQ from '../components/Child1.vue';
import ParenT from '../components/Parent.vue';
 import FILL from '../components/Child2.vue';
 import SUBMIT from '../components/Submit.vue';
Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
    {
      path: "/",
      name: "Home",
      component: ParenT
    },
    {
      path: "/home",
      name: "Home",
      component: ParenT
    },
    {
        path: "/mcq",
        name: "MCQ",
        component: MCQ
      },
      {
        path: "/fill",
        name: "FILL",
        component: FILL
      },
      {
        path: "/submit",
        name: "SUBMIT",
        component: SUBMIT
      }

]
let router = new VueRouter({
    routes,
    mode: "history",
  });
  export default router;
