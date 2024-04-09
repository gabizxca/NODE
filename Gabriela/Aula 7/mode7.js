var http = require('http');
var fs = require('fs'); //fail system

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        console.log('menu');
        fs.readFile('menu.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<meta charset="utf-8" />');
            res.write(data);
            return res.end();
        });
    } else if (req.url == "/index") {
        console.log('index');
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<meta charset="utf-8" />');
            res.write(data);
            res.write('<a href="/">Voltar Menu</a><br>');
            return res.end();
        });
    } else if (req.url == "/sobre") {
        console.log('sobre');
        fs.readFile('sobre.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<meta charset="utf-8" />');
            res.write(data);
            res.write('<a href="/">Voltar Menu</a><br>');
            return res.end();
        });
    } else if (req.url == "/produtos") {
        console.log('produtos');
        fs.readFile('produtos.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<meta charset="utf-8" />');
            res.write(data);
            res.write('<a href="/">Voltar Menu</a><br>');
            return res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<meta charset="utf-8" />');
        res.write("<h1>Página não encontrada :( </h1>");
        console.log('não encontrou');
        res.end();
    };
});

server.listen(3000, function () {
    console.log("Servidor rodando!");
});