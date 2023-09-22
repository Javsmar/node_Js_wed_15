'use strict';

//cargar la libreia de express
const express = require('express');

//crear la aplicación o el objeto aplicación
const app = express();

//Añadir una ruta
app.get('/', (request, response, next) => {
    response.send('Hola');
});

app.get('/facturas', (request, response, next) => {
    response.send({result: [1, 2, 3]});
});

//Arrancamos el servidor
app.listen(8000, () => {
    console.log('Servidor HTTP arrancado en http://127.0.0.1:8000');
})