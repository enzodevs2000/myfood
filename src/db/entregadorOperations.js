const db = require('./db');

async function insert(entregador){
    const conn = await db.connect();

    const sql = 'INSERT INTO entregador(nome, cnh, telefone, loginEmail) VALUES(?, ?, ?, ?);';
    const values = [entregador.nome, entregador.cnh, entregador.telefone, entregador.loginEmail];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM entregador;'

    return await conn.query(sql);
}

async function updateTelefone(entregador){
    const conn = await db.connect();
    const sql = 'UPDATE entregador SET telefone = ? WHERE registro = ?;';
    const values = [entregador.telefone, entregador.registro];
    await conn.query(sql, values);
}

async function deleteEntregador(entregador){
    const conn = await db.connect();
    const sql = 'DELETE FROM entregador WHERE registro = ?;';
    const values = [entregador.registro];
    await conn.query(sql, values);
    console.log('Entregador deletado com sucesso!');
}

module.exports = {insert, select, updateTelefone, deleteEntregador};