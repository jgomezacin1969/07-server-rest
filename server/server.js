const express = require('express');
const app = express();
const config = require('./config/config.js');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.get('/', function(req, res) {
    res.json('Hello World22');
});

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

// CREAR --> POST
app.post('/usuario/:id', function(req, res) {
    let body = req.body;
    console.log(body);
    if (body.nombre == undefined) {
        console.log('No hay propiedad');
        res.status(400);
        res.json({ error: 300, mensaje: 'Propieras nombre no existe' });
    } else {
        res.json({ body });
    }

});

// MODIFICAR --> PUT
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json('put Usuario con id:' + id);
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

const puerto = process.env.PORT;
app.listen(puerto, () => { console.log('Escuchando puerto ' + puerto); });