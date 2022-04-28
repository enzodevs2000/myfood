async function createLogin(email, senha) {
    const url = new URL('http://localhost:3000/api/login');

    url.searchParams.append('email', email);
    url.searchParams.append('senha', senha);
    url.searchParams.append('permissao', 3);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function createEntregador(nome, cnh, telefone, loginEmail) {
    const url = new URL('http://localhost:3000/api/entregador');

    url.searchParams.append('cnh', cnh);
    url.searchParams.append('nome', nome);
    url.searchParams.append('telefone', telefone);
    url.searchParams.append('loginEmail', loginEmail);

    const init = {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData;
}


/* EVENT HANDLERS =================================================== */

async function createAccount(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value; 
    const senha = document.querySelector('#password').value; 
    const nome = document.querySelector('#name').value; 
    const cnh = document.querySelector('#cnh').value; 
    const telefone = document.querySelector('#phone').value; 

    await createLogin(email, senha);
    const responseInfo = await createEntregador(nome, cnh, telefone, email);

    if (responseInfo.result.length != 0) {
        window.location.replace('./login.html');
    } else {
        alert('Erro no cadastro!');
    }
}


/* EVENT LISTENERS ================================================== */

const form = document.querySelector('form');
form.addEventListener('submit', createAccount);