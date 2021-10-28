<template>
<v-container fluid class="down-top-padding">
  <v-card class="mx-auto col-12">
    <v-card-title>
      Lista de Parâmetros do Cria Certo
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn text color="primary" @click="goToPage(item.link)">
          Acessar
          <v-icon right> mdi-arrow-right </v-icon>

        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</v-container>
</template>
<script src="./Parametros.js"></script>