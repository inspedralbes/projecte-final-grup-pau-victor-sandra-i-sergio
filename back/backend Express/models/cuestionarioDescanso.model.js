const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuestionarioDescanso = new Schema({
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
    collection: 'cuestionarioDescanso'
});

module.exports = mongoose.model('cuestionarioDescanso', cuestionarioDescanso);