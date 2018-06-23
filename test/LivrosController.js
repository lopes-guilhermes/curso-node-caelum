const server = require('../custom-express');
const request = require('supertest')(server);

describe('#LivrosController', function() {
    //before(() => {
    //})

    it('Fazer um request para a lista de produtos e tem que retornar um HTML', function(done) {
        request.get('/livros')
            .set('Accept', 'text/html')
            .expect('Content-type', /html/)
            .expect(200,done)
    })
});


//node_modules\.bin\mocha test/ -p
//para rodar todas os testes da pasta test