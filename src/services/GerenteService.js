const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');


function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM gerente', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(cpf, nome, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO gerente(cpf, nome, loginEmail) VALUES (?,?,?)';
        const values = [cpf, nome, loginEmail];

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
