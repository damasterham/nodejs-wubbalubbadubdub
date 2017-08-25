var http = require("http");

var jsonObject = 
{
    "name": "Dan",
    "deal": "Being cool"
};

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/json"});
    res.write('{"name":"Bob"}');
    res.write(JSON(jsonObject));
    res.end();
});

server.listen(4200);

