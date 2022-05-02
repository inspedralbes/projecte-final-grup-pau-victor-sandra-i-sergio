const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuestionarioSaludMental = new Schema({
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
    collection: 'cuestionarioSaludMental'
});

module.exports = mongoose.model('cuestionarioSaludMental', cuestionarioSaludMental);