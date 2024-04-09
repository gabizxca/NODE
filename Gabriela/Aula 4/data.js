var http = require('http');
var dt = require('./modulo');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text'});
    res.write("Data e Hora: " + dt.myDateTime());
    res.end();
}).listen(3000);

