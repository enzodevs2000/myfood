const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');

function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM imagens', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(imagem) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO imagens VALUES (?)';
        const values = [imagem];

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
    selectAll : selectAll,
    insert: insert
}