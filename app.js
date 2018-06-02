// Requires: Importación de librerias
var express = require("express");


// Inicializar variables:
var app = express();
var mongoose = require('mongoose');


// Conexíon a la base de datos:
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response) => {
    if (error) {
        throw error;
    } else {
        console.log('Base de datos online');
    }
});

// Rutas
app.get('/', (request, response, next) => {
    // Visualizo la respuesta en un formato JSON:
    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


// Escuchar peticiones con Express:
app.listen(3000, () => {
    console.log("Express server puerto 3000 online");
});