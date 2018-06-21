const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

const rotas = require('./app.js')(app);

const server = app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para encerrar: CTRL + C');
});