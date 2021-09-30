<template>
  <v-card class="mx-auto col-12">
    <v-card-title>
      Lista de Parâmetros do Cria Certo
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn text color="primary" @click="goToPage(item.link)">
          Acessar
          <v-icon right> mdi-launch </v-icon>

        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Listas",
          align: "start",
          sortable: false,
          value: "lista",
        },
        { text: "Descrição", value: "descricao" },

        { text: "Acesso", value: "actions", sortable: false },
      ],
      desserts: [
        {
          lista: "Simulações",
          descricao: 159,
          link: "/pages/configuracoes",
        },
        {
          lista: "Usuarios",
          descricao: 237,
          link: "/Usuarios/usuarios",
        },
        {
          lista: "Dasboard",
          descricao: 262,
          link: "/dashboard/basic-dashboard",
        },
        {
          lista: "Usuarios",
          descricao: 305,
          link: "/Usuarios/usuarios",
        },
      ],
    };
  },

  methods: {
    goToPage(page) {
      console.log(page);
      this.$router.push(page);
    },

    editItem() {
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },

    deleteItem() {
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialogDelete = true
    },
  },
};
</script>