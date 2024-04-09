const webServer = require('./server');

    const port = process.argv[2] || 3000;
    webServer.listen(port, function() {
        console.log('Servidor iniciado na porta' + port);
    });