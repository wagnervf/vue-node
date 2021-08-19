<template>
<div>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="ativo"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Tipos de Simulações</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-col cols="12" sm="4" md="4">
          <v-text-field
            hide-details
            label="Filtrar"
            single-line
            v-model="search"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
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
              >Você tem certeza que deseja remover esse item?</v-card-title
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
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
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
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
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

    getTipos() {
      TiposSimulacoesServices.getTiposSimulacoes().then((resposta) => {
        this.desserts = this.mapedMenu(resposta.tipos);
        console.log(resposta.tipos);
      });
    },

    salvar(value) {
      TiposSimulacoesServices.setTiposSimulacoes(value).then((resposta) => {
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
      } else {
        this.desserts.push(this.editedItem);
        this.salvar(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
