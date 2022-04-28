<<<<<<< HEAD
const RestauranteService = require('../services/RestauranteService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let restaurantes = await RestauranteService.selectAll();

    for (let i in restaurantes) {
        json.result.push({
            cnpj: restaurantes[i].cnpj,
            nome: restaurantes[i].nome,
            aberto: restaurantes[i].aberto, 
            horarioAbertura : restaurantes[i].horarioAbertura, 
            horarioFechamento : restaurantes[i].horarioFechamento, 
            taxaDeEntrega: restaurantes[i].taxaDeEntrega,
            gerenteRegistro: restaurantes[i].gerenteRegistro
        })
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let cnpj = request.query.cnpj;
=======
const res = require('express/lib/response');
const LoginService = require('../services/RestauranteService');

async function update(request, response) {
    let json = {error:'', result:[]};
    
    let cnpj = request.params.cnpj;
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
    let nome = request.query.nome;
    let aberto = request.query.aberto;
    let horarioAbertura = request.query.horarioAbertura;
    let horarioFechamento = request.query.horarioFechamento;
    let taxaDeEntrega = request.query.taxaDeEntrega;
    let gerenteRegistro = request.query.gerenteRegistro;

<<<<<<< HEAD
    // let cnpj = request.body.cnpj;
    // let nome = request.body.nome;
    // let aberto = request.body.aberto;
    // let horarioAbertura = request.body.horarioAbertura;
    // let horarioFechamento = request.body.horarioFechamento;
    // let taxaDeEntrega = request.body.taxaDeEntrega;
    // let gerenteRegistro = request.body.gerenteRegistro;

    console.log(`CNPJ: ${cnpj}`);
    console.log(`Nome: ${nome}`);
    console.log(`Aberto: ${aberto}`);
    console.log(`Horario de Abertura: ${horarioAbertura}`);
    console.log(`Horario de Fechamento: ${horarioFechamento}`);
    console.log(`Taxa de Entrega: ${taxaDeEntrega}`);
    console.log(`Registro Gerente: ${gerenteRegistro}`);

    if (cnpj && nome && aberto && horarioAbertura && horarioFechamento && taxaDeEntrega && gerenteRegistro) {
        let restaurante = await RestauranteService.insert(cnpj, nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro);

        json.result = {
            cnpj: cnpj, 
            nome: nome, 
            aberto: aberto, 
            horarioAbertura: horarioAbertura, 
            horarioFechamento : horarioFechamento,
            taxaDeEntrega: taxaDeEntrega,
            gerenteRegistro: gerenteRegistro
        }
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function update(request, response) {
    let json = {error:'', result:[]};
    
    let loginEmail = request.params.loginEmail;
    let nome = request.query.nome;
    let dataNascimento = request.query.dataNascimento;
    let telefone = request.query.telefone;


    if (loginEmail && nome && dataNascimento && telefone) {
        await RestauranteService.update(nome, dataNascimento, telefone, loginEmail);
        json.result = {nome, dataNascimento, telefone, loginEmail};
=======

    if (cnpj && nome && aberto && horarioAbertura && horarioFechamento && taxaDeEntrega && gerenteRegistro) {
        await RestauranteService.update(nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro, cnpj);
        json.result = {nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro}
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

async function _delete(request, response) {
    let json = {error:'', result:[]};
    
    await RestauranteService.delete(request.params.cnpj);

    response.json(json);
}

module.exports = {
<<<<<<< HEAD
    selectAll: selectAll,
    insert: insert,
=======
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5
    update: update,
    delete: _delete
}