const clienteButton = document.querySelector('#cliente');
const gerenteButton = document.querySelector('#gerente');
const entregadorButton = document.querySelector('#entregador');

cliente.addEventListener('click', () => {
    // window.location.replace('./cadastrar-cliente.html');
    window.location.href = './cadastrar-cliente.html';
})

gerente.addEventListener('click', () => {
    window.location.replace('./cadastrar-gerente.html');
})

entregador.addEventListener('click', () => {
    window.location.replace('./cadastrar-entregador.html');
})

