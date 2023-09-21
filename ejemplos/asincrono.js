'use strict';

// Función que escribe un texto en la consola después de 2 segundos y llama a un callback
function escribeTrasDossegundos(text, callback){
    setTimeout(function(){
        console.log(text); // Imprime el texto en la consola
        callback(); // Llama al callback después de imprimir el texto
    }, 2000); // Espera 2000 milisegundos (2 segundos)
}

// Función que ejecuta una serie de funciones de manera secuencial
function serie(n, fn, callback){
    if(n === 0){
        // Si n llega a 0, termina el bucle y llama al callback
        callback();  
        return; 
    }
    n = n - 1; // Decrementa n en 1 en cada iteración
    fn('text' + n, function(){
        // Llama a la función fn con un texto ('text' + n) y un callback anónimo
        serie(n, fn, callback); // Llama a esta función de manera recursiva con n reducido
    });
}

// Inicia la serie con n igual a 6, la función escribeTrasDossegundos y un callback final
serie(6, escribeTrasDossegundos, function(){
    console.log('Fin'); // Imprime 'Fin' en la consola cuando se completa la serie
});
