const res = require('express/lib/response');
const LoginService = require('../services/LoginService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let logins = await LoginService.selectAll();

    for (let i in logins) {
        json.result.push({
            email: logins[i].email,
            senha: logins[i].senha,
            permissao: logins[i].permissao
        })
    }

    response.json(json);
}

async function selectByEmail(request, response) {
    let json = {error:'', result:[]};

    let email = request.params.email;
    let login = await LoginService.selectByEmail(email);

    if (login) {
        json.result = login;
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let email = request.query.email;
    let senha = request.query.senha;
    let permissao = request.query.permissao;

    if (email && senha && permissao) {
        let login = await LoginService.insert(email, senha, permissao);
        json.result = {email, senha, permissao}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    selectByEmail: selectByEmail,
    insert: insert
}