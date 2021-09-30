<template>
  <v-container class="blue-grey" fluid>
    <v-row align="center" justify="center" class="align-center full-width">
      <v-col cols="12" sm="8" md="4" >
        <v-card class="elevation-6 align-center">
          <v-toolbar light flat>
            <v-spacer></v-spacer>
            <v-toolbar-title>
              <span >Cria Certo Manager</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
          <v-divider></v-divider>
          <div class="pa-6">
            <v-card-text class="mb-4">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="loginForm.email"
                  label="E-mail"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  :rules="emailRules"
                  required
                  type="email"
                  filled
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
                  filled
                ></v-text-field>
              </v-form>
              <div column class="text-right py-1">
                <v-btn small text color="blue accent-4">Esqueci a senha</v-btn>
              </div>
            </v-card-text>

            <v-card-actions class="py-3">
              <v-btn
                :disabled="!valid"
                large
                block
                color="primary"
                class="mr-4"
                @click="submitLoginUser"
              >
                Acessar
              </v-btn>
            </v-card-actions>

            <div column class="text-center my-3 py-3">
              <v-btn to="/dashboard/basic-dashboard" text color="deep-purple accent-4">
                Criar Conta
              </v-btn>

              <v-btn to="/dashboard/basic-dashboard" text color="deep-purple accent-4">
                Início
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- <form
          class="text-center border border-primary p-5"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <div class="form-group">
            <input
              type="text"
              id="email"
              name="email"
              class="form-control mb-5"
              placeholder="Digite seu E-mail"
              v-model="loginForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.email.required"
              class="invalid-feedback"
            >
              O campo e-mail é obrigatório!
            </div>
          </div>

          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              class="form-control mb-5"
              placeholder="Digite sua Senha"
              v-model="loginForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
            </div>
          </div>
          <p class="center">
            Não tem uma conta cadastrada?<router-link to="/register">
              Cadastre Aqui</router-link
            >
          </p>
          <center>
            <button
              @click="submitLoginUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Entrar
            </button>
          </center>
        </form> -->
</template>

<script src="./Login.js"></script>

