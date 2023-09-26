const mongoose = require('mongoose');

// Definir el eschema de los agentes
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
}, {
   // collection: 'agentes' // para forzar un nombre concreto de colección
});

// Crear el modelo agente
const Agente = mongoose.model('Agente', agenteSchema);

//exportar el modelo de agente (opcional)
module.exports = Agente;