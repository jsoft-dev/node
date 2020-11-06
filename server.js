var http = require('http');
var ser = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("ADDOOOOO WEDDDAAAA.....");
    res.end();
});
ser.listen(8080);
