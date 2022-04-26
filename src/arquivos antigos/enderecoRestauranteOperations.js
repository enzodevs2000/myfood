const db = require('./db');

async function insert(enderecoRestaurante){
    const conn = await db.connect();

    const sql = 'INSERT INTO enderecoRestaurante VALUES(?, ?, ?, ?, ?, ?, ?)';
    const values = await [enderecoRestaurante.cep, enderecoRestaurante.cidade, enderecoRestaurante.estado, enderecoRestaurante.bairro, enderecoRestaurante.complemento, enderecoRestaurante.numero, enderecoRestaurante.restauranteCnpj];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM enderecoRestaurante;'

    return await conn.query(sql);
}

async function updateComplemento(enderecoRestaurante){
    const conn = await db.connect();
    const sql = 'UPDATE enderecoRestaurante SET complemento = ? WHERE cep = ?;';
    const values = [enderecoRestaurante.complemento, enderecoRestaurante.cep];
    await conn.query(sql, values);
}

async function deleteEnderecoRestaurante(enderecoRestaurante){
    const conn = await db.connect();
    const sql = 'DELETE FROM enderecoRestaurante WHERE cep = ?;';
    const values = [enderecoRestaurante.cep];
    await conn.query(sql, values);
    console.log('Endereço de restaurante deletado com sucesso!');
}

module.exports = {insert, select, updateComplemento, deleteEnderecoRestaurante};