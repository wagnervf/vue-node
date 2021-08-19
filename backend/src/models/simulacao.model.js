
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tiposSimulacoesSchema = new Schema({
  descricao:{
    type: String,
    required: true,
  },
  ativo:{
    type: Boolean,
    require: true,
  },
 
},{
  collection: 'tipos_simulacoes'
});



const TiposSimulacoesModel = mongoose.model('tipos_simulacoes', tiposSimulacoesSchema);
module.exports = TiposSimulacoesModel;