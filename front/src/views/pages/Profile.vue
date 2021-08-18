<template>
  <v-container fluid class="down-top-padding ">
    <v-row align="center" justify="center" class="align-center">   
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Meus Dados</h3>
            <h6 class="subtitle-2 font-weight-light">Atualize seus dados</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              v-model="dtext"
              label="Nome"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              type="email"
              v-model="emailtext"
              label="E-mail"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="password"
              filled
              background-color="transparent"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Senha"
              hint="No mínimo 8 caracteres"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-textarea
              filled
              name="input-7-4"
              rows="3"
              label="Informações"
              value
              background-color="transparent"
            ></v-textarea>
            <div class="mt-4">
              <v-select :items="items" filled label="Selecione o País" background-color="transparent"></v-select>
            </div>
            <v-btn class="text-capitalize mt-5 element-0" color="success">Salvar</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    dtext: "George deo",
    emailtext: "",
    password: "",
    disableinput: "",
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    items: ["Brasil", "EUA", "Canada"]
  }),
  components: {}
};
</script>
