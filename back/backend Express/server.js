const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
var multer = require('multer');
var upload = multer();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://a20paumunoli:a20paumunoli_mongoDB@cluster.qpuxh.mongodb.net/ProjecteFinal?retryWrites=true&w=majority');

app.listen(port, () => {
    console.log('Servidor obert al port 9000\n' + 'http://localhost:9000');
});

const SaludMental = require('./routes/SaludMental');
app.use('/salud-mental', SaludMental);

const Descanso = require('./routes/Descanso');
app.use('/descanso', Descanso);





