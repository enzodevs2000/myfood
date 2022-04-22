const db = require('./db');

async function insert(pedidoRestaurante){
    const conn = await db.connect();

    const sql = 'INSERT INTO pedidoRestaurante VALUES(?, ?);';
    const values = [pedidoRestaurante.restauranteCnpj, pedidoRestaurante.pedidoCodigo];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM pedidoRestaurante;'

    return await conn.query(sql);
}

async function deletePedidoRestaurante(pedidoRestaurante){
    const conn = await db.connect();
    const sql = 'DELETE FROM pedidoRestaurante WHERE pedidoCodigo = ?;';
    const values = [pedidoRestaurante.pedidoCodigo];
    await conn.query(sql, values);
    console.log('Pedido do restaurante deletado com sucesso!');
}

module.exports = {insert, select, deletePedidoRestaurante};