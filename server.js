// Lave en webserver
var http = require('http');

var server = http.createServer(function (req, res)
{
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write('{"title" : "Hello Darkness My Old Friend", "text", "I\'ve come to speak with you again"}');
});

server.listen(process.env.PORT || 3000);