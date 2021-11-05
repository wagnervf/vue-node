<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    mobile-breakpoint="960"
    :mini-variant.sync="mini"
    width="250"
    app
    permanent
    elevation-4
    id="main-sidebar"
    clipped
  >
    <v-sheet color="grey lighten-4" class="pa-4">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

      <v-list-item-content class="mx-0">
        <v-list-item-title class="text-h6"> {{user.name}} </v-list-item-title>
        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-sheet>
    
    <v-divider class="pb-2"></v-divider>

    <ListSidebar />     

    <v-footer justify-end absolute end>
      <v-list-item class="px-0">
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

<script src="./sidebar.js"></script>


