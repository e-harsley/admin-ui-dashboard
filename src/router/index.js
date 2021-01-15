import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/dashboard/Dashboard";
import Investors from "../views/dashboard/Investors"
import Login from "../views/auth/Login"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/investors",
    name: "Investors",
    component: Investors,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {layout: "auth-layout"},
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
