const consign = require('consign');
const express = require('express');
const server = express();
const port = 8080;

server.set('view engine', 'ejs');
server.use(express.static('./public'));

consign()
    .include('./routers')
    .then('./infra')
    .into(server)

server.use((req, res) => {
    console.log('Essa página não existe!');
    res.send('<h1>Página não encontrada!</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para encerrar: CTRL + C');
});