import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../Page/Homepage.vue";
import Projects from "../Page/Projects.vue";
import About from "../Page/About.vue";

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/homepage",
  },

  {
    path: "/homepage",
    name: "homepage",
    component: Homepage,
  },

  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
