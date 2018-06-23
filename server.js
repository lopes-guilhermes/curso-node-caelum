const server = require('./custom-express');
const port = 8080;

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para encerrar: CTRL + C');
});