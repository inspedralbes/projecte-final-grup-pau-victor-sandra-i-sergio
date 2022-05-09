const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoEmocional = new Schema({
    value: {
        type: String
    },

    emoji: {
        type: String
    },

    motivos: {
        type: Object
    },
    
    respuestas:{
        type: Object
    }
}, {
    collection: 'estadoEmocional'
});

module.exports = mongoose.model('estadoEmocionalCuestionario', estadoEmocional);