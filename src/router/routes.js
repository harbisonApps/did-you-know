const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/home", component: () => import("pages/Home.vue") },
      { path: "/random", component: () => import("pages/Random.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
