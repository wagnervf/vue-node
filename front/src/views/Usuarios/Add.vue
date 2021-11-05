<template>
  <v-container fluid class="down-top-padding ">
    <v-row align="center" justify="center" class="align-center">   
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Novo Usuário</h3>
            <h6 class="subtitle-2 font-weight-light">Informe os dados do usuário</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field
              v-model="add.nome"
              label="Nome"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              type="email"
              v-model="add.email"
              label="E-mail"
              filled
              background-color="transparent"
            ></v-text-field>
            <v-text-field
              v-model="add.password"
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
            <div class="mt-4">
              <v-select :items="add.items" filled label="Perfil" background-color="transparent"></v-select>
            </div>
            <v-row no-gutters justify="space-between">
              <v-btn 
              text 
              class="text-capitalize mt-5 element-0" color="error"
              to="/Usuarios/usuarios"
              >
                Cancelar
                </v-btn>
            <v-btn class="text-capitalize mt-5 element-0" color="success">Salvar</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <pre>
      {{add}}
    </pre>
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    add :{
      nome: "",
      email: "",
      password: "",
      items: ["Visualizar", "Editar", "Admin"]
    },
    
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    
  }),
  components: {}
};
</script>
