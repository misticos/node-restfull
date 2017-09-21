'use strict';
//const http = require('http');
const express = require('express');
const app = express();
const bodyparser = require('body-parser'); // req.body
const cors = require('cors');

app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/contacts', (request, response) => {
  response.send('Hello from server.js')
});

// GET, POST, PUT, DELETE, PATCH

const hostname = 'localhost';
const port = process.env.PORT || 8081

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

/*
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-type', 'text/plain');
  response.end(`<h1> Hello from misticos.info</h1>`);
});
*/