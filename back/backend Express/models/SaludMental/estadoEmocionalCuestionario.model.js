const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoEmocional = new Schema({
    text: {
        type: String
    },

    emoji: {
        type: String
    },

    motivos: {
        type: Object
    }
}, {
    collection: 'estadoEmocionalCuestionario'
});

module.exports = mongoose.model('estadoEmocionalCuestionario', estadoEmocional);