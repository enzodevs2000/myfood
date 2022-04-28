async function getUserData(email) {
    const initialFetch = await fetch(`http://localhost:3000/api/entregador/proc/${email}`);

    const jsonData = await initialFetch.json();

    return jsonData.result[0];
}

async function displayUserData() {
    const userLogin = JSON.parse(sessionStorage.getItem('user'));
    const userData = await getUserData(userLogin.email);
    
    const nomeInput = document.querySelector('#nome');
    const cnhInput = document.querySelector('#cnh');
    const telefoneInput = document.querySelector('#telefone');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');
    
    nomeInput.value = userData.nome;
    cnhInput.value = userData.cnh;
    telefoneInput.value = userData.telefone;
    emailInput.value = userLogin.email;
    senhaInput.value = userLogin.senha;
}

displayUserData();