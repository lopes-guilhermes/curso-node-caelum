require('dotenv').config()

const consign = require('consign');
const express = require('express');
const bodyParser = require('body-parser')
const server = express();

server.set('view engine', 'ejs');
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({extended:true}));

consign()
    .include('./routers')
    .then('./infra')
    .into(server)

server.use((req, res) => {
    console.log('Essa página não existe!');
    res.send('<h1>Página não encontrada!</h1>');
});

module.exports = server