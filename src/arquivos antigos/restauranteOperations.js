const db = require('./db');

async function insert(restaurante){
    const conn = await db.connect();

    const sql = 'INSERT INTO restaurante VALUES(?, ?, ?, ?, ?, ?, ?);';
    const values = [restaurante.cnpj, restaurante.nome, restaurante.aberto, restaurante.horarioAbertura, restaurante.horarioFechamento, restaurante.taxaDeEntrega, restaurante.gerenteRegistro];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM restaurante;'

    return await conn.query(sql);
}

async function updateTaxa(restaurante){
    const conn = await db.connect();
    const sql = 'UPDATE restaurante SET taxaDeEntrega = ? WHERE cnpj = ?;';
    const values = [restaurante.taxaDeEntrega, restaurante.cnpj];
    await conn.query(sql, values);
}

async function deleteRestaurante(restaurante){
    const conn = await db.connect();
    const sql = 'DELETE FROM restaurante WHERE cnpj = ?;';
    const values = [restaurante.cnpj];
    await conn.query(sql, values);
    console.log('Restaurante deletado com sucesso!');
}

module.exports = {insert, select, updateTaxa, deleteRestaurante};