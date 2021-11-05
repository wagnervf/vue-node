<template>
  <v-container fluid class="">
    <v-row justify="center">
      <v-col cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto ">
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title>Dados Básicos</v-toolbar-title>
            <v-spacer></v-spacer>          
          </v-toolbar>
          <v-form class=" pa-6 white ma-1" ref="form" v-model="valid" lazy-validation>
            <v-alert  class="pa-6" outlined  color="grey lighten-3">
            <v-row justify="space-between">
              <v-text-field
                v-model="form.nomeSimulacao"
                label="Nome da Simulação"
                required
                class="pa-2"
                outlined
              ></v-text-field>

              <v-text-field
                v-model="form.nomePropiedade"
                label="Nome da Propriedade"
                required
                class="pa-2"
                outlined
              ></v-text-field>
            </v-row>

            <v-row class="d-flex justify-space-between my-6">
              <v-select
                v-model="form.estado"
                :items="items"
                label="Estados"
                required
                class="pa-2"
              ></v-select>
              <v-select
                v-model="form.cidade"
                :items="items"
                label="Cidades"
                required
                class="pa-2"
              ></v-select>
            </v-row>

            <v-row class="d-flex justify-end mt-6">
              <v-btn outlined color="error" class="mr-4"> Cancelar </v-btn>

              <v-btn outlined color="success" class="mr-4"> Salvar </v-btn>
            </v-row>
            </v-alert>
            
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Basico Index",
  data: () => ({
    valid: true,
    form: {
      nomeSimulacao:"",
nomePropiedade:"",
estado:"",
cidade:""
    },

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
