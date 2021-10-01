
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  contractsSchema = new Schema({
  
    id: {
      type: Number,
      required: true,
    },
    descricao:{
      type: String,
      required: true,
    },
    valor:{
      type: Number,
      require: true,
    },

},{
  collection: 'contracts'
});



const ContractsModel = mongoose.model('monta_natural', contractsSchema);
module.exports =  ContractsModel;