<template>
  <v-container class="grey lighten-5" fluid>
    <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="4">
          <v-combobox
            v-model="select"
            :items="items"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
        <v-col cols="4">
          <v-combobox
            v-model="select2"
            :items="items2"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
        <v-col cols="4">
          <v-combobox
            v-model="select"
            :items="items"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row>
      <v-container fluid>
    <v-checkbox v-model="checkbox1" label="Habilitar Valores"></v-checkbox>
    <v-checkbox v-model="checkbox2" label="Aceitar o Termos"></v-checkbox>
  </v-container>
      </v-row>


      <v-row>
      <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            label="First name"
            required
            outlined
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :counter="10"
            label="Last name"
            required
            outlined
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
            outlined
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
      </v-row>

      <v-row>
        <a class="nav-link" @click="logOutUser">Log Out</a>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ user.name }}</li>
          <li class="list-group-item">E-mail: {{ user.email }}</li>
        </ul>
      </v-row>
    </v-col>

    </v-row>
  </v-container>
</template>

<script src="./Home.js"></script>

