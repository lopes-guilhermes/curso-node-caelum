const LivrosController = require('../controller/LivrosController');

function livros(server) {
    server.get('/livros', LivrosController.getAll);
    server.post('/livros', LivrosController.save);
    server.get('/livros/form', LivrosController.show);
    //server.get('/livros/form',(req,res) => res.render('livros/form'));
}

module.exports = livros