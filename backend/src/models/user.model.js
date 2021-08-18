//Arquivo responsável pelo modulo de classe User


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 50, required: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: { type: String, required: true }
    }
  ]
}, {
  timestamps: true,

  // Collection que será salva no mongo - TABELA
  collection: 'users'
});


//Criptografia
//Fazer o hash da senha antes de salvar
userSchema.pre('save', async function (next) {
  const user = this;

  //se o password do usuário estiver sendo alterado, encripta ela
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 6);
  }
  next();
});



// Criando o token jwt do usuário
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  //Utiliza o id, name e email para gerar um token e adicionar o campo 'secret' para compor o token do user
  // O secret é uma string usada para gerar o token, nesse caso é a password do user, está configurado em db.config.js
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret');

  user.tokens = user.tokens.concat({ token });
  //
  await user.save();
  return token;
};



//pesquisa usando o email do user
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log('findByCredentials : ' .concat(user));

  if (!user || (user == null)) {
    throw new Error({ error: 'Login inválido!' });
  }

  //Confere se a senha existe
  //Compara a senha informada com a senha do usuário que foi encotrado na consulta User.findOne({ email });
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error({ error: 'Senha inválido!' });
  }

  // caso não contenha nenhum erro retorna o user
  return user;
};



const User = mongoose.model('User', userSchema);

module.exports = User;