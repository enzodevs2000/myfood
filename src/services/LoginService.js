const { acceptsEncodings } = require('express/lib/request');
const db = require('../db');

function selectLogins() {
    return new Promise((accept, reject) => {
        db.query('SELECT * FROM login', (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            accept(results);
        })
    })
}

function selectLoginByEmail(email) {
    return new Promise((accept, reject) => {
        const sql = 'SELECT * FROM login WHERE email=?';
        const values = email;
        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            if (results.length > 0) {
                accept(results[0]);
            } else {
                accept(false);
            }

            accept(results);
        })
    })
}

module.exports = {
    selectLogins: selectLogins,

    selectLoginByEmail: selectLoginByEmail
};
