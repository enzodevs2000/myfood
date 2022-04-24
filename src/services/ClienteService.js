const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');


function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM cliente', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(cpf, nome, dataNascimento, telefone, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO cliente VALUES (?,?,?,?,?)';
        const values = [cpf, nome, dataNascimento, telefone, loginEmail];

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
