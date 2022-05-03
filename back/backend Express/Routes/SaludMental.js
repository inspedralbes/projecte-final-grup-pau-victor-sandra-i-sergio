const express = require('express');
const app = express();
const SaludMental = express.Router();
const CuestionarioSaludMental = require('../models/cuestionarioSaludMental.model');

// GET - OBTENER TODAS RESPUESTAS AL CUESTIONARIO

SaludMental.route('/').get(function(req, res) {
    CuestionarioSaludMental.find(function(err, resultado) {
        if (err) {
            console.log(err);
        } else {
            res.json({ "respuestas": resultado });
        }
    });
});



// POST - RESPONDER EL CUESTIONARIO

SaludMental.route('/respuesta-cuestionario').post((req, res) => {
    let datos = req.body;
    if (Object.keys(datos).length != 3) { // Solo se pasan 3 campos
        res.status(500);
        res.json({ 'status': false, 'msg': 'Error! Falta/Sobra algún campo' });
    } else {
        if (typeof datos.usuario !== 'string' || typeof datos.estado !== 'string' || typeof datos.motivo !== 'string') { // Todos los campos son strings 
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error! Dades enviades en un altre format' });
        } else {
            if (datos.usuario == "" || datos.estado == "" || datos.motivo == "") { // Si algun campo esta vacio, no es valido 
                res.status(500)
                res.json({ 'status': false, 'msg': 'Error! Algun dels camps es incorrecte o no conte informació' });
            } else { // Todo bien
                datos.diaHora = new Date();
                const cuestionarioSaludMental = new CuestionarioSaludMental(datos);
                cuestionarioSaludMental.save();
                res.status(201)
                res.json({ 'status': true, 'msg': 'Informacion guardada' });
            }
        }
    }
});

module.exports = SaludMental;