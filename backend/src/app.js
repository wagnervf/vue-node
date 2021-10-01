// Responsável por fazer a chamada da rotas da aplicação

//Importações
const cors = require('cors');
const morgan = require('morgan');

//Principal
const express = require('express');
const app = express();


//habilitando formatos para utilizar nas chamdas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

//Conexão com Banco
const mongooseConnection = require ('./config/mongooseConnection.config');

//Habilitando a conexão com o Banco
app.set('mongosse connection', mongooseConnection);

// Rotas da API:
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');
const eventoRoutes = require('./routes/evento.routes');
const contractsRoutes = require('./routes/contracts.routes');


app.use(index);
app.use('/api/v1', userRoutes);
app.use('/api/v1/evento', eventoRoutes);
app.use('/api/v1/simulacao', require('./routes/simulacao.routes'));
app.use('/api/v1/contracts', contractsRoutes);

//Exportando o app
module.exports = app;
