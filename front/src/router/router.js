import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/",
    redirect: "Home/home",
    component: () => import("@/layouts/Layout"),
    children: [
      // Components

      {
        name: "Home",
        path: "Home/home",
        component: () => import("@/views/Home/Home.vue"),
      },
      

      {
        name: "Usuarios",
        path: "Usuarios/Usuarios",
        component: () => import("@/views/Usuarios/Usuarios.vue"),
      },

      {
        name: "Profile",
        path: "Usuarios/profile",
        component: () => import("@/views/Usuarios/Profile.vue"),
      },

      {
        name: "TableSimple",
        path: "Parametros/parametros",
        component: () => import("@/views/Parametros/Parametros.vue"),
      },

      // {
      //   name: "Dashboard",
      //   path: "dashboard/basic-dashboard",
      //   component: () => import("@/views/dashboard/BasicDashboard"),
      // },

      {
        name: "Configuracoes",
        path: "Configuracoes/configuracoes",
        component: () => import("@/views/Configuracoes/Configuracoes.vue"),
      }
    ],
  },
];
export default routes;
