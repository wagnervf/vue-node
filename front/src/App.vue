<template>
  <v-app
   
  >
   <!-- id="materialpro"
    :class="
      `${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`
    " -->
    <router-view />
  </v-app>
</template>
<style>

/* .v-application--wrap {
  min-height: 100% !important;
} */

</style>

<script>
export default {
  name: "App",

  components: {},
};
</script>
