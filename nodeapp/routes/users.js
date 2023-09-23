var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const usuarios = [
    {nombre: 'Smith', edad: 32},
    {nombre:'Brown', edad: 44}
  ];
  const filtroName = req.query.name;
  if(filtroName){
    res.json(usuarios.filter(usuario => usuario.nombre === filtroName))
  }else{
    res.json(usuarios);
  };

});

module.exports = router;
