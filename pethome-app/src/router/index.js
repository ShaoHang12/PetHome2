import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Cart from "@/views/Cart";
import Cate from "@/views/Cate";
import My from "@/views/My";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      showTab: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      showTab: true,
    },
  },
  {
    path: "/cate",
    name: "cate",
    component: Cate,
    meta: {
      showTab: true,
    },
  },
  {
    path: "/my",
    name: "my",
    component: My,
    meta: {
      showTab: true,
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
