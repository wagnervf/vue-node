import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/pages/Login"),
  },
  {
    path: "/",
    redirect: "dashboard/basic-dashboard",
    component: () => import("@/layouts/Layout"),
    children: [
      // Components

      {
        name: "Relatórios",
        path: "pages/chart",
        component: () => import("@/views/pages/Chart"),
      },

      {
        name: "Alerts",
        path: "pages/alerts",
        component: () => import("@/views/pages/Alerts"),
      },

      {
        name: "Profile",
        path: "pages/profile",
        component: () => import("@/views/pages/Profile"),
      },

      {
        name: "TableSimple",
        path: "pages/tables-simple",
        component: () => import("@/views/pages/TableSimple"),
      },

      {
        name: "Dashboard",
        path: "dashboard/basic-dashboard",
        component: () => import("@/views/dashboard/BasicDashboard"),
      },

      {
        name: "Configuracoes",
        path: "pages/configuracoes",
        component: () => import("@/views/pages/Configuracoes"),
      }
    ],
  },
];
export default routes;
