/*
// Arquivo responsável por confirmar se um determinado(a) User tem autorização
//
*/


const jwt = require('jsonwebtoken');


//Pegar o TOken do usuário e decodificar e autorizá-lo

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);

    //secret está sendo usado no banco
    const decoded = jwt.verify(token, 'secret');


    
    console.log('*************');
    console.log(decoded);

    // passando o token codificado para o corpo da requisição
    req.userData = decoded;

    //para retornar
    next();
    //
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Fala na Autenticação!' });
  }



};

