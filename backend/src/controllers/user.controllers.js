// Funções para o CRUD


const User = require('../models/user.model');


// Método de registro do usuário
// Método POST criado em user.routes userController.registerNewUser
exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });
    console.log(isUser);

    //User já existe
    if (isUser.length > 1) {
      return res.status(409).json({ message: 'Erro! Esse e-mail já encontra-se em uso!' });
    }

    //Corpo da requisição
    const newUser = new User(req.body);

    //Método do moogose para salvar os dados
    //Salvará os dados do user auth
    //Save vem do mongosse
    const user = await newUser.save();

    //Método que gerará um token
    // Método vindo de User.model
    const token = await newUser.generateAuthToken();

    res.status(201).json({ message: 'Usuário criado com sucesso!', user, token });

  } catch (error) {
    res.status(400).json({ error: error });
  }
};


exports.loginUser = async (req, res) => {
  
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);


    //
    if (!user || user == null) {
    res.status(401).send({ error: 'Erro ao realizar o Login! Verifque a sua conta' });
    }
    //
    const token = await user.generateAuthToken();
    res.status(201).json({ message: 'Usuário(a) logado com sucesso!', user, token });
    //
  } catch (err) { 
    res.status(401).send({ err: 'Erro ao realizar o Login! Verifque a sua conta' });
  //  res.status(400).json({ err: err });
  }

};

exports.returnUserProfile = async (req, res) => { 
  //Esperando o token decodificado do auth.js
  await res.json(req.userData);

  
};
