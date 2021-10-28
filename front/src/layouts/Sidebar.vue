<template>
    <!-- :color="SidebarColor" -->

  <v-navigation-drawer
    v-model="Sidebar_drawer"
    mobile-break-point="960"
    :mini-variant.sync="mini"
    color="grey lighten-3"
    width="230"
    app
    clipped
    permanent
    elevation-10
    dense
    id="main-sidebar"
  >
    <!-- <v-list>
      <v-list-item>
        <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
        
      </v-list-item>
    </v-list> -->
    <v-spacer />

    <v-list class="my-6">
      <v-list-item link>
          <v-list-item-icon> <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon></v-list-item-icon>
         
        <v-list-item-content class="mx-3">
          <v-list-item-title class="text-h6"> John Leider </v-list-item-title>
          <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
        </v-list-item-content>  
      </v-list-item>
    </v-list>


    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :active-class="`teal white--text`"
        link
        dense
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-footer justify-end absolute end>
      <v-list-item class="px-2">
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-list-item-title>
          <span style="font-size: 10px" class="text-center wrap">
            Cria Certo Manager&copy; {{ new Date().getFullYear() }}
          </span>
        </v-list-item-title>
      </v-list-item>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: true,
    mini: false,
    items: [
      {
        title: "Início",
        icon: "mdi-home",
        to: "/Home/home",
      },
      {
        title: "Parâmetros Cria Certo",
        icon: "mdi-database",
        to: "/Parametros/parametros",
      },

      {
        title: "Usuários",
        icon: "mdi-account-multiple",
        to: "/Usuarios/usuarios",
      },

      {
        title: "Perfil",
        icon: "mdi-account",
        to: "/Usuarios/profile",
      },

      {
        title: "Configurações",
        icon: "mdi-cog",
        to: "/Configuracoes/configuracoes",
      },
      {
        title: "Sair do Sistema",
        icon: "mdi-logout",
        to: "/login",
      },
    ],
  }),
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
    },
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    },
  },

  methods: {},
};
</script>
<style lang="scss">
#main-sidebar {
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  .v-navigation-drawer__border {
    display: none;
  }
  .v-list {
    padding: 0px;
  }
  .v-list-item {
    &__icon--text,
    &__icon:first-child {
      justify-content: center;
      text-align: center;
      width: 20px;
    }
  }
}
</style>
