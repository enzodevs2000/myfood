const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');


function selectAll() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM login', (error, results) => {
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
        const sql = 'SELECT * FROM login WHERE email=?';
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

function insert(email, senha, permissao) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO login VALUES (?,?,?)';
        const values = [email, senha, permissao];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function update(email, senha, permissao, loginEmail) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE login SET email = ?, senha = ?, permissao = ? WHERE email = ?';
        const values = [email, senha, permissao, loginEmail];

        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        })
    })
}

function _delete(email) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM login WHERE email = ?';
        const values = email;

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
