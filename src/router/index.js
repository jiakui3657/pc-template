import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, form, next) => {
  window.console.log(to, form, next);
  if (to.path == "/" || to.path == "/login") {
    next();
  } else {
    next();
  }
});

export default router;
