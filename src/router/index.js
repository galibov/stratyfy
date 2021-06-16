import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/profile/:username",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    beforeEnter: async (to, from, next) => {
      try {
        await store.dispatch("getProfileData", to.params.username);
        next();
      } catch (e) {
        next({ name: "Auth" });
      }
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "UserList" */ "../views/UsersList.vue"),
    beforeEnter: async (to, from, next) => {
      try {
        await store.dispatch("getUsers");
        next();
      } catch (e) {
        next({ name: "Home" });
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
