const db = require('./db');

async function insert(pedidoEntregador){
    const conn = await db.connect();

    const sql = 'INSERT INTO pedidosEntregador VALUES(?, ?);';
    const values = [pedidoEntregador.entregadorRegistro, pedidoEntregador.pedidoCodigo];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM pedidosEntregador;'

    return await conn.query(sql);
}

async function deletePedidoEntregador(pedidoEntregador){ 
    const conn = await db.connect();
    const sql = 'DELETE FROM pedidosEntregador WHERE pedidoCodigo = ?;';
    const values = [pedidoEntregador.pedidoCodigo];
    await conn.query(sql, values);
    console.log('Pedido do entregador deletado com sucesso!');
}

module.exports = {insert, select, deletePedidoEntregador};