import Vue from "vue";

import VueRouter from "vue-router";

//import HomeView from '../views/HomeView.vue'

import BlanksTest from "@/components/BLANKSTest.vue";

import McqTest from "@/components/McqTest.vue";

import start from "@/components/StartPage.vue";

import Result from "@/components/resultPage.vue";

Vue.use(VueRouter);

const routes = [
  // {

  // path: '/',

  // name: 'home',

  // component: HomeView

  // },

  {
    path: "/BLANKSTest",

    name: "blanks",

    component: BlanksTest,
  },

  {
    path: "/StartPage",

    name: "start",

    component: start,
  },

  {
    path: "/McqTest",

    name: "mcq",

    component: McqTest,
  },

  {
    path: "/resultPage",

    name: "result",

    component: Result,
  },

  // {

  // path: '/about',

  // name: 'about',

  // // route level code-splitting

  // // this generates a separate chunk (about.[hash].js) for this route

  // // which is lazy-loaded when the route is visited.

  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  // },
];

const router = new VueRouter({
  mode: "history",

  base: process.env.BASE_URL,

  routes,
});

export default router;
