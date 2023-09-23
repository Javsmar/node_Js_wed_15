var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.texto = 'Hola';
  res.locals.nombre = '<script>alert("Inyección de Código")</script>';

  const ahora = new Date();
  res.locals.esPar = (ahora.getSeconds() % 2) === 0;
  res.locals.segundoActual = ahora.getSeconds();

  res.locals.usuarios = [
    {nombre: 'Smith', edad: 32},
    {nombre:'Jones', edad: 27}
  ];

  res.render('index');
  //res.render('index', { title: 'Express' });
});

// GET /parametro_en_ruta/66

router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  const number = req.params.numero;

  res.send('Hemos recibido el número:' + number);
});

// GET //parametro_opcional/66
router.get('/parametro_opcional/:numero?', (req, res, next) => {
  const number = req.params.numero;

  res.send('(opcional) he recibido el número: ' + number);
});

// GET /producto/patalones/talla/L/color/negro
router.get('/producto/:nombre/talla/:talla/color/:color', (req, res, next) =>{
  console.log(req.params);
  // const nombre = req.params.nombre;
  // const talla = req.params.talla;
  // const color = req.params.color;

  //Usando destructuring
  const {nombre, talla, color} = req.params;

  res.send(`Me pediste ${nombre} talla ${talla} color ${color}`);
});

module.exports = router;
