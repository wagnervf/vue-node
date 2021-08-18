//Rota de eventos


const express = require('express');
const routerEvento = express.Router();
const eventoController = require('../controllers/evento.controllers');

// Salvar Envento
routerEvento.post('/save', eventoController.saveEvento);

//Editar Evento


//Excluir Evento


//Buscar Evento
routerEvento.get('/find', eventoController.findEvento);




module.exports = routerEvento;