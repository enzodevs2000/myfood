/* FETCH FUNCTIONS ================================================== */

/** Faz a requisição à API procurando por um login específico.
 * 
 * @param {String} email O email do login a ser procurado no banco de dados.
 * @return {Array} Um array com os dados do login, caso exista.
 */
async function searchLogin(email) {
    const initialFetch = await fetch(`http://localhost:3000/api/login/${email}`);

    const jsonData = await initialFetch.json();

    return jsonData.result;
}


/* AUXILIARY FUNCTIONS ============================================== */

/** Valida os dados inseridos pelo usuário na tela de login.
 * 
 * @return {Object} Um objeto com informações sobre o login. A primeira
 * posição do objeto diz se o login é válido, enquanto a segunda contém 
 * um array com os dados do login recuperados do banco.
 */
async function validateLogin() {
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#password').value;
    
    const result = await searchLogin(email);
    console.log(result);
    if (result.length != 0 && result.senha == senha) {
        return {valid: true, data: result};
    }
        
    return {valid: false, data: result};
}


/* EVENT HANDLERS =================================================== */

/** Persiste os dados do login no sessionStorage do navegador 
 * e redireciona o usuário para a página de acordo, caso seu login
 * exista no banco de dados.
 * 
 * @param {Event} O evento disparado.
 */
async function submitForm(event) {
    event.preventDefault();

    const login = await validateLogin();
    
    if (login.valid) {
        sessionStorage.setItem('user', JSON.stringify(login.data));

        switch (login.data.permissao) {
            case 1:
                window.location.replace("./perfil-cliente.html");
                break;
            case 2:
                window.location.replace("./perfil-gerente.html");
                break;
            default:
                window.location.replace("./perfil-entregador.html");
                break;
        }
        
    } else {
        alert('Login não é válido!');
    }
}


/* EVENT LISTENERS ================================================== */

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);


// GET ----------------------------------------------------------- //
    
// fetch('http://localhost:3000/api/login/empresa1@example.com')
//     .then(response => response.json())
//     .then(jsonObj => {
//         console.log(jsonObj.result);
//     })



// POST ---------------------------------------------------------- //

/* 
const url = new URL('http://localhost:3000/api/login');
url.searchParams.append('email', 'paklramDEs@GMAIL.COM');
url.searchParams.append('senha', 'params');
url.searchParams.append('permissao', '2');

fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})
.then(response => response.json())
.then(json => console.log(json)); 
*/



// UPDATE --------------------------------------------------------- //

// const url = new URL('http://localhost:3000/api/login/galodebriga@example.com');
// url.searchParams.append('email', 'galodebriga@example.com');
// url.searchParams.append('senha', 'galodebriga');
// url.searchParams.append('permissao', '2');

// fetch(url, {
//     method: 'PUT',
//     headers: {'Content-type': 'application/json; charset=UTF-8'}
// })
// .then(response => response.json())
// .then(json => console.log(json));



// DELETE -------------------------------------------------------- //

// const url = new URL('http://localhost:3000/api/login/enzo@example.com');

// fetch(url, {
//     method: 'DELETE',
//     headers: {'Content-type': 'application/json; charset=UTF-8'}
// })
// .then(response => response.json())
// .then(json => console.log(json));