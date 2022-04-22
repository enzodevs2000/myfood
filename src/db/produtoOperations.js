const db = require('./db');

async function insert(produto){
    const conn = await db.connect();

    const sql = 'INSERT INTO produto(preco, nome, categoria, descricao, restauranteCnpj) VALUES(?, ?, ?, ?, ?);';
    const values = [produto.preco, produto.nome, produto.categoria, produto.descricao, produto.restauranteCnpj];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM produto;'

    return await conn.query(sql);
}

async function updatePreco(produto){ 
    const conn = await db.connect();
    const sql = 'UPDATE produto SET preco = ? WHERE codigo = ?;';
    const values = [produto.preco, produto.codigo];
    await conn.query(sql, values);
}

async function deleteProduto(produto){
    const conn = await db.connect();
    const sql = 'DELETE FROM produto WHERE codigo = ?;';
    const values = [produto.codigo];
    await conn.query(sql, values);
    console.log('Produto deletado com sucesso!');
}

module.exports = {insert, select, updatePreco, deleteProduto};