const credential = require('./credentials');

async function connect() {
    // Evita conectar mais de uma vez, caso já exista uma conexão.
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    // Chamar o framework mysql2.
    const mysql = require('mysql2/promise');

    // Realiza a conexão com o banco de dados.
    const conn = await mysql.createConnection({
        host : "localhost",
        user : credential.user,
        password : credential.password,
        database : credential.database    
    });

    global.connection = conn;

    return conn;
}


module.exports = {connect};
