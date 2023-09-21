//Load library HTTP
const http = require('http');
const Chance = require('chance');

const chance = new Chance();


//Define a server
const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end(`Wake up, <b>${chance.city()}</b>`);
})

//Arrancamos servidor
server.listen(1337, '127.0.0.1')
console.log('Server load en http://127.0.0.1:1337');
