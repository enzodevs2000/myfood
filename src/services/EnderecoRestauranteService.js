const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');

function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM enderecoRestaurante', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(cep, cidade, estado, bairro, complemento, numero, restauranteCnpj) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO enderecoRestaurante VALUES (?,?,?,?,?,?,?)';
        const values = [cep, cidade, estado, bairro, complemento, numero, restauranteCnpj];

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
}