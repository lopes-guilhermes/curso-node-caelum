const LivrosDao = require('../dao/LivrosDao');

function produtos(server) {
    server.get('/produtos', (req,res) => {
        console.log('Requisição em /produtos');
        const connection = server.infra.connectFactory();
        const livrosDao = new LivrosDao(connection);
    
        livrosDao.getAll((error,livros,fields) => {
            if (error) console.log(error);
            res.render('produtos/lista', { livros });
        });
    
        connection.end();
    });
}

module.exports = produtos