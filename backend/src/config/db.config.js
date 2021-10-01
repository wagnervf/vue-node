//Arquivo ue realiza a conexão com o banco, a tring do banco está no .env


const dotenv = require('dotenv');

dotenv.config();


module.exports ={
  local: {
    localDataBaseUrl : process.env.DB_URI,
    secret: "admin"
  }
}