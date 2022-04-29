const ImagemService = require('../services/ImagensService');

async function selectAll(request, response) {
    let json = {error:'', result:[]};
    let imagens = await ImagemService.selectAll();

    for (let i in imagens) {
        json.result.push({
            imagem: imagens[i].imagem,
        })
    }

    response.json(json);
}


async function insert(request, response) {
    let json = {error:'', result:[]};
    
    let imagem = request.file.filename;
    console.log(imagem);


    if (imagem) {
        await ImagemService.insert(imagem);
        json.result = {imagem}
    } else {
        json.error = 'Campos não enviados!';
    }

    response.json(json);
}

module.exports = {
    selectAll: selectAll,
    insert: insert
}