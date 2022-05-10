const { response } = require('express');
const express = require('express');
const app = express();
const Usuario = express.Router();
const UsuarioModel = require('../models/Usuario/usuario.model');

Usuario.route('/register').post((req, res) => {
    const datos = req.body;

    if (Object.keys(datos).length != 3) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        if (datos.nombreApellidos == "" || datos.email == "" || datos.password == "") {
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error en los campos' });
        } else {
            let errores = comprovacionDatos(datos.nombreApellidos, datos.email, datos.password, 'register')
            if (errores.length > 0) {
                res.status(500);
                res.json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(response.length)
                        if (response.length != 0) {
                            res.status(500);
                            res.json({ 'status': false, 'msg': 'Este correo ya esta registrado! Prueba con otro' });
                        } else {
                            const usuarioModel = new UsuarioModel(datos);
                            usuarioModel.save();
                            res.status(202);
                            res.json({ 'status': true, 'msg': 'Usuario registrado!' });
                        }
                    }
                })
            }
        }
    }
});

Usuario.route('/register').post((req, res) => {
    const datos = req.body;

    if (Object.keys(datos).length != 3) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        if (datos.nombreApellidos == "" || datos.email == "" || datos.password == "") {
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error en los campos' });
        } else {
            let errores = comprovacionDatos(datos.nombreApellidos, datos.email, datos.password, 'register')
            if (errores.length > 0) {
                res.status(500);
                res.json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(response.length)
                        if (response.length != 0) {
                            res.status(500);
                            res.json({ 'status': false, 'msg': 'Este correo ya esta registrado! Prueba con otro' });
                        } else {
                            const usuarioModel = new UsuarioModel(datos);
                            usuarioModel.save();
                            res.status(202);
                            res.json({ 'status': true, 'msg': 'Usuario registrado!' });
                        }
                    }
                })
            }
        }
    }
});

Usuario.route('/login').post((req, res) => {
    const datos = req.body;

    if (Object.keys(datos).length != 2) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        if (datos.email == "" || datos.password == "") {
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error en los campos' });
        } else {
            let errores = comprovacionDatos(datos.nombreApellidos, datos.email, datos.password, 'login')
            if (errores.length > 0) {
                res.status(500);
                res.json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (response.length != 0) {
                            response = response[0];

                            if (response.email == datos.email && response.password == datos.password) {
                                res.status(201);
                                res.json({ 'status': true, 'msg': 'Usuario logeado', 'usuario': response });
                            } else {
                                res.status(500);
                                res.json({ 'status': false, 'msg': 'Email o contraseña incorrecta' });
                            }
                        } else {
                            res.status(500);
                            res.json({ 'status': false, 'msg': 'Email o contraseña incorrecta' });
                        }
                    }
                })
            }
        }
    }
});

function comprovacionDatos(nA = "", e, p, tipo = "") {
    let errores = [],
        cont = 0;

    if (tipo == "register") {
        //Regex nombres
        nA.split(' ').forEach((e) => {
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(e) ? null : cont++;
        })
        cont ? errores.push('Nombre o apellidos mal') : null;
    }

    // Regex email
    /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(e) ? null : errores.push('Email mal');

    // Regex password de 8-16 caracteres, con al menos una letra, un numero y un caracter especial.
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(p) ? null : errores.push('Password mal');


    return errores;
}



module.exports = Usuario;