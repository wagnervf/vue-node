<template>
  <v-container>
    <v-row
      class="
        mx-auto
        my-12
        pa-0
        elevation-10
        col-xl-6 col-lg-10 col-md-10 col-sm-10 col-xs-10
      "
      justify="center"
    >
      <v-col class="grey lighten-5 py-12">
        <div class="px-6 mt-4 mx-4">
          <p class="text-left mx-6 text-h4 teal--text">Cria Certo Manager</p>
          <p class="text-caption text-left mx-6 text--grey">
            Acesse com seu usuário e senha
          </p>
        </div>

        <v-form ref="form" class="pa-6 ma-6" v-model="valid" lazy-validation>
          <v-text-field
            v-model="loginForm.email"
            label="E-mail"
            name="email"
            prepend-inner-icon="mdi-email"
            :rules="emailRules"
            required
            type="email"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="loginForm.password"
            :rules="passRules"
            required
            id="password"
            label="Password"
            name="password"
            prepend-inner-icon="mdi-lock"
            type="password"
            counter
            outlined
          ></v-text-field>

          <section class="my-4">
            <v-btn
              :disabled="!valid"
              large
              block
              color="teal dark-1"
              dark
              class="mr-4"
              @click="submitLoginUser"
            >
              Acessar
            </v-btn>
          </section>
        </v-form>

        <div class="text-right px-6 mx-6">
          <v-btn
            to="/dashboard/basic-dashboard"
            text
            color="teal "
            class="text-subtitle-2"
          >
            Esqueceu a senha?
          </v-btn>
        </div>
      </v-col>

      <v-col class="teal darken-1 ma-0 pa-0">
        <v-card-text class="white--text mt-12">
          <h1 class="text-center display-1">Seja bem-vindo!</h1>
          <div class="text-center mt-4">
            <p>Sistema Gerenciador da Plataforma Cria Certo</p>
          </div>
        </v-card-text>
        <div class="text-center">
          <v-btn rounded outlined dark @click="step++">Criar Conta</v-btn>
        </div>

        <div class="text-center mt-14">
          <v-btn to="/dashboard/basic-dashboard" text color="white">
            Criar Conta
          </v-btn>

          <v-btn to="/dashboard/basic-dashboard" text color="white">
            Início
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Login.js"></script>

