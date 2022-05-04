const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respuestaCuestionario = new Schema({
    descripcionSueno: {
        type: Array
    },

    usuario: {
        type: String
    },

    diaHora: {
        type: Date
    }
}, {
    collection: 'respuestaCuestionarioDescanso'
});

module.exports = mongoose.model('respuestaCuestionarioDescanso', respuestaCuestionario);