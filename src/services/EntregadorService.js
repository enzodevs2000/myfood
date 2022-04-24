const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');


function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM entregador', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(nome, cnh, telefone, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO entregador(nome, cnh, telefone, loginEmail) VALUES (?,?,?,?)';
        const values = [nome, cnh, telefone, loginEmail];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

module.exports = {
    selectAll: selectAll,
    insert: insert
};
