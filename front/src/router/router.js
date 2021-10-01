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
        name: "Usuarios",
        path: "Usuarios/Usuarios",
        component: () => import("@/views/Usuarios/Usuarios"),
      },

      {
        name: "Profile",
        path: "pages/profile",
        component: () => import("@/views/pages/Profile"),
      },

      {
        name: "TableSimple",
        path: "Parametros/parametros-view",
        component: () => import("@/views/Parametros/ParametrosView"),
      },

      {
        name: "Dashboard",
        path: "dashboard/basic-dashboard",
        component: () => import("@/views/dashboard/BasicDashboard"),
      },

      {
        name: "Configuracoes",
        path: "pages/Configuracoes/configuracoes",
        component: () => import("@/views/pages/Configuracoes/Configuracoes"),
      }
    ],
  },
];
export default routes;
