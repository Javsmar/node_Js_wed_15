'use strict'

function crearSumador(number1){
    return function(number2){
        return number1 + number2;
    }
};

const sumaSiete = crearSumador(7);
console.log(sumaSiete(10));



function creaVehiculo(name){
    return {
        getName: function(){
            return name;
        },
        setName: function(value){
            name = value;
        },
        saluda: function(){
            console.log('Hola soy', name)
        }
    }
};

const car = creaVehiculo('seat');
car.saluda();

setTimeout(car.saluda, 2000);