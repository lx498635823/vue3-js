import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    hidden:true,
    meta:{
      title:"登录",
      icon: "home"
    },
    component: () => import("../views/login/Login.vue"),
    children: []
  },
  {
    path: "/index",
    name: "Index",
    meta:{
      title:"主页",
      icon: "home"
    },
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页"
        },
        component: () => import("../views/Home/index.vue")
      }
    ]
  },
  {
    path: "/register",
    name: "Register",
    hidden:true,
    meta:{
      title:"注册"
    },
    component: () => import("../views/Register/Register.vue"),
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
