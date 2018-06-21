class LivrosDao {
    constructor(connection) {
        this.connection = connection;
    }

    getAll(callback) {
        //connection.query('SELECT * FROM livros', (error, livros, fields) => {
        //    callback(error,livros,fields);
        //});
        this.connection.query('SELECT * FROM livros', callback);
    }
}
module.exports = LivrosDao