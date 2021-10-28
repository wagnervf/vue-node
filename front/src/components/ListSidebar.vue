<template>
  <div>
    <v-list dense nav >
      <template v-for="item in items">
        <v-list-group
          :key="item.title"
          v-if="item.items !== undefined"
          :active-class="`teal--text`"
          v-model="item.active"
          no-action
          link
          dense
          class="py-1"
        >
          <template v-slot:activator>
            <v-list-item-icon left>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :active-class="`teal--text`"
            class="pl-8"
            link
            router
            :to="subItem.to"
            dense
          >
            <v-list-item-icon left>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item
          v-else
          :key="item.title"
          link
          router
          :to="item.to"
          :active-class="`teal--text`"
          dense
        >
          <v-list-item-icon left>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <v-list nav dense class="mt-12">
      <v-divider></v-divider>
      <v-list-item to="/login" nav dense>
        <v-list-item-avatar>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Sair do Sistema</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Início",
        icon: "mdi-home",
        to: "/Home/home",
      },
       
      {
        title: "Parâmetros Cria Certo",
        icon: "mdi-database",
        items: [
          {
            title: "Simulações",
            icon: "mdi-cog",
            to: "/Configuracoes/configuracoes",
          },
          {
            title: "Test2",
            icon: "mdi-chart-bubble",
            to: "/test2",
          },
          {
            title: "Test2",
            icon: "mdi-chart-bubble",
            to: "/test2",
          },
        ],
      },
     

      {
        title: "Configurações",
        icon: "mdi-cog",
        items: [
          {
            title: "Usuários",
            icon: "mdi-account-multiple",
            to: "/Usuarios/usuarios",
          },
          {
        title: "Meu Perfil",
        icon: "mdi-account",
        to: "/Usuarios/profile",
      },
        ],
      },
    ],
    navLinks: [
      { icon: "mdi-home", text: "Início", to: "/Home/home" },

      {
        text: "Parâmetros Cria Certo",
        icon: "mdi-database",
        to: "/Parametros/parametros",
        subLinks: [
          { text: "Add Driver", to: "/drivers/add" },
          { text: "Add Driver", to: "/drivers/add" },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss">
#main-sidebar {
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  .v-navigation-drawer__border {
    display: none;
  }
  .v-list-group__items.v-application--is-ltr {
    padding-left: 10px !important;
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

    .v-list-item__icon {
      margin: 6px 5px 0px 0px;
    }
  }
}
</style>