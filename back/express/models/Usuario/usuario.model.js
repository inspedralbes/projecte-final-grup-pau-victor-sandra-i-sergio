const mongoose = require('mongoose');
const { options } = require('../../Routes/Descanso');
const Schema = mongoose.Schema;

const usuario = new Schema({
    nombreApellidos: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String
    },

    fotoPerfil: {
        type: String
    },

    datosPersonales:{
        type: Object
    }
}, {
    collection: 'usuario'
});

module.exports = mongoose.model('usuario', usuario);