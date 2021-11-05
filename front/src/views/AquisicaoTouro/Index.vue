<template>
  <v-container fluid class="">
    <v-row justify="center">
      <v-col cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title>Aquisição de Touros</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form
            class="pa-6 white ma-1"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-alert class="pa-6" outlined color="grey lighten-3">
              <v-col justify="space-between">
                <v-text-field
                  v-model="form.precoAquisao"
                  label="Preço de Aquisição de Touro"
                  required
                  class="mt-4 pa-2"
                  prefix="R$"
                ></v-text-field>

                <v-text-field
                  v-model="form.despesaCompra"
                  label="Despesas da Compra"
                  required
                  class="mt-4 pa-2 h6"
                  
                  suffix="%"
                ></v-text-field>
            
                <v-text-field
                  v-model="form.DepPeso"
                  label="DEP no Peso à Desmana (240 sias)"
                  required
                  class="mt-4 pa-2"
                  suffix="Kg"
                ></v-text-field>
              </v-col>


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
     valid:true,
    form: {
     precoAquisao: 4200,
despesaCompra: 10,
DepPeso: 5,
    },
   
   
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
