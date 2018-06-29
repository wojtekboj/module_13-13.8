var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });

    } else {
        response.setHeader('Content-Type', 'image/png');
        fs.readFile('./error.png', (err, data2) => {
            if (err) throw err;
            response.statusCode = 404;
            response.write(data2);
            response.end();
        })
    }
});

server.listen(8080);