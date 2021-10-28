

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
          lista: "Tipo de Gados",
          descricao: 262,
          link: "/dashboard/basic-dashboard",
        },
        {
          lista: "Vacinas",
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
