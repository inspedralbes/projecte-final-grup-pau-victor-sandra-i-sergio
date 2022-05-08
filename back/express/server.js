const express = require('express');
const app = express();

// Puerto por el que abre esta aplicacion
const port = 9000;

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
mongoose.connect('mongodb+srv://a20paumunoli:a20paumunoli_mongoDB@cluster.qpuxh.mongodb.net/ProjecteFinal?retryWrites=true&w=majority');


app.listen((process.env.PORT || port), () => {
    console.log('Servidor obert al port 9000\n' + 'http://localhost:9000');
});


const SaludMental = require('./routes/SaludMental.js');
app.use('/salud-mental', SaludMental);


const Descanso = require('./routes/Descanso.js');
app.use('/descanso', Descanso);





