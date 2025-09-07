import { createRouter, createWebHistory } from "vue-router";

// Lazy-loaded route components for code-splitting
const Home = () => import("../pages/Home.vue");
const Services = () => import("../pages/Services.vue");
const Portfolio = () => import("../pages/Portfolio.vue");
const About = () => import("../pages/About.vue");
const Contact = () => import("../pages/Contact.vue");

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
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Prefetch helper for hover/idle
export const prefetchRoute = (path) => {
  const match = routes.find((r) => r.path === path);
  const loader = match && typeof match.component === "function" ? match.component : null;
  if (loader) {
    // Fire-and-forget import
    loader();
  }
};

// Prefetch secondary routes when the browser is idle
const prefetchOnIdle = () => {
  ["/services", "/portfolio", "/about", "/contact"].forEach((p) => prefetchRoute(p));
};

if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(prefetchOnIdle);
  } else {
    setTimeout(prefetchOnIdle, 1500);
  }
}

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "24s-Studio";
  next();
});

export default router;
