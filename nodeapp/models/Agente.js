const mongoose = require('mongoose');

// Definir el eschema de los agentes
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
}, {
   // collection: 'agentes' // para forzar un nombre concreto de colección
});

//tipos de metodos:
// -Estatico método que esta en el modelo (p.e Agente.lista())
// -De instacia: métodos que tienen las instancias (p.e agente.saluda()) 
agenteSchema.statics.lista = function(filtro, skip, limit, sort, fields){
    const query = Agente.find(filtro); // Devuelve in objeto de typo query que es un thenable
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec(); 

}

// método de instancia
agenteSchema.methods.saluda = function(){
    console.log('Hola soy el agente ' + this.name);
};

// Crear el modelo agente
const Agente = mongoose.model('Agente', agenteSchema);

//exportar el modelo de agente (opcional)
module.exports = Agente;