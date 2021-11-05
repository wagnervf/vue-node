//Rota de simulacaoController


const express = require('express');
const routerSimulacao = express.Router();
const simulacaoController = require('../controllers/simulacao.controllers');

// Salvar Envento
routerSimulacao.post('/save', simulacaoController.saveTipoSimulacao);

//Editar EventoOOOOOOOOOOOOOOOO


//Excluir Evento


//Buscar Evento
routerSimulacao.get('/find', simulacaoController.getTiposSimulacoes);




module.exports = routerSimulacao;