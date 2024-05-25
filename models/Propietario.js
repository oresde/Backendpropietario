const mongoose = require('mongoose');

// Este modelo que vamos hacer debe ser igual a la base de datos BD

const propietarioSchema = mongoose.Schema({

    //objetos
    
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    apartamento: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
 
},{versionkey: false });

//exportar 

module.exports = mongoose.model('Propietario', propietarioSchema);
