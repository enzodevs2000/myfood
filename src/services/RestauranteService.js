const { acceptsEncodings, accepts } = require('express/lib/request');
const db = require('../db');

function update(nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro, cnpj) {
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE restaurante SET cnpj = ?, nome = ?, aberto = ?, horarioAbertura = ?, horarioFechamento = ?, taxaDeEntrega = ?, gerenteRegistro = ? WHERE cnpj = ?;';
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
    update : update,
    delete : _delete
}