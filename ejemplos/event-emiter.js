'use strict';

// Importa el módulo 'events' de Node.js y lo asigna a la constante 'EventEmitter'.
const EventEmitter = require('events');

// Crea una nueva instancia de EventEmitter y la asigna a la constante 'emisor'.
const emisor = new EventEmitter();

// Registra un manejador de eventos para el evento 'llamada de teléfono'.
// Cuando se emita este evento, la función se ejecutará con 'quienLlama' como argumento.
// Si 'quienLlama' es igual a 'padre', la función simplemente retorna sin hacer nada.
emisor.on('llamada de teléfono', function(quienLlama) {
    if (quienLlama === 'padre') {
        return;
    }
    console.log('ring ring');
});

// Registra otro manejador de eventos para el evento 'llamada de teléfono'.
// La diferencia principal es el uso de 'once', lo que significa que este manejador de eventos
// solo se ejecutará una vez cuando se emita el evento.
emisor.once('llamada de teléfono', function(quienLlama) {
    console.log('brr brr');
});

// Emite el evento 'llamada de teléfono' con el argumento 'padre'.
// Se ejecutará el primer manejador de eventos, pero como 'quienLlama' es igual a 'padre',
// no se imprimirá 'ring ring'. Luego, se ejecutará el segundo manejador de eventos debido al uso de 'once'
// y se imprimirá 'brr brr'. Esto demuestra que el segundo manejador solo se ejecuta una vez.
emisor.emit('llamada de teléfono', 'padre');
