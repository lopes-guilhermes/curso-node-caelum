const mysql = require('mysql');

function rotas(app) {
    //executa sempre que fizer uma requisição
    app.use((req, res, next) => {
        console.log(req.url);
        next();
    });
    
    app.get('/',(req,res)=> {
        console.log('Requisição em /');
        res.render('index', { title:'HOME' });
    });
    
    app.get('/produtos', (req,res) => {
        console.log('Requisição em /produtos');

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo'
        });

        connection.query('SELECT * FROM livros', (error, livros, fields) => {
            console.log(error);
            
            res.render('produtos/lista', { livros });
        });

        connection.end();
    });
    
    app.get('/contato', (req,res) => {
        console.log('Requisição em /contato');
        res.render('contato/');
    });

    //executa depois que não encontrar nenhuma rota válida
    app.use((req, res) => {
        console.log('Essa página não existe!');
        res.send('<h1>Página não encontrada!</h1>');
    });
}

module.exports = rotas;