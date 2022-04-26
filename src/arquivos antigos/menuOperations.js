const db = require('./db');

async function insert(menu){
    const conn = await db.connect();

    const sql = 'INSERT INTO menu VALUES(?, ?, ?);';
    const values = [menu.restauranteCnpj, menu.produtoCodigo, menu.quantidade];

    await conn.query(sql, values);
}

async function select(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM menu;'

    return await conn.query(sql);
}

async function updateQuantidade(menu){
    const conn = await db.connect();
    const sql = 'UPDATE menu SET quantidade = ? WHERE produtoCodigo = ?;';
    const values = [menu.quantidade, menu.produtoCodigo];
    await conn.query(sql, values);
}

async function deleteMenu(menu){
    const conn = await db.connect();
    const sql = 'DELETE FROM menu WHERE produtoCodigo = ?;';
    const values = [menu.produtoCodigo];
    await conn.query(sql, values);
    console.log(' Menu deletado com sucesso!');
}

module.exports = {insert, select, updateQuantidade, deleteMenu};