//Rota de simulacaoController


const express = require('express');
const routerContract = express.Router();
const contractController = require('../controllers/contract.controllers');

// Salvar Envento
//routerSimulacao.post('/save', contractController.saveTipoSimulacao);

//Editar Evento


//Excluir Evento


//Buscar Evento
routerContract.get('/find', contractController.getContract);

module.exports = routerContract;