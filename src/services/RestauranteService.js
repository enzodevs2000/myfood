const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');

<<<<<<< HEAD

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
=======
function update(nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro, cnpj) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE restaurante SET cnpj = ?, nome = ?, aberto = ?, horarioAbertura = ?, horarioFechamento = ?, taxaDeEntrega = ?, gerenteRegistro = ? WHERE cnpj = ?;';
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
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

<<<<<<< HEAD
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

=======
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
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
<<<<<<< HEAD
    selectAll: selectAll,
    insert: insert,
    update: update,
    delete: _delete
};
=======
    update : update,
    delete : _delete
}
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
