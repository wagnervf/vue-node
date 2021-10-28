<template>
  <v-app id="inspire">
    <Header></Header>
    <Sidebar></Sidebar>
    <v-content >
      <!-- <v-breadcrumbs
      :items="items"
      divider="/"
      class="grey lighten-5"
      
    ></v-breadcrumbs> -->

      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./Header";
import Sidebar from "./Sidebar";

import { mapState, mapMutations } from "vuex";
export default {
  name: "Layout",

  components: {
    Header,
    Sidebar,
  },

  props: {
    source: String,
  },
  data: () => ({
    expandOnHover: false,
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  computed: {
    ...mapState(["Customizer_drawer"]),
  },

  methods: {
    ...mapMutations({
      setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER",
    }),
  },
};
</script>
