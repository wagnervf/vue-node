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
                  v-model="form.vacasCobrir"
                  label="Nº de Vacas a Cobrir"
                  required
                  class="pa-2"
                  suffix="Cabeças"
                ></v-text-field>

                <v-text-field
                  v-model="form.numTouro"
                  label="Nº de Touros"
                  required
                  class="pa-2"
                  suffix="Cabeças"
                ></v-text-field>
              

                <v-text-field
                  v-model="form.vidaTouro"
                  label="Vida Últil do Touro"
                  required
                  class="pa-2"
                  suffix="Anos"
                ></v-text-field>

                <v-text-field
                  v-model="form.taxaPrenhez"
                  label="Taxa de Prenhez"
                  required
                  class="pa-2"
                  suffix="%"
                ></v-text-field>
           
                <v-text-field
                  v-model="form.mortalidadeDesmama"
                  label="Mortalidade do Nascimento à Desmama"
                  required
                  class="pa-2"
                  suffix="%"
                ></v-text-field>

                <v-text-field
                  v-model="form.precoKgBezerro"
                  label="Preço kg do Bezerro"
                  required
                  class="pa-2"
                  prefix="R$"
                ></v-text-field>
            
                <v-select
                  v-model="form.touro"
                  :items="racasTouro"
                  label="Raça do Touro"
                  required
                  class="pa-2"
                  outlined
                ></v-select>

                <v-text-field
                  v-model="form.pesoDesmama"
                  label="Peso à Desmana da Fazenda"
                  required
                  class="pa-2"
                  suffix="Kg"
                ></v-text-field>
              </v-col>
              </v-row>

              <v-row justify="space-between">
                <v-card class="mx-auto col-12">                  
                  <v-card-text>
                    <v-autocomplete
                      v-model="model"
                      :hint="
                        !isEditing
                          ? 'Click the icon to edit'
                          : 'Click the icon to save'
                      "
                      :items="states"
                      :readonly="!isEditing"
                      label="Raças de Touros"
                      persistent-hint
                      prepend-icon="mdi-city"
                    >
                      <template v-slot:append-outer>
                        <v-slide-x-reverse-transition mode="out-in">
                          <v-icon
                            :key="`icon-${isEditing}`"
                            :color="isEditing ? 'success' : 'info'"
                            @click="isEditing = !isEditing"
                            v-text="
                              isEditing
                                ? 'mdi-check-outline'
                                : 'mdi-circle-edit-outline'
                            "
                          ></v-icon>
                        </v-slide-x-reverse-transition>
                      </template>
                    </v-autocomplete>
                  </v-card-text>
                </v-card>
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
   
    isEditing: false,
    model: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
    ],
    form: {
      touro: "",
      vacasCobrir: 1000,
numTouro:25,
vidaTouro:6,
taxaPrenhez:80,
mortalidadeDesmama:3,
precoKgBezerro:6,
pesoDesmama:180
    },
    racasTouro: [
      "Aberdeen Angus",
      "Bonsmara",
      "Braford",
      "Brahman",
      "Brangus",
      "Canchim",
      "Caracu",
      "Charolês",
      "Devon",
      "Guzerá",
      "Hereford",
      "Limousin",
      "Nelore",
      "Red Angus",
      "Red Brahman",
      "Red Brangus",
      "Senepol",
      "Shorthorn",
      "Simental",
      "Tabapuã",
      "Wagyu",
      "Outras",
    ],
    valid: true,
    name: "",

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
