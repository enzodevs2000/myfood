// GET ----------------------------------------------------------- //
    
fetch('http://localhost:3000/api/cliente')
    .then(response => response.json())
    .then(jsonObj => {
        console.log(jsonObj.result);
    })



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