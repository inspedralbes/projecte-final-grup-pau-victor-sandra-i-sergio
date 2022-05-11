const express = require('express');
const app = express();

// Puerto por el que abre esta aplicacion
const port = 9000;

// Para produccion
// const port = 7101;
// const host = '0.0.0.0';

// Permisos CORS
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','PUT']
}));

// Para recoger datos en formato URLencoded
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Para recoger datos en formato form-data
var multer = require('multer');
var upload = multer();
app.use(upload.array()); 
app.use(express.static('public'));

// Conexio amb mongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://a20paumunoli:a20paumunoli@cluster.qpuxh.mongodb.net/ProjecteFinal?retryWrites=true&w=majority');

const SaludMental = require('./Routes/SaludMental.js');
app.use('/salud-mental', SaludMental);

const Descanso = require('./Routes/Descanso.js');
app.use('/descanso', Descanso);

const Usuario = require('./Routes/Usuario.js');
app.use('/usuario', Usuario);

app.listen((process.env.PORT || port), () => {
    console.log('\nServidor obert al port ' + port);
    console.log('\x1b[36mhttp://localhost:' + port);
});

// Para produccion
// app.listen((process.env.PORT || port), () => {
//     console.log(`El servidor està escoltant a http://${host}:${port}`);
// });

