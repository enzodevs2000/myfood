const db = require('./db');

async function insert(produtosPedidos){
    const conn = await db.connect();

    const sql = 'INSERT INTO produtosPedidos VALUES(?, ?, ?, ?);';
    const values = [produtosPedidos.quantidade, produtosPedidos.observacoes, produtosPedidos.produtoCodigo, produtosPedidos.pedidoCodigo];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM produtosPedidos;'

    return await conn.query(sql);
}

async function updateQuantidade(produtosPedidos){ 
    const conn = await db.connect();
    const sql = 'UPDATE produtosPedidos SET quantidade = ? WHERE pedidoCodigo = ?;';
    const values = [produtosPedidos.quantidade, produtosPedidos.pedidoCodigo];
    await conn.query(sql, values);
}

async function deleteProdutosPedidos(produtosPedidos){
    const conn = await db.connect();
    const sql = 'DELETE FROM produtosPedidos WHERE pedidoCodigo = ?;';
    const values = [produtosPedidos.pedidoCodigo];
    await conn.query(sql, values);
    console.log('Produto da lista de pedidos deletado com sucesso!');
}

module.exports = {insert, select, updateQuantidade, deleteProdutosPedidos};