const http = require('http');
const url = require('url');
const config = require('./config.json');
const fileHandler = require('./filehandler.js');

// cria o servidor http
const server = http.createServer(onRequest);

// manipulador de solicitação de http
function onRequest(req, res) {
    const parsedUrl = url.parse(req.url);
    let filename = parsedUrl.pathname;
    let fullPath = __dirname + config.rootFolder + filename;
    const extension = filename.split('.').pop(); // pega a extensão do arquivo

    // verifica se o caminho solicitado está dentro da pasta raiz especificada
    if (!fullPath.startsWith(__dirname + config.rootFolder)) { //! - operador de negação
        res.writeHead(403);
        return res.end('Forbidden');
    } 

    // se o caminho termina com '/', trata com o indice padrão
    if (filename === '/') {
        filename = config.defaultIndex;
        fullPath = __dirname + config.rootFolder + filename;
        //console.log ("Erro /")
    }

    // Manipula a leitura do arquivo
    fileHandler(fullPath, function (data) {
        res.writeHead(200, {
            'Content-Type': config.types[extension] || 'text.html',
            'Content-Length': data.length
        });
        res.end(data);
    }, function (err) {
        console.error('Erro ao ler arquivo:', err);

        //Manipula o erro de leitura de arquivo
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<meta charset="utf-8" />');
        res.write('<h1Página de Erro - Arquivo não encontrado</h1>');
        res.end();
    });
}

module.exports = server;


//== compara o valor e === compara o valor e o tipo de variavel