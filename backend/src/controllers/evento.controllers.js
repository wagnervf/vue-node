//Fuções de  CRUD do Evento

const eventoModel = require('../models/evento.model');



exports.saveEvento = async (req, res) => {
  try {

    const newEvento = new eventoModel(req.body);

    const evento = await newEvento.save();
    res.status(201).json({ message: 'Evento criado com sucesso!', evento });


  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar evento'.error });
  }
};


const query = { descricao: "Festa" };


exports.findEvento = async (req, res) => {
  eventoModel.findOne(query, function (err, evento) {
    if (err) return handleError(err);

    res.status(201).json({ evento });

  
  });
};


/*
exports.findEvento = async (req, res) => {
  eventoModel.find({
    field: query,
  }, (err, docs) => {
    console.log(docs);
    res.status(201).json({ message: 'Evento!', err });

    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (docs.length === 0) {
        console.log("message")
        res.status(404).json({ message: 'Nada foi encontrado' });
      } else {
        res.status(201).json({ message: 'Evento!', docs });
      }
    }


  });
};
*/



