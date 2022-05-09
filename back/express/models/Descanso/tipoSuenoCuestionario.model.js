const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoSueno = new Schema({
    tipo: {
        type: String
    },

    img: {
        type: String
    }, 
    
    respuesta: {
        type: String
    }
}, {
    collection: 'tipoSueno'
});

module.exports = mongoose.model('tipoSueno', tipoSueno);