const LivrosDao = require('../dao/LivrosDao');

function livros(server) {
    server.get('/livros', (req,res) => {
        const connection = server.infra.connectFactory();
        const livrosDao = new LivrosDao(connection);
    
        livrosDao.getAll((error,livros,fields) => {
            if (error) console.log(error);
            res.render('livros/lista', { livros });
        });
    
        connection.end();
    });

    server.get('/livros/form',(req,res) => {
        res.render('livros/form');
    });

    server.post('/livros', (req,res) => {
        const livro = req.body;
        const connection = server.infra.connectFactory();
        const livrosDao = new LivrosDao(connection);

        livrosDao.save(livro, () => {
            res.redirect('/livros');
        });

        connection.end();
    });
}

module.exports = livros