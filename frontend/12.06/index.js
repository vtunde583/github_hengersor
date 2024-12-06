console.log(__dirname);
console.log(__filename);

const add = require('-/calculator.js');
console.log(add(2,3));

require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hello');
});

server.listen(8080);
