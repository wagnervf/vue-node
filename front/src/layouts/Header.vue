<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    max-height="60"
    height="60"
    color="teal lighten-1"
    class="elevation-1"
    dark
    
  >
    <v-toolbar-title class="align-center d-flex ">
      <span class="logo-icon">
        <v-icon>mdi-cogs</v-icon>
        Cria Certo
      </span>
      <span  class="font-weight-bold text-md ml-2 "> Manager </span>
    </v-toolbar-title>

    <v-spacer />

    <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
//import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userprofile: [
      { title: "Meu Perfil" },
      { title: "Meus Relátorios" },
      { title: "Mensagens" },
      { title: "Configurações" },
      { title: "Sair" },
    ],
    href() {
      return undefined;
    },
  }),

  // computed: {
  //   ...mapState(["Sidebar_drawer"]),
  // },

  // methods: {
  //   ...mapMutations({
  //     setSidebarDrawer: "SET_SIDEBAR_DRAWER",
  //   }),
  // },
};
</script>