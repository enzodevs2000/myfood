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

async function selectByCpf(request, response) {
    let json = {error:'', result:[]};

    let cpf = request.params.cpf;
    let gerente = await GerenteService.selectByCpf(cpf);

    if (gerente) {
        json.result = gerente;
    }

    response.json(json);
}

async function selectByEmail(request, response) {
    let json = {error:'', result:[]};

    let email = request.params.email;
    let gerente = await GerenteService.selectByEmail(email);

    if (gerente) {
        json.result = gerente;
    }

    response.json(json);
}

async function selectGerenteAndRestaurante(request, response) {
    let json = {error:'', result:[]};
    console.log('i')

    let gerentesRestaurantes = await GerenteService.selectGerenteAndRestaurante();


    for (let i in gerentesRestaurantes) {
        json.result.push({
            registro: gerentesRestaurantes[i].registro,
            nomeGerente: gerentesRestaurantes[i].nomeGerente,
            nomeRestaurante: gerentesRestaurantes[i].nomeRestaurante,
            loginEmail: gerentesRestaurantes[i].loginEmail,
            cnpj: gerentesRestaurantes[i].cnpj,
            aberto: gerentesRestaurantes[i].aberto,
            horarioAbertura: gerentesRestaurantes[i].horarioAbertura,
            horarioFechamento: gerentesRestaurantes[i].horarioFechamento,
            taxaDeEntrega: gerentesRestaurantes[i].taxaDeEntrega
        })
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
        
    let cpf = request.query.cpf;
    let nome = request.query.nome;
    let loginEmail = request.query.loginEmail;

    // let cpf = request.body.cpf;
    // let nome = request.body.nome;
    // let loginEmail = request.body.loginEmail;

    if (cpf && nome && loginEmail) {
        let gerente = await GerenteService.insert(cpf, nome, loginEmail);

        json.result = {
            cpf: cpf, 
            nome: nome, 
            loginEmail: loginEmail
        }
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function update(request, response) {
    let json = {error:'', result:[]};
    
    let registro = request.params.registro;
    let cpf = request.query.nome;
    let nome = request.query.cnh;

    if (registro && cpf && nome) {
        await GerenteService.update(cpf, nome, registro);
        json.result = {cpf, nome, registro};
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function _delete(request, response) {
    let json = {error:'', result:[]};
    
    await GerenteService.delete(request.params.registro);

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    selectByCpf: selectByCpf,
    selectByEmail: selectByEmail,
    selectGerenteAndRestaurante: selectGerenteAndRestaurante,
    insert: insert,
    update: update,
    delete: _delete
}