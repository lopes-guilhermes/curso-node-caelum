const mysql = require('mysql');

function connectionFactory () {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'casadocodigo'
    });

    return connection;
}

module.exports = connectionFactory