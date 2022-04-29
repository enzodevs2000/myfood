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

function selectByEmail(email) {
    return new Promise((resolve, reject) => {
        const sql = `CALL selectClienteByEmail(?)`;
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

function update(cpf, nome, dataNascimento, telefone, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE cliente SET cpf = ?, nome = ?, dataNascimento = ?, telefone = ? WHERE loginEmail = ?';
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

function _delete(cpf) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM cliente WHERE cpf = ?';
        const values = cpf;

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
