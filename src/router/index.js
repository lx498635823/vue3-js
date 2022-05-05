import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  //创建历史记录模式的路由，需要引入，并且需要后端用nginx进行转发
  // history: createWebHistory(),
  //创建“哈希值”历史记录模式的路由
  history: createWebHashHistory(),

  routes,
});

export default router;
