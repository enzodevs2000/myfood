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
    
    let registro = request.params.registro;
    let nome = request.query.nome;
    let cnh = request.query.cnh;
    let telefone = request.query.telefone;


    if (registro && nome && cnh && telefone) {
        await EntregadorService.update(nome, cnh, telefone, registro);
        json.result = {nome, cnh, telefone, registro};
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
    insert: insert,
    update: update,
    delete: _delete
}