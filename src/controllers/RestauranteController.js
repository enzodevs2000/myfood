const res = require('express/lib/response');
const LoginService = require('../services/RestauranteService');

async function update(request, response) {
    let json = {error:'', result:[]};
    
    let cnpj = request.params.cnpj;
    let nome = request.query.nome;
    let aberto = request.query.aberto;
    let horarioAbertura = request.query.horarioAbertura;
    let horarioFechamento = request.query.horarioFechamento;
    let taxaDeEntrega = request.query.taxaDeEntrega;
    let gerenteRegistro = request.query.gerenteRegistro;


    if (cnpj && nome && aberto && horarioAbertura && horarioFechamento && taxaDeEntrega && gerenteRegistro) {
        await RestauranteService.update(nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro, cnpj);
        json.result = {nome, aberto, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro}
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
    update: update,
    delete: _delete
}