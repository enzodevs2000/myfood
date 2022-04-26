const db = require('./db');

async function insert(gerente){
    const conn = await db.connect();

    const sql = 'INSERT INTO gerente(cpf, nome, loginEmail) VALUES(?, ?, ?);';
    const values = [gerente.cpf, gerente.nome, gerente.loginEmail];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM gerente;'

    return await conn.query(sql);
}

async function updateNome(gerente){
    const conn = await db.connect();
    const sql = 'UPDATE gerente SET nome = ? WHERE registro = ?;';
    const values = [gerente.nome, gerente.registro];
    await conn.query(sql, values);
}

async function deleteGerente(gerente){
    const conn = await db.connect();
    const sql = 'DELETE FROM gerente WHERE registro = ?;';
    const values = [gerente.registro];
    await conn.query(sql, values);
    console.log('Gerente deletado com sucesso!');
}

module.exports = {insert, select, updateNome, deleteGerente};