
// Model de Evento

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
  descricao:{
    type: String,
    required: true,
  },
  data:{
    type: Date,
    require: true,
  },
  user_id:{
    type: String,
    required: true,
  },
},{
  collection: 'eventos'
});



const EventoModel = mongoose.model('eventos', eventoSchema);
module.exports = EventoModel;