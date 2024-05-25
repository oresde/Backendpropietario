const mongoose = require('mongoose');
require('dotenv').config();

// funcion para hacer la conexion

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then (()=> console.log("Estamos Conectado Con Mongo DB"))
    .catch((err)=>console.log(err));
}

module.exports = conectarBD;

