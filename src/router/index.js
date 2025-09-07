import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home - 24s-Studio" },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: { title: "Services - 24s-Studio" },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: { title: "Portfolio - 24s-Studio" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About - 24s-Studio" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { title: "Contact - 24s-Studio" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: prefersReduced ? "auto" : "smooth" };
    }
  },
});

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "24s-Studio";
  next();
});

export default router;
