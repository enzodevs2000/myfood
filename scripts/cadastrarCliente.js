/* FETCH FUNCTIONS ================================================== */

/** Faz a requisição à API para inserir um login no banco de dados.
 * 
 * @param {String} email O email do login a ser inserido no banco de dados.
 * @param {String} senha A senha do login a ser inserido no banco de dados.
 * @return {Array} Um array com os resultdos da requisição.
 */
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

/** Faz a requisição à API para inserir um cliente no banco de dados.
 * 
 * @param {String} cpf O cpf do cliente a ser inserido no banco de dados.
 * @param {String} nome O nome do cliente a ser inserido no banco de dados.
 * @param {String} dataNascimento A data de nascimento do cliente a ser inserido no banco de dados.
 * @param {String} telefone O telefone do cliente a ser inserido no banco de dados.
 * @param {String} loginEmail A email do login do cliente a ser inserido no banco de dados.
 * @return {Array} Um array com os resultdos da requisição.
 */
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

/** Persiste os dados do login no sessionStorage do navegador 
 * e redireciona o usuário para a página de acordo, caso seu login
 * exista no banco de dados.
 * 
 * @param {Event} O evento disparado.
 */
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