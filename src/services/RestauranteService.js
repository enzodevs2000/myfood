const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');


function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM restaurante', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function insert(cnpj, nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO restaurante VALUES (?,?,?,?,?,?,?)';
        const values = [cnpj, nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function update(nome, dataNascimento, telefone, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE restaurante SET nome = ?, dataNascimento = ?, telefone = ? WHERE loginEmail = ?';
        const values = [nome, dataNascimento, telefone, loginEmail];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function _delete(cnpj) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM restaurante WHERE cnpj = ?';
        const values = cnpj;

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
    insert: insert,
    update: update,
    delete: _delete
};
