const GerenteService = require('../services/GerenteService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let gerentes = await GerenteService.selectAll();

    for (let i in gerentes) {
        json.result.push({
            registro: gerentes[i].registro,
            cpf: gerentes[i].cpf,
            nome: gerentes[i].nome,
            loginEmail: gerentes[i].loginEmail
        })
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    
    let cpf = request.query.cpf;
    let nome = request.query.nome;
    let loginEmail = request.query.loginEmail;

    if (cpf && nome && loginEmail) {
        let gerente = await GerenteService.insert(cpf, nome, loginEmail);
        json.result = {cpf: cpf, nome: nome, loginEmail : loginEmail}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    insert: insert
}