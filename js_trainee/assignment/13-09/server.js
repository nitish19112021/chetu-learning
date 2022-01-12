var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  res.end("hey")
}).listen(8080);

/* const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("hello from other sides hey")
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listing to port 8000");
}); */