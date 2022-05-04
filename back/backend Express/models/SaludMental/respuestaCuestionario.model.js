const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const respuestaCuestionario = new Schema({
    estado: {
        type: String
    },

    motivo: {
        type: String
    },

    usuario: {
        type: String
    },

    diaHora: {
        type: Date
    }
}, {
    collection: 'respuestaCuestionarioSaludMental'
});

module.exports = mongoose.model('respuestaCuestionarioSaludMental', respuestaCuestionario);