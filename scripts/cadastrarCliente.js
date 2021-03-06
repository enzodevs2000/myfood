async function createLogin(email, senha) {
    const url = new URL('http://localhost:3000/api/login');

    url.searchParams.append('email', email);
    url.searchParams.append('senha', senha);
    url.searchParams.append('permissao', 1);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function createCliente(cpf, nome, dataNascimento, telefone, loginEmail) {
    const url = new URL('http://localhost:3000/api/cliente');

    url.searchParams.append('cpf', cpf);
    url.searchParams.append('nome', nome);
    url.searchParams.append('dataNascimento', dataNascimento);
    url.searchParams.append('telefone', telefone);
    url.searchParams.append('loginEmail', loginEmail);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}


/* EVENT HANDLERS =================================================== */

async function createAccount(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value; 
    const senha = document.querySelector('#password').value; 
    const cpf = document.querySelector('#cpf').value; 
    const nome = document.querySelector('#name').value; 
    const dataNascimento = document.querySelector('#birth').value; 
    const telefone = document.querySelector('#phone').value; 

    await createLogin(email, senha);
    const responseInfo = await createCliente(cpf, nome, dataNascimento, telefone, email);

    if (responseInfo.length != 0) {
        window.location.replace('./login.html');
    } else {
        alert('Erro no cadastro!');
    }
}


/* EVENT LISTENERS ================================================== */

const form = document.querySelector('form');
form.addEventListener('submit', createAccount);