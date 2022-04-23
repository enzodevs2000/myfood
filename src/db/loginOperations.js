const db = require('./db');

async function insert(login){
    // Conexão com o banco
    const conn = await db.connect();

    // Comando SQL
    // As ? são usadas para fazer uma concatenação com a const values
    const sql = 'INSERT INTO login VALUES(?, ?, ?);';
    const values = [login.email, login.senha, login.permissao];

    /**
     * Essa função query() vai concatenar o comando sql com os valores que estiverem
     * no array values
     */
    await conn.query(sql, values);
    console.log('Login cadastrado com sucesso!');
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM login;'

    return await conn.query(sql);
}

async function updateSenha(login){
    const conn = await db.connect();
    const sql = 'UPDATE login SET senha = ? WHERE email = ?;';
    const values = [login.senha, login.email];
    await conn.query(sql, values);
}

async function deleteLogin(login){
    const conn = await db.connect();
    const sql = 'DELETE FROM login WHERE email = ?;';
    const values = [login.email];
    await conn.query(sql, values);
    console.log('Login deletado com sucesso!');
}

module.exports = {insert, select, updateSenha, deleteLogin};