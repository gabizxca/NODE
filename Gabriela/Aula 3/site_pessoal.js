var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});

    //tira o erro dos caracteres
    response.write('<meta charset="utf-8" />');

    //criar as rotas com if-else
    if (request.url == "/") {
        response.write("<h1Página principal </h1>");
    } else if (request.url == "/bemvindo") {
        response.write("<h1> Bem-vindo :) </h1>");  
    } else if (request.url == "/sobre") {
        response.write("<h1> Sobre nós :) </h1>");  
    } else {
        response.write("<h1> Página não encontrada :( </h1>");
    }
    response.end();
});

//inicializa o servidor
server.listen(3000, function () {
    console.log("Servidor rodando!");
});


//aspas simples = somente texto