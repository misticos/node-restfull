'use strict';
const http = require('http');

const hostname = 'localhost';
const port = process.env.PORT || 8081

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-type', 'text/plain');
  response.end(`<h1> Hello from misticos.info</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});