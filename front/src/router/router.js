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
        name: "Novo Usuario",
        path: "Usuarios/Add",
        component: () => import("@/views/Usuarios/Add.vue"),
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
      {
        name: "Sobre",
        path: "Sobre/sobre",
        component: () => import("@/views/Sobre/Sobre.vue"),
      },
     
      {
        name: "Basico",
        path: "Basico/index",
        component: () => import("@/views/Basico/Index.vue"),
      },
      {
        name: "Dados Rebanho",
        path: "Rebanho/index",
        component: () => import("@/views/Rebanho/Index.vue"),
      },
      {
        name: "Aquisicao Touro",
        path: "aquisicaotouro/index",
        component: () => import("@/views/AquisicaoTouro/Index.vue"),
      },
      {
        name: "Manutencao Touro",
        path: "manutencaotouro/index",
        component: () => import("@/views/ManutencaoTouro/Index.vue"),
      },

      {
        name: "Configuracoes",
        path: "Configuracoes/configuracoes",
        component: () => import("@/views/Configuracoes/Configuracoes.vue"),
      }
    ],
  },
];
export default routes;
