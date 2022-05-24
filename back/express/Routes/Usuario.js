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
            let errores = comprovacionDatosPrincipales(datos.nombreApellidos, datos.email, datos.password, 'register')
            if (errores.length > 0) {
                res.status(500);
                res.json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, async (err, response) => {
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
                                if (err) {
                                    console.log(err);
                                } else {
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

// Registrar 2a parte del registro
Usuario.route('/register-pt2').put((req, res) => {
    const datos = req.body;
    datos.datosPersonales = JSON.parse(datos.datosPersonales);
    console.log(datos);

    if (Object.keys(datos).length != 2 && Object.keys(datos.datosPersonales).length != 5) {
        res.status(500);
        res.json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {

        // Si la edad viene como string + numeros, le quito todas los caracteres 
        // y junto los numeros y los transformo a integer
        if (typeof datos.datosPersonales.edad === 'string') {
            datos.datosPersonales.edad = parseInt(datos.datosPersonales.edad.replace(/[^0-9]/g, ''));
        }

        let errores = comprovacionDatosSecundarios(datos.datosPersonales.sexo, datos.datosPersonales.disponibilidadTiempo, datos.datosPersonales.nivelFisico, datos.datosPersonales.ocupacion, datos.datosPersonales.edad)
        console.log(errores.length)

        if (errores.length) {
            res.status(500);
            res.json({ 'status': false, 'msg': errores, 'chk': true });
        } else {
            datos.fotoPerfil = (datos.datosPersonales.sexo == 'Hombre') ? 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg' : 'https://www.sanboni.edu.co/onu/wp-content/uploads/avatar-mujer.png';

            UsuarioModel.findOneAndUpdate({ _id: datos.idUsuario }, { $set: { datosPersonales: datos.datosPersonales, fotoPerfil: datos.fotoPerfil } }, { returnOriginal: false }, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(202);
                    res.json({ 'status': true, "msg": "Usuario creado completamente", "usuario": response });
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
            let errores = comprovacionDatosPrincipales(datos.nombreApellidos, datos.email, datos.password, 'login')
            if (errores.length > 0) {
                res.status(500).json({ 'status': false, 'msg': errores, 'chk': true });
            } else {
                UsuarioModel.find({ 'email': datos.email }, async (err, response) => {
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
                            res.status(500).json({ 'status': false, 'msg': 'Cuenta no existente...' });
                        }
                    }
                })
            }
        }
    }
});

Usuario.route('/modificar-datos').put((req, res) => {
    const datos = req.body;
    console.log(datos);

    if (Object.keys(datos).length != 9) {
        res.status(500).json({ 'status': false, 'msg': 'Falta / Sobra algun campo' });
    } else {
        let cont = 0;
        Object.values(datos).forEach(e => {
            e == "" ? cont++ : null
        })

        if (cont) {
            res.status(500).json({ 'status': false, 'msg': 'Error en los campos' });
        } else {

            // Si la edad viene como string + numeros, le quito todas los caracteres 
            // y transformo los numeros a integer
            if (typeof datos.edad === 'string') {
                datos.edad = parseInt(datos.edad.replace(/[^0-9]/g, ''));
            }

            let errores = comprovacionDatosPrincipales(datos.nombreApellidos, datos.email, '!r123sdf26', 'register')
            let errores2 = comprovacionDatosSecundarios(datos.sexo, datos.disponibilidadTiempo, datos.nivelFisico, datos.ocupacion, datos.edad)
            if (errores.length || errores2.length) {
                res.status(500).json({ 'status': false, 'msg': errores, 'msg2': errores2, 'chk': true });
            } else {

                UsuarioModel.findOneAndUpdate({ _id: datos.idUsuario }, {
                    $set: {
                        datosPersonales: {
                            "edad": datos.edad,
                            "sexo": datos.sexo,
                            "ocupacion": datos.ocupacion,
                            "disponibilidadTiempo": datos.disponibilidadTiempo,
                            "nivelFisico": datos.nivelFisico
                        },
                        nombreApellidos: datos.nombreApellidos,
                        email: datos.email,
                    }
                }, { returnOriginal: false }, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(202);
                        res.json({ 'status': true, "msg": "Datos modificados", "usuario": response });
                    }
                });
            }
        }
    }
});


Usuario.route('/guardarFotoPerfil').post((req, res) => {
    console.log(req.body.usuario)
    const datos = req.body.imgBase64.replace(/^data:image\/png;base64,/, "");;
    require("fs").writeFile(`./img/fotosUsuario/${req.body.usuario}.png`, datos, 'base64', function (err) {
        console.log(err);
    });

    UsuarioModel.findOneAndUpdate({ _id: req.body.usuario }, {
        $set: {
            fotoPerfil: `http://genkicorpusback.alumnes.inspedralbes.cat/img/fotosUsuario/${req.body.usuario}.png`
        }
    }, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.status(202);
            res.json({ 'status': true, "msg": "Foto modificada" });
        }
    });


});


function comprovacionDatosPrincipales(nA = "", e, p, tipo = "") {
    let errores = [],
        cont = 0;

    if (tipo == "register") {
        //Regex nombres
        nA.split(' ').forEach((e) => { /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(e) ? null : cont++; })
        cont ? errores.push('Nombre o apellidos incorrectos') : null;
    }

    // Regex email
    /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(e) ? null : errores.push('Email incorrecto');

    // Regex password de 8-16 caracteres, con al menos una letra, un numero y un caracter especial.
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(p) ? null : errores.push('Password incorrecto');

    return errores;
}

function comprovacionDatosSecundarios(sexo, tiempo, nivelFisico, ocupacion, edad) {
    let cont = [];

    (sexo != 'Hombre' && sexo != 'Mujer') ? cont.push('Sexo mal') : null;
    (nivelFisico != 'Principiante' && nivelFisico != 'Avanzado' && nivelFisico != 'Intermedio') ? cont.push('Nivel fisico mal') : null;
    (ocupacion != 'Trabajo' && ocupacion != 'Estudio' && ocupacion != 'Otro') ? cont.push('Ocupacion mal') : null;
    (!Number.isInteger(edad) || edad > 100 || edad < 0) ? cont.push('Edad mal') : null;
    (tiempo != '15 min' && tiempo != '30 min' && tiempo != '45 min' && tiempo != '1 h') ? cont.push('Tiempo disponible mal') : null;

    return cont;
}


module.exports = Usuario;