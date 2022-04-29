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

function selectByCpf(cpf) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM gerente WHERE cpf=?';
        const values = cpf;

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

function selectByEmail(email) {
    return new Promise((resolve, reject) => {
        const sql = `CALL selectGerenteByEmail(?)`;
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

function selectGerenteAndRestaurante() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM vw_restGerente', (error, results) => {
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

function update(nome, cpf, registro) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE gerente SET cpf = ?, nome = ? WHERE registro = ?';
        const values = [nome, cpf, registro];

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
        const sql = 'DELETE FROM gerente WHERE registro = ?';
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
    selectByCpf: selectByCpf,
    selectByEmail: selectByEmail,
    selectGerenteAndRestaurante: selectGerenteAndRestaurante,
    insert: insert,
    update: update,
    delete: _delete
};
