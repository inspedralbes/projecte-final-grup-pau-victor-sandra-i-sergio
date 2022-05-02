const express = require('express');
const app = express();
const port = 9000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://a20paumunoli:a20paumunoli_mongoDB@cluster.qpuxh.mongodb.net/ProjecteFinal?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Servidor obert al port 9000\n' + 'http://localhost:9000');
});

const SaludMental = require('./routes/SaludMental');
app.use('/salud-mental', SaludMental);

const Descanso = require('./routes/Descanso');
app.use('/descanso', Descanso);





