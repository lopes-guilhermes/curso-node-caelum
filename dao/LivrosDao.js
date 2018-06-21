class LivrosDao {
    constructor(connection) {
        this.connection = connection;
    }

    getAll(callback) {
        this.connection.query('SELECT * FROM livros', callback);
    }
}

module.exports = LivrosDao