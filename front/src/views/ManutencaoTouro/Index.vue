<template>
  <v-container fluid class="">
    <v-row justify="center">
      <v-col cols="12" lg="12" justify-center flex>
        <v-card class="mx-auto">
          <v-toolbar color="grey lighten-3" elevation="0">
            <v-toolbar-title>Dados Técnicos do Rebanho</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form
            class="pa-6 white ma-1"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-alert class="pa-6" outlined color="grey lighten-3">
             <v-row>
                <v-col justify="space-between">
                <v-text-field
                  v-model="form.exameAdrologico"
                  label="Exame Andrológico"
                  required
                  class="pa-2"
                  suffix="R$/cab/ano"
                ></v-text-field>

                <v-text-field
                  v-model="form.aluguelPasto"
                  label="Aluguel Pasto"
                  required
                  class="pa-2"
                  suffix="R$/cab/ano"
                ></v-text-field>
            
                <v-text-field
                  v-model="form.salMineral"
                  label="Sal Mineral"
                  required
                  class="pa-2"
                                suffix="R$/cab/ano"

                ></v-text-field>

                <v-text-field
                  v-model="form.racoes"
                  label="Rações"
                  required
                  class="pa-2"
                  suffix="R$/cab/ano"
                ></v-text-field>
             
                <v-text-field
                  v-model="form.produtosVeterinarios"
                  label="Produtos Veterinarios"
                  required
                  class="pa-2"
                  suffix="R$/cab/ano"
                ></v-text-field>

                <v-text-field
                  v-model="form.jurosAnuais"
                  label="Juros Anuais"
                  required
                  class="pa-2"
                  suffix="%"
                ></v-text-field>
              
               

                <v-text-field
                  v-model="form.valorVendaTouro"
                  label="Juros Anuais"
                  prefix="R$"
                  required
                  class="pa-2"
                  
                ></v-text-field>
              </v-col>
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
  name: "Manutencao_Touro",
  data: () => ({
    valid:true,
    form: {
      
      exameAdrologico: 100,
      aluguelPasto: 336,
      salMineral: 35.4,
      racoes: 264.57,
      produtosVeterinarios: 9.66,
      jurosAnuais: 6,
      valorVendaTouro: 3000,
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
