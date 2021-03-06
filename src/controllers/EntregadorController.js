const EntregadorService = require('../services/EntregadorService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let entregadores = await EntregadorService.selectAll();

    for (let i in entregadores) {
        json.result.push({
            registro: entregadores[i].registro,
            nome: entregadores[i].nome,
            cnh: entregadores[i].cnh, 
            telefone : entregadores[i].telefone, 
            loginEmail: entregadores[i].loginEmail
        })
    }

    response.json(json);
}

async function selectByEmail(request, response) {
    let json = {error:'', result:[]};

    let email = request.params.email;
    let entregador = await EntregadorService.selectByEmail(email);

    if (entregador) {
        json.result = entregador;
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let nome = request.query.nome;
    let cnh = request.query.cnh;
    let telefone = request.query.telefone;
    let loginEmail = request.query.loginEmail;

    if (cnh && nome && telefone && loginEmail) {
        let entregador = await EntregadorService.insert(nome, cnh, telefone, loginEmail);
        json.result = {nome: nome, cnh: cnh, telefone: telefone, loginEmail : loginEmail}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function update(request, response) {
    let json = {error:'', result:[]};
    
    let loginEmail = request.params.email;
    let nome = request.query.nome;
    let cnh = request.query.cnh;
    let telefone = request.query.telefone;

    if (loginEmail && nome && cnh && telefone) {
        await EntregadorService.update(nome, cnh, telefone, loginEmail);
        json.result = {nome, cnh, telefone, loginEmail};
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function _delete(request, response) {
    let json = {error:'', result:[]};
    
    await EntregadorService.delete(request.params.registro);

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    selectByEmail: selectByEmail,
    insert: insert,
    update: update,
    delete: _delete
}