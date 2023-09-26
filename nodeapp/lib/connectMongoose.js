// Importar la biblioteca Mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Configurar un manejador de eventos para el evento de error de conexión
mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
});

// Configurar un manejador de eventos para el evento de conexión exitosa
mongoose.connection.once('open', ()=> {
    console.log('Conectado a mongodb en', mongoose.connection.name);
});

// Establecer la conexión con la base de datos MongoDB (local en este caso)
mongoose.connect('mongodb://127.0.0.1/cursonode');

