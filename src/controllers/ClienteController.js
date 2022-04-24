const ClienteService = require('../services/ClienteService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let clientes = await ClienteService.selectAll();

    for (let i in clientes) {
        json.result.push({
            cpf: clientes[i].cpf,
            nome: clientes[i].nome,
            dataNascimento: clientes[i].dataNascimento, 
            telefone : clientes[i].telefone, 
            loginEmail: clientes[i].loginEmail
        })
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let cpf = request.query.cpf;
    let nome = request.query.nome;
    let dataNascimento = request.query.dataNascimento;
    let telefone = request.query.telefone;
    let loginEmail = request.query.loginEmail;

    if (cpf && nome && dataNascimento && telefone && loginEmail) {
        let cliente = await ClienteService.insert(cpf, nome, dataNascimento, telefone, loginEmail);
        json.result = {cpf: cpf, nome: nome, dataNascimento: dataNascimento, telefone: telefone, loginEmail : loginEmail}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    insert: insert
}