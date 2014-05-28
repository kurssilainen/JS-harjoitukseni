var http = require('http');
var request = require('request');


#porttiin 1337 jees!
http.createServer(function (req, response) {

  var pathname = url.parse(request.url).pathname;

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Huipparallaa ... rallaa!\n' + pathname );

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');



