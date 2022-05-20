const express = require('express');
const app = express();
const SaludMental = express.Router();
const CuestionarioSaludMental = require('../models/SaludMental/respuestaCuestionario.model');
const EstadoEmocional = require('../models/SaludMental/estadoEmocionalCuestionario.model');
const Usuario = require('../models/Usuario/usuario.model');
const filtrosCuestionarios = require("../commonFunctions/filtrosCuestionarios.js");


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


// Todos los tipos de sueño
SaludMental.route("/estado-emocional").get((req, res) => {
    EstadoEmocional.find(function(err, resultado) {
        if (err) {
            console.log(err);
        } else {
            res.json({ "estadoEmocional": resultado });
        }
    });
});


// Añadir tipo de sueño
SaludMental.route('/anadir-estado-emocional').post((req, res) => {
    let datos = req.body;
    datos.motivos = JSON.parse(datos.motivos);

    const estadoEmocional = new EstadoEmocional(datos);
    estadoEmocional.save();

    res.status(201)
    res.json({ 'status': true, 'msg': 'Informacion guardada' });
});


// POST - RESPONDER EL CUESTIONARIO
SaludMental.route('/guardar-datos-cuestionario').post((req, res) => {
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


SaludMental.route('/respuesta-cuestionario').post((req, res) => {
    let datos = req.body;
    let motivo, r;

    console.log(datos);

    EstadoEmocional.find({ value: datos.estado }, function(err, resultado) {
        if (err) {
            console.log(err);
        } else {
            resultado = resultado[0];

            Object.entries(resultado.motivos).forEach(([key, value]) => {
                if (value == datos.motivo) motivo = key;
            });

            r = {
                "estado": resultado.value,
                "motivo": resultado.motivos[motivo],
                "respuesta": resultado.respuestas[motivo]
            }

            res.json({ 'status': true, 'resultado': r });
        }
    });
});


// GET - OBTENER TODAS RESPUESTAS AL CUESTIONARIO de un usuario
SaludMental.route('/respuestas').post(function(req, res) {
    let datos = req.body;
    let dias;

    if (datos.filtro == "Semana") {
        dias = filtrosCuestionarios.getMondayandSundayOfCurrentWeek();
    }

    if (datos.filtro == "Mes") {
        dias = filtrosCuestionarios.getFirstandLastDayOfCurrentMonth();
    }

    CuestionarioSaludMental.find({ "usuario": datos.idUsuario, "diaHora": { $gte: dias[0], $lte: dias[1] } }, (err, resultado) => {
        if (err) {
            console.log(err);
        } else {
            let label = [...new Set(
                resultado.reduce((cont, v) => {
                    cont.push(v.estado)
                    console.log(v);
                    return cont;
                }, [])
            )];

            let data = Object.values(
                resultado.reduce((cont, v) => {
                    cont[v.estado] = (cont[v.estado] || 0) + 1;
                    console.log(v);
                    return cont;
                }, {})
            )


            res.json({ "label": label, "data": data });
        }
    });
});





module.exports = SaludMental;