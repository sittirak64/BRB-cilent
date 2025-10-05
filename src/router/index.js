import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../Page/Homepage.vue";
import Projects from "../Page/Projects.vue";

const routes = [
    {
    path: "/homepage",
    name: "homepage",
    component: Homepage,
    },

    {
    path: "/projects",
    name: "projects",
    component: Projects,
    }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
