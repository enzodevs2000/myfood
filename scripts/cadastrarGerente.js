async function getRegistroGerente(cpf) {
    const initialFetch = await fetch(`http://localhost:3000/api/gerente/${cpf}`);

    const jsonData = await initialFetch.json();

    return jsonData.result.registro;
}

async function createLogin(email, senha) {
    const url = new URL('http://localhost:3000/api/login');

    url.searchParams.append('email', email);
    url.searchParams.append('senha', senha);
    url.searchParams.append('permissao', 2);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function createGerente(cpf, nome, loginEmail) {
    const url = new URL('http://localhost:3000/api/gerente');

    url.searchParams.append('cpf', cpf);
    url.searchParams.append('nome', nome);
    url.searchParams.append('loginEmail', loginEmail);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function createRestaurante(cnpj, nome, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro) {
    const url = new URL('http://localhost:3000/api/restaurante');

    url.searchParams.append('cnpj', cnpj);
    url.searchParams.append('nome', nome);
    url.searchParams.append('aberto', 1);
    url.searchParams.append('horarioAbertura', horarioAbertura);
    url.searchParams.append('horarioFechamento', horarioFechamento);
    url.searchParams.append('taxaDeEntrega', taxaDeEntrega);
    url.searchParams.append('gerenteRegistro', gerenteRegistro);
    

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

function goToManagerData() {
    const form = document.querySelector('form');
    const main = document.querySelector('main');
    const formElements = form.children;
    
    for (idx in formElements) {
        const element = formElements[idx];
    
        if (idx < 5) {
            element.style.display = 'initial';
            main.style.padding = '40px 30px';
            titulo.textContent = 'Seja parceiro do myFood!';
        } else if (idx > 4 && idx < 11) {
            element.style.display = 'none';
        }
    }
}


/* EVENT HANDLERS =================================================== */

async function createAccount() {
    const email = document.querySelector('#email').value; 
    const senha = document.querySelector('#password').value; 
    const cpf = document.querySelector('#cpf').value; 
    const nome = document.querySelector('#name').value; 
    const cnpj = document.querySelector('#cnpj').value;
    const nomeRestaurante = document.querySelector('#nome-restaurante').value;
    const horarioAbertura = document.querySelector('#horario-abertura').value;
    const horarioFechamento = document.querySelector('#horario-fechamento').value;
    const taxaDeEntrega = document.querySelector('#taxa-entrega').value;


    await createLogin(email, senha);

    const gerente = await createGerente(cpf, nome, email);

    const gerenteRegistro = await getRegistroGerente(gerente.cpf);

    const restaurante = await createRestaurante(cnpj, nomeRestaurante, horarioAbertura, horarioFechamento, taxaDeEntrega, gerenteRegistro);


    if (gerente.length != 0 && restaurante.length != 0) {
        window.location.replace('./login.html');
    } else {
        alert('Erro no cadastro!');
    }

}

function goToRestaurantData() {
    const form = document.querySelector('form');
    const main = document.querySelector('main');
    const formElements = form.children;
    
    for (idx in formElements) {
        const element = formElements[idx];
    
        if (idx < 5) {
            element.style.display = 'none';
        } else if (idx > 4 && idx < 11) {
            element.style.display = 'initial';
            main.style.padding = '30px 30px';
            titulo.textContent = 'Nos informe sobre seu restaurante!';
        }
    }
}

function goBack() {
    const criarContaButton = document.querySelector('#criar-conta');

    if (criarContaButton.style.display == 'none') {
        window.location.replace('./escolher-conta.html');
    }

    goToManagerData();
}


/* EVENT LISTENERS ================================================== */

const continuarButton = document.querySelector('#continuar');
continuarButton.addEventListener('click', goToRestaurantData);

const criarContaButton = document.querySelector('#criar-conta');
criarContaButton.addEventListener('click', createAccount);

const goBackIcon = document.querySelector('#back');
goBackIcon.addEventListener('click', goBack)