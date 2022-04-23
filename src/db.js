const credential = require('./db/credentials');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : credential.user,
    password : credential.password,
    database : credential.database    
});

connection.connect(error => {
    if (error) throw error;
    console.log(`Conectado ao banco de dados ${credential.database} com sucesso!`);
})

module.exports = connection;

