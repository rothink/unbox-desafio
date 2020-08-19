import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import * as Component from "./components";

const routes = [
  { path: "/", component: Component.Home },
  { path: "/detalhar/:id", component: Component.Detail }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
