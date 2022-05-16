const { response } = require('express');
const express = require('express');
const app = express();
const Usuario = express.Router();
const UsuarioModel = require('../models/Usuario/usuario.model');
const bcrypt = require("bcrypt");
const usuarioModel = require('../models/Usuario/usuario.model');

Usuario.route('/register').post((req, res) => {
    const datos = req.body;
    let user;

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
                UsuarioModel.find({ 'email': datos.email }, async(err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(response.length)
                        if (response.length != 0) {
                            res.status(500);
                            res.json({ 'status': false, 'msg': 'Este correo ya esta registrado! Prueba con otro' });
                        } else {
                            // Hashear password
                            const salt = await bcrypt.genSalt(10);
                            datos.password = await bcrypt.hash(datos.password, salt);
                            datos.rol = 'usuario';

                            //Guardar usuario
                            const usuarioModel = new UsuarioModel(datos);
                            usuarioModel.save((err, savedUser) => {
                                if(err){
                                    console.log(err);
                                }else{
                                    res.status(202);
                                    res.json({ 'status': true, 'msg': 'Usuario registrado!', 'usuario': savedUser });
                                }
                            });
                           
                        }
                    }
                })
            }
        }
    }
});

Usuario.route('/register-pt2').put((req, res) => {
    const datos = req.body;
    datos.datosPersonales = JSON.parse(datos.datosPersonales);
    console.log(datos);

    if (Object.keys(datos).length != 2 && Object.keys(datos.datosPersonales).length != 5) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        if (datos.nombreApellidos == "" || datos.email == "" || datos.password == "") {
            res.status(500);
            res.json({ 'status': false, 'msg': 'Error en los campos' });
        } else {
            usuarioModel.findById(datos.idUsuario, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(response)
                }
            })
            usuarioModel.updateOne({ _id: datos.idUsuario }, { $set: { datosPersonales: datos.datosPersonales } }, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(202);
                    res.json({ 'status': true, "msg": "Datos añadidos" });
                }
            });
        }
    }

});

Usuario.route('/login').post((req, res) => {
    const datos = req.body;
    console.log(datos);

    if (Object.keys(datos).length != 2) {
        res.status(500).json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        if (datos.email == "" || datos.password == "") {
            res.status(500).json({ 'status': false, 'msg': 'Error en los campos' });
        } else {
            let errores = comprovacionDatos(datos.nombreApellidos, datos.email, datos.password, 'login')
            if (errores.length > 0) {
                res.status(500).json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, async(err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (response.length != 0) {
                            response = response[0];
                            let verPassword = await bcrypt.compare(datos.password, response.password);

                            if (response.email == datos.email && verPassword) {
                                res.status(201).json({ 'status': true, 'msg': 'Usuario logeado', 'usuario': response });
                            } else {
                                res.status(500).json({ 'status': false, 'msg': 'Email o contraseña incorrecta' });
                            }
                        } else {
                            res.status(500).json({ 'status': false, 'msg': 'Email o contraseña incorrecta' });
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