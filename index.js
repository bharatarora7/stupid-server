var http = require('http');

var server = http.createServer(function(req, res){
	res.end("Hi, The time from the current server machine is : " + new Date().toISOString());
});

server.listen(8000);
