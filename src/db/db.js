// Módulo para você colocar seu username e password do my sql
const credential = require('./credentials');

async function connect() {
    // Verificar se o bd está conectado ou não
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    // Chamar o framework mysql2
    const mysql = require('mysql2/promise');

    // Fazer a conexão com o banco
    /**
     *  Crie um módulo credentials.js e faça um 
     * module.exports{
     *  username : 'myusername',
     *  password : 'mypassword',
     *  bd : 'mybd' 
     * }
     */
    const conn = await mysql.createConnection({
        host : 'localhost',
        user : credential.username,
        password : credential.password,
        database : credential.bd
    });
    console.log('Conexão feita com sucesso!');

    // Definir o atributo conexão no global
    global.connection = conn;

    return conn;
}

connect();

module.exports = {connect};
