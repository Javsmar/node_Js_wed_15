// Importa el módulo 'http-errors' para manejar errores HTTP.
var createError = require('http-errors');

// Importa el módulo 'express', que es un framework web para Node.js.
var express = require('express');

// Importa el módulo 'path' para trabajar con rutas de archivos y directorios.
var path = require('path');

// Importa el módulo 'cookie-parser' para analizar cookies en las solicitudes HTTP.
var cookieParser = require('cookie-parser');

// Importa el módulo 'logger' para registrar solicitudes HTTP en la consola.
var logger = require('morgan');

// Crea una instancia de la aplicación Express.
var app = express();

// Configura el motor de vistas para usar EJS (Embedded JavaScript).
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Definimos una variable de vista global que estará disponible
//en todos los render que hagamos
app.locals.title = 'NodeApp';

// Middleware: Configura el registro de solicitudes HTTP en formato 'dev'.
app.use(logger('dev'));

// Middleware: Analiza solicitudes con formato JSON.
app.use(express.json());

// Middleware: Analiza solicitudes con datos codificados en URL.
app.use(express.urlencoded({ extended: false }));

// Middleware: Analiza cookies en las solicitudes HTTP.
app.use(cookieParser());

// Middleware: Sirve archivos estáticos desde el directorio 'public'.
app.use(express.static(path.join(__dirname, 'public')));

// Define rutas para manejar solicitudes a la raíz '/' y '/users'.
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Middleware: Maneja solicitudes no encontradas (404) y las pasa al siguiente middleware.
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware: Maneja errores. Configura los detalles del error en el objeto 'res.locals'.
app.use(function(err, req, res, next) {
  // Configura el mensaje de error.
  res.locals.message = err.message;

  // Configura el objeto de error solo en entorno de desarrollo.
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Configura el código de estado de respuesta (500 para errores internos del servidor).
  res.status(err.status || 500);

  // Renderiza la página de error (utilizando el motor de vistas configurado anteriormente).
  res.render('error');
});

// Exporta la aplicación Express para ser utilizada en otros archivos (por ejemplo, bin/www).
module.exports = app;
