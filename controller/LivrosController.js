const connectFactory = require('../infra/connectFactory')();
const LivrosDao = require('../dao/LivrosDao');

class LivrosController {

    getAll(req,res) {
        const connection = connectFactory();
        const livrosDao = new LivrosDao(connection);

        livrosDao.getAll((error,livros,fields) => {
            if (error) console.log(error);
            res.render('livros/lista', { livros });
        });

        connection.end();
    }

    save(req,res) {
        const livro = req.body;
        const connection = connectFactory();
        const livrosDao = new LivrosDao(connection);

        livrosDao.save(livro, () => {
            res.redirect('/livros');
        });

        connection.end();
    }

    show(req,res) {
        res.render('livros/form')
    }
}

module.exports = new LivrosController()