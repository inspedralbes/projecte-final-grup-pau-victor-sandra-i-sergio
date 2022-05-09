const express = require('express');
const app = express();
const Descanso = express.Router();
const CuestionarioDescanso = require('../models/descanso/respuestaCuestionario.model');
const TipoSueno = require('../models/descanso/tipoSuenoCuestionario.model');

// Todas las respuestas al cuestionario
Descanso.route("/").get((req, res) => {
    CuestionarioDescanso.find(function (err, resultado) {
        if (err) {
            console.log(err);
        } else {
            res.json({ "respuestas": resultado });
        }
    });
});

// Todos los tipos de sueño
Descanso.route("/tipos-suenos").get((req, res) => {
    TipoSueno.find(function (err, resultado) {
        if (err) {
            console.log(err);
        } else {
            let r = new Array();
            resultado.forEach((e) => {
                r.push(e.tipo)
            })

            res.json({ "tipoSueno": r });
        }
    });
});


// Añadir tipo de sueño
Descanso.route('/anadir-tipo-sueno').post((req, res) => {
    let datos = req.body;
    console.log(req.body)
    const tipoSueno = new TipoSueno(datos);
    tipoSueno.save();
    res.status(201)
    res.json({ 'status': true, 'msg': 'Informacion guardada' });
});

// Añadir una respuesta del cuestionario 
Descanso.route('/guardar-datos-cuestionario').post((req, res) => {
    let datos = req.body;
    datos.descripcionSueno = JSON.parse(datos.descripcionSueno)
    if (Object.keys(datos).length != 2) { // Solo se pasan 2 campos
        res.status(500);
        res.json({ 'status': false, 'msg': 'Error! Falta/Sobra algún campo' });
    } else {
        console.log()
        if (typeof datos.descripcionSueno !== 'object' || typeof datos.usuario !== 'string') { // Un campo es string y el otro es array 
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

Descanso.route('/respuesta-cuestionario').post((req, res) => {
    const datos = req.body;
    datos.tipo = JSON.parse(datos.tipo);

    TipoSueno.find({}, function (err, resultado) {
        if (err) {
            console.log(err);
        } else {
            let r = [];
            for (let i = 0; i < resultado.length; i++) {
                for (let j = 0; j < datos.tipo.length; j++) {
                    if (datos.tipo[j] == resultado[i].tipo) {
                        r.push({
                            "tipo": resultado[i].tipo,
                            "respuesta": resultado[i].respuesta
                        })
                    }
                }
            }

            res.status(202)
            res.json({ 'status': true, 'resultado': r });
        }
    });


});

module.exports = Descanso;