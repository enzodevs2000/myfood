const db = require('./db');

async function insert(pedido){
    const conn = await db.connect();

    const sql = 'INSERT INTO pedido(metPagamento, valorTotal, tempoEspera, clienteCpf, restauranteCnpj, entregadorRegistro, enderecoCliente) VALUES(?, ?, ?, ?, ?, ?, ?);';
    const values = [pedido.metPagamento, pedido.valorTotal, pedido.tempoEspera, pedido.clienteCpf, pedido.restauranteCnpj, pedido.entregadorRegistro, pedido.enderecoCliente];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM pedido;'

    return await conn.query(sql);
}

async function updateTempoEspera(pedido){ 
    const conn = await db.connect();
    const sql = 'UPDATE pedido SET tempoEspera = ? WHERE codigo = ?;';
    const values = [pedido.tempoEspera, pedido.codigo];
    await conn.query(sql, values);
}

async function deletePedido(pedido){
    const conn = await db.connect();
    const sql = 'DELETE FROM pedido WHERE codigo = ?;';
    const values = [pedido.codigo];
    await conn.query(sql, values);
    console.log('Pedido deletado com sucesso!');
}

module.exports = {insert, select, updateTempoEspera, deletePedido};