async function getUserData(email) {
    const initialFetch = await fetch(`http://localhost:3000/api/gerente/view/${email}`);

    const jsonData = await initialFetch.json();

    return jsonData.result[0];
}

async function displayUserData() {
    userLogin = JSON.parse(sessionStorage.getItem('user'));
    const userData = await getUserData(userLogin.email);

    nomeInput.value = userData.nomeGerente;
    cpfInput.value = userData.cpf;
    emailInput.value = userLogin.email;
    senhaInput.value = userLogin.senha;
    cnpjInput.value = userData.cnpj;
    nomeRestauranteInput.value = userData.nomeRestaurante;
    horarioAberturaInput.value = userData.horarioAbertura;
    horarioFechamentoInput.value = userData.horarioFechamento;
    taxaDeEntregaInput.value = userData.taxaDeEntrega;
}

async function updateLogin() {
    userLogin = JSON.parse(sessionStorage.getItem('user'));
    const url = new URL(`http://localhost:3000/api/login/${userLogin.email}`);
    
    url.searchParams.append('email', emailInput.value);
    url.searchParams.append('senha', senhaInput.value);
    url.searchParams.append('permissao', 2);

    const init = {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}

async function updateGerente() {
    const userData = await getUserData(userLogin.email);

    const url = new URL(`http://localhost:3000/api/gerente/${userData.registro}`);

    url.searchParams.append('nome', nomeInput.value);
    url.searchParams.append('cpf', cpfInput.value);

    const init = {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);
}

async function updateRestaurante() {
    const userData = await getUserData(userLogin.email);
    const url = new URL(`http://localhost:3000/api/restaurante/${userData.registro}`);

    url.searchParams.append('cnpj', cnpjInput.value);
    url.searchParams.append('nome', nomeRestauranteInput.value);
    url.searchParams.append('aberto', 1);
    url.searchParams.append('horarioAbertura', horarioAberturaInput.value);
    url.searchParams.append('horarioFechamento', horarioFechamentoInput.value);
    url.searchParams.append('taxaDeEntrega', taxaDeEntregaInput.value);

    const init = {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    const initialFetch = await fetch(url, init);
}

async function updateData() {
    const newLogin = await updateLogin();
    
    sessionStorage.setItem('user', JSON.stringify(newLogin));

    userLogin = JSON.parse(sessionStorage.getItem('user'));

    await updateGerente();
    await updateRestaurante();

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
    emailInput.removeAttribute('disabled');
    senhaInput.removeAttribute('disabled');
    cnpjInput.removeAttribute('disabled');
    nomeRestauranteInput.removeAttribute('disabled');
    horarioAberturaInput.removeAttribute('disabled');
    horarioFechamentoInput.removeAttribute('disabled');
    taxaDeEntregaInput.removeAttribute('disabled');

    atualizarButton.style.display = 'none';
    deletarButton.style.display = 'none';
    salvarButton.style.display = 'initial';
    cancelarButton.style.display = 'initial';
}

function disableUpdate() {
    nomeInput.setAttribute('disabled', true);
    cpfInput.setAttribute('disabled', true);
    emailInput.setAttribute('disabled', true);
    senhaInput.setAttribute('disabled', true);
    cnpjInput.setAttribute('disabled', true);
    nomeRestauranteInput.setAttribute('disabled', true);
    horarioAberturaInput.setAttribute('disabled', true);
    horarioFechamentoInput.setAttribute('disabled', true);
    taxaDeEntregaInput.setAttribute('disabled', true);

    displayUserData();

    atualizarButton.style.display = 'initial';
    deletarButton.style.display = 'initial';
    salvarButton.style.display = 'none';
    cancelarButton.style.display = 'none';
}

let userLogin = JSON.parse(sessionStorage.getItem('user'));
const nomeInput = document.querySelector('#nome');
const cpfInput = document.querySelector('#cpf');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const cnpjInput = document.querySelector('#cnpj');
const nomeRestauranteInput = document.querySelector('#nomeRestaurante');
const horarioAberturaInput = document.querySelector('#horarioAbertura');
const horarioFechamentoInput = document.querySelector('#horarioFechamento');
const taxaDeEntregaInput = document.querySelector('#taxaDeEntrega');

const atualizarButton = document.querySelector('#atualizar');
const deletarButton = document.querySelector('#deletar');
const salvarButton = document.querySelector('#salvar');
const cancelarButton = document.querySelector('#cancelar');


displayUserData();


atualizarButton.addEventListener('click', enableUpdate);
cancelarButton.addEventListener('click', disableUpdate);
salvarButton.addEventListener('click', updateData);
deletarButton.addEventListener('click', deleteLogin);