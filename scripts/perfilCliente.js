async function getUserData(email) {
    const initialFetch = await fetch(`http://localhost:3000/api/cliente/proc/${email}`);

    const jsonData = await initialFetch.json();

    return jsonData.result[0];
}

async function displayUserData() {
    userLogin = JSON.parse(sessionStorage.getItem('user'));
    const userData = await getUserData(userLogin.email);

    nomeInput.value = userData.nome;
    cpfInput.value = userData.cpf;
    dataNascimentoInput.value = userData.dataNascimento.slice(0, 10);
    telefoneInput.value = userData.telefone;
    emailInput.value = userLogin.email;
    senhaInput.value = userLogin.senha;
}

async function updateLogin() {
    userLogin = JSON.parse(sessionStorage.getItem('user'));
    const url = new URL(`http://localhost:3000/api/login/${userLogin.email}`);
    
    url.searchParams.append('email', emailInput.value);
    url.searchParams.append('senha', senhaInput.value);
    url.searchParams.append('permissao', 1);

    const init = {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function updateCliente() {
    const newLogin = await updateLogin();

    sessionStorage.setItem('user', JSON.stringify(newLogin));

    const newUserLogin = JSON.parse(sessionStorage.getItem('user'));

    const url = new URL(`http://localhost:3000/api/cliente/${newUserLogin.email}`);

    url.searchParams.append('cpf', cpfInput.value);
    url.searchParams.append('nome', nomeInput.value);
    url.searchParams.append('dataNascimento', dataNascimentoInput.value);
    url.searchParams.append('telefone', telefoneInput.value);

    const init = {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    disableUpdate();
    displayUserData();
}

async function deleteLogin() {
    userLogin = JSON.parse(sessionStorage.getItem('user'));
    const url = new URL(`http://localhost:3000/api/login/${userLogin.email}`);

    const init = {
        method: 'DELETE',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    if (confirm('Tem certeza de quer excluir esta conta?')) {
        const initialFetch = await fetch(url, init);
        window.location.replace('./login.html');
    }
}

function enableUpdate() {
    nomeInput.removeAttribute('disabled');
    cpfInput.removeAttribute('disabled');
    telefoneInput.removeAttribute('disabled');
    dataNascimentoInput.removeAttribute('disabled');
    emailInput.removeAttribute('disabled');
    senhaInput.removeAttribute('disabled');

    atualizarButton.style.display = 'none';
    deletarButton.style.display = 'none';
    salvarButton.style.display = 'initial';
    cancelarButton.style.display = 'initial';
}

function disableUpdate() {
    nomeInput.setAttribute('disabled', true);
    cpfInput.setAttribute('disabled', true);
    telefoneInput.setAttribute('disabled', true);
    dataNascimentoInput.setAttribute('disabled', true);
    emailInput.setAttribute('disabled', true);
    senhaInput.setAttribute('disabled', true);

    atualizarButton.style.display = 'initial';
    deletarButton.style.display = 'initial';
    salvarButton.style.display = 'none';
    cancelarButton.style.display = 'none';
}

// ============================================================== //

let userLogin = JSON.parse(sessionStorage.getItem('user'));
const nomeInput = document.querySelector('#nome');
const cpfInput = document.querySelector('#cpf');
const telefoneInput = document.querySelector('#telefone');
const dataNascimentoInput = document.querySelector('#dataNascimento');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const atualizarButton = document.querySelector('#atualizar');
const deletarButton = document.querySelector('#deletar');
const salvarButton = document.querySelector('#salvar');
const cancelarButton = document.querySelector('#cancelar');


displayUserData();


atualizarButton.addEventListener('click', enableUpdate);
cancelarButton.addEventListener('click', disableUpdate);
salvarButton.addEventListener('click', updateCliente);
deletarButton.addEventListener('click', deleteLogin);