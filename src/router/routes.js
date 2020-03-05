const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "/auth", component: () => import("pages/Auth.vue") },
      { path: "/admin", name:'admin-page', component: () => import("pages/Admin.vue") },
      { path: "/admin/edit/:slug", props: true, name:'edit-fact', component: () => import("components/Admin/EditFact.vue") },
      { path: "/", component: () => import("pages/Home.vue") },
      { path: "fact/:id", name: 'fact-page', component: () => import("pages/Fact.vue") },
      { path: "/", component: () => import("pages/Home.vue") },
      { path: "/random", component: () => import("pages/Random.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/help", component: () => import("pages/Help.vue") },
      { path: "/accessibility", component: () => import("pages/Accessibility.vue") },
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
