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

function selectByEmail(email) {
    return new Promise((resolve, reject) => {
        const sql = `CALL selectEntregadorByEmail(?)`;
        const values = email;

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            if (results.length > 0) {
                resolve(results[0]);
            } else {
                resolve(false);
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

function update(nome, cnh, telefone, registro) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE entregador SET nome = ?, cnh = ?, telefone = ? WHERE registro = ?';
        const values = [nome, cnh, telefone, registro];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function _delete(registro) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM entregador WHERE registro = ?';
        const values = registro;

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
    selectByEmail: selectByEmail,
    insert: insert,
    update: update,
    delete: _delete
};
