const LoginService = require('../services/LoginService');

async function selectLogins(request, response) {
    let json = {error:'', result:[]};

    let logins = await LoginService.selectLogins();

    for (let i in logins) {
        json.result.push({
            email: logins[i].email,
            senha: logins[i].senha,
            permissao: logins[i].permissao
        })
    }

    response.json(json);
}

async function selectLoginByEmail(request, response) {
    let json = {error:'', result:[]};

    let email = request.params.email;
    let login = await LoginService.selectLoginByEmail(email);

    if (login) {
        json.result = login;
    }

    response.json(json);
}

async function insertLogin(request, response) {
    let json = {error:'', result:[]};
    
    let email = request.query.email;
    let senha = request.query.senha;
    let permissao = request.query.permissao;

    response.send({
        'email': email,
        'senha': senha,
        'permissao': permissao
    });

    //console.log(request.query.email);
    
    // if (email && senha && permissao) {
    //     LoginService.inserir(email, senha, permissao);
        
    //     json.result = {
    //         email, 
    //         senha,
    //         permissao
    //     };
    // }

    //response.json(json);
}

module.exports = {
    selectLogins: selectLogins,
    
    selectLoginByEmail: selectLoginByEmail
}