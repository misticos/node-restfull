const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-type', 'text/plain');
  response.end('Hello from misticos.info\n')
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});