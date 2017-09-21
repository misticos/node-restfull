const https = require('http');

const hostname = 'misticos.info';
const port = 80;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end('Hello from misticos.info\n')
});

server.listen(port, hostname, () => {
    console.log('Server is running at http://${hostname}:${port}');
})
