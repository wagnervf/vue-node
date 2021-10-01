//
//Realiza a conexão com com banco usando o mongoose
//

const express = require('express');
const mongoose = require('mongoose');

//Importando a conexão com o DB
const database = require('./db.config');

mongoose.Promise = global.Promise;


// ==> Conexão com o banco de dados
mongoose.connect(database.local.localDataBaseUrl,
  {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log('Base de dados conectada com sucesso!');
  }, (erro) => {
    console.log(`Erro ao conectar com o banco: ${erro}`);
    process.exit();
  });

