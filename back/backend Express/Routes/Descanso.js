const express = require('express');
const app = express();
const Descanso = express.Router();
const CuestionarioDescanso = require('../models/cuestionarioDescanso.model');

Descanso.route("/").get((req, res) => {
    CuestionarioDescanso.find(function(err, resultado) {
        if (err) {
            console.log(err);
        } else {
            res.json({ "respuestas": resultado });
        }
    });
});

Descanso.route('/respuesta-cuestionario').post((req, res) => {
    let datos = req.body;
    if (Object.keys(datos).length != 2) { // Solo se pasan 2 campos
        res.status(500);
        res.json({ 'status': false, 'msg': 'Error! Falta/Sobra algún campo' });
    } else {
        console.log(datos.descripcionSueno)
        if (!Array.isArray(datos.descripcionSueno) || typeof datos.usuario !== 'string') { // Un campo es string y el otro es array 
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error! Dades enviades en un altre format' });
        } else {
            if (datos.usuario == "" || !datos.descripcionSueno.length) { // Si algun campo esta vacio, no es valido 
                res.status(500)
                res.json({ 'status': false, 'msg': 'Error! Algun dels camps es incorrecte o no conte informació' });
            } else { // Todo bien
                datos.diaHora = new Date();
                const cuestionarioDescanso = new CuestionarioDescanso(datos);
                cuestionarioDescanso.save();
                res.status(201)
                res.json({ 'status': true, 'msg': 'Informacion <guardada>' });
            }
        }
    }
});

module.exports = Descanso;