function rotas(server) {
    server.use((req, res, next) => {
        console.log(`${req.method} em ${req.url}`);
        next();
    });
    
    server.get('/', (req,res) => {
        res.render('index', { title:'HOME' });
    });  
    
    server.get('/contato', (req,res) => {
        res.render('contato/');
    });
}

module.exports = rotas;