import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import Browse from "../views/BrowsePage.vue";
import DetailsPage from "../views/DetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/browse",
    name: "Browse",
    component: Browse,
  },
  {
    path: "/details/:id",
    name: "DetailsPage",
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
