var http = require('http'); //importar modulo http

var atendeRequesicao = function (request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World</h1>");
    response.end();

}
var server = http.createServer(atendeRequesicao)
var servidorLigou = function (){
    console.log('Servidor Hello World rodando!');
}
server.listen(3000, servidorLigou);