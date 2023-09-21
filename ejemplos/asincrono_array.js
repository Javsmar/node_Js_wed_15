'use strict';

// Función que escribe un texto en la consola después de 2 segundos y llama a un callback
function escribeTrasDossegundos(text, callback){
    setTimeout(function(){
        console.log(text); // Imprime el texto en la consola
        callback(); // Llama al callback después de imprimir el texto
    }, 2000); // Espera 2000 milisegundos (2 segundos)
}

// Función que ejecuta una serie de funciones de manera secuencial en un array
function serie(arr, fn, callback){
    if(arr.length === 0){
        // Si el array está vacío, termina el bucle y llama al callback
        callback();  
        return; 
    }
    
    // Toma el primer elemento del array y llama a la función fn con ese elemento y un callback anónimo
    fn('text' + arr.shift(), function(){
        // Llama a la función serie de manera recursiva con el array reducido
        serie(arr, fn, callback);
    });
}

// Inicia la serie con un array de elementos [1, 2, 3, 'cuatro', 5], la función escribeTrasDossegundos y un callback final
serie([1, 2, 3, 'cuatro', 5], escribeTrasDossegundos, function(){
    console.log('Fin'); // Imprime 'Fin' en la consola cuando se completa la serie
});


