const db = require('./db');

async function insert(enderecoCliente){
    const conn = await db.connect();

    const sql = 'INSERT INTO enderecoCliente VALUES(?, ?, ?, ?, ?, ?, ?)';
    const values = await [enderecoCliente.cep, enderecoCliente.cidade, enderecoCliente.estado, enderecoCliente.bairro, enderecoCliente.complemento, enderecoCliente.numero, enderecoCliente.clienteCPF];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM enderecoCliente;'

    return await conn.query(sql);
}

async function updateComplemento(enderecoCliente){
    const conn = await db.connect();
    const sql = 'UPDATE enderecoCliente SET complemento = ? WHERE cep = ?;';
    const values = [enderecoCliente.complemento, enderecoCliente.cep];
    await conn.query(sql, values);
}

async function deleteEnderecoCliente(enderecoCliente){
    const conn = await db.connect();
    const sql = 'DELETE FROM enderecoCliente WHERE cep = ?;';
    const values = [enderecoCliente.cep];
    await conn.query(sql, values);
    console.log('Endereço de cliente deletado com sucesso!');
}

module.exports = {insert, select, updateComplemento, deleteEnderecoCliente};