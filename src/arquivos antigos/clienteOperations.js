const db = require('./db');

async function insert(cliente){
    const conn = await db.connect();

    const sql = 'INSERT INTO cliente VALUES(?, ?, ?, ?, ?);';
    const values = [cliente.cpf, cliente.nome, cliente.dataNascimento, cliente.telefone, cliente.loginEmail];
    
    await conn.query(sql, values);
    console.log('Cliente inserido com sucesso!');
}

async function select(){
    const conn = await db.connect();
    
    const sql = 'SELECT * FROM cliente;'

    return await conn.query(sql);
}

async function updateTelefone(cliente){
    const conn = await db.connect();
    const sql = 'UPDATE cliente SET telefone = ? WHERE cpf = ?;';
    const values = [cliente.telefone, cliente.cpf];
    await conn.query(sql, values);
}

async function deleteCliente(cliente){
    const conn = await db.connect();
    const sql = 'DELETE FROM cliente WHERE cpf = ?;';
    const values = [cliente.cpf];
    await conn.query(sql, values);
    console.log('Cliente deletado com sucesso!');
}

module.exports = {insert, select, updateTelefone, deleteCliente};