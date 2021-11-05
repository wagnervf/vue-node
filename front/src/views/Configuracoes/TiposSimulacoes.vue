<template>
  <div>
    <div>
      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
      <div>{{ currentRouteName }}</div>

      {{ this.$router.history.current.path }}
    </div>

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="ativo"
      class="elevation-1 col-12"
      :search="search"
    >
      <template v-slot:top>
        <div class="mb-4">
          <v-row class="ma-0">
            <v-col cols="12" class="grey lighten-3 pa-3">
              <h2>Tipos de Simulações</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="px-6 py-4">
              <v-text-field
                hide-details
                label="Filtrar"
                single-line
                v-model="search"
              ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="px-6 py-4" cols="3" justify="end">
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="teal"
                    dark
                    class="ma-2 mt-4"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon left>mdi-plus</v-icon>
                    Adicionar Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="8">
                          <v-text-field
                            v-model="editedItem.descricao"
                            label="Descricao"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-switch
                            v-model="editedItem.ativo"
                            label="Ativo"
                          ></v-switch>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Salvar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Você tem certeza que deseja remover esse
                    item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancelar</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >Salvar</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
      </template>

      <template v-slot:[`item.descricao`]="{ item }">
        <span class="text-subtitle-2"> {{ item.descricao }}</span>
      </template>     
      <template v-slot:[`item.ativo`]="{ item }">
        <v-switch v-model="item.ativo" disabled></v-switch>
      </template>

      <template v-slot:[`header.actions`]="{ header }">
        <div class="d-flex justify-end mr-8">
          <span class="text-subtitle-2"> {{ header.text }}</span>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex justify-end mr-3">
          <v-btn fab text small color="primary mr-1" @click="editItem(item)">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
          <v-btn fab text small color="red mr-1" @click="deleteItem(item)">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ textSnackbar }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import TiposSimulacoesServices from "@/services/TiposSimulacoes";

export default {
  data: () => ({
    snackbar: false,
    textSnackbar: "",
    timeout: 5000,
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      // { text: "Id", value: "id" },
      { text: "Descrição", value: "descricao", align: "start" },
      { text: "Ativo", value: "ativo", sortable: true },
      { text: "Ações", value: "actions", sortable: false },
    ],

    desserts: [],
    editedIndex: -1,
    editedItem: {
      descricao: "",
      ativo: true,
    },
    defaultItem: {
      descricao: "",
      ativo: true,
    },
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
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
    currentRouteName() {
      return this.$route.name;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.getTipos();
    },
    getColor(value) {
      if (value) return "teal";
      else return "red";
    },

    getTipos() {
      //  TiposSimulacoesServices.getContractsMontaNatural().then((resposta) => {
      TiposSimulacoesServices.getTiposSimulacoes().then((resposta) => {
     //   console.log(resposta);
        this.desserts = this.mapedMenu(resposta.tipos);
     //   console.log(resposta.tipos);
      });
    },

    update(value) {    
     // console.log(value)
       TiposSimulacoesServices.updateTiposSimulacoes(value.id, value).then((resposta) => {
        this.snackbar = true;
        console.log(resposta);
        if (resposta.status == 201) {
          this.textSnackbar = resposta.data.message;
          return;
        }
        this.textSnackbar = resposta.data.error;
      });
    },


    salvar(value) {
      TiposSimulacoesServices.saveTiposSimulacoes(value).then((resposta) => {
        this.snackbar = true;
        console.log(resposta);
        if (resposta.status == 201) {
          this.textSnackbar = resposta.data.message;
          return;
        }
        this.textSnackbar = resposta.data.error;
      });
    },

    mapedMenu(value) {
      return value.map((val) => ({
        id: val._id,
        descricao: val.descricao,
        ativo: val.ativo,
      }));
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
     
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.update(this.editedItem);
         
      } else {
        this.desserts.push(this.editedItem);
        this.salvar(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss">
.v-data-table__wrapper {
  border: thin solid rgba(0, 0, 0, 0.12);
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 16px;
  color: rgb(151, 151, 151);
}

</style>