const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
server.use(bodyParser.json());
server.use(cors());

const port = 3000;

const postRoutes = require('./controllers/postRoute');
server.use('/', postRoutes);

server.listen(port, () => console.log(`Express departing now from http://localhost:${port}!`))
