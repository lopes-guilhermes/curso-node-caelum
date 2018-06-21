function rotas(server) {
    server.use((req, res, next) => {
        console.log(req.url);
        next();
    });
    
    server.get('/', (req,res) => {
        console.log('Requisição em /');
        res.render('index', { title:'HOME' });
    });  
    
    server.get('/contato', (req,res) => {
        console.log('Requisição em /contato');
        res.render('contato/');
    });
}

module.exports = rotas;