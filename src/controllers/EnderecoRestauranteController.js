const res = require('express/lib/response');
const EnderecoRestauranteService = require('../services/EnderecoRestauranteService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};

    let enderecosRestaurante = await EnderecoRestauranteService.selectAll();

    for (let i in enderecosRestaurante) {
        json.result.push({
            cep: enderecosRestaurante[i].cep,
            cidade: enderecosRestaurante[i].cidade,
            estado: enderecosRestaurante[i].estado, 
            bairro : enderecosRestaurante[i].bairro, 
            complemento: enderecosRestaurante[i].complemento,
            numero: enderecosRestaurante[i].numero,
            restauranteCnpj: enderecosRestaurante[i].restauranteCnpj
        })
    }

    response.json(json);
}

async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let cep = request.query.cep;
    let cidade = request.query.cidade;
    let estado = request.query.estado;
    let bairro = request.query.bairro;
    let complemento = request.query.complemento;
    let numero = request.query.numero;
    let restauranteCnpj = request.query.restauranteCnpj;

    if (cidade && cep && estado && bairro && complemento && numero && restauranteCnpj) {
        let enderecosRestaurante = await EnderecoRestauranteService.insert(cep, cidade, estado, bairro, complemento, numero, restauranteCnpj);
        json.result = {cep, cidade, estado, bairro, complemento, numero, restauranteCnpj}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    insert: insert
}