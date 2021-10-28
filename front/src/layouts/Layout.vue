<template>
  <v-app id="inspire">
    <Header></Header>
    <Sidebar></Sidebar>
    <v-main class="grey lighten-3 pa-4">   
      <router-view />
    </v-main>
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
