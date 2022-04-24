const express = require('express');
const router = express.Router();

const LoginController = require('./controllers/LoginController');

// Rotas para LOGIN
router.get('/login', LoginController.selectAll);
router.get('/login/:email', LoginController.selectByEmail);
router.post('/login', LoginController.insert);


// Rotas para CLIENTE
//router.get('/cliente', ClienteController.selectClientes);

// Rotas para GERENTE
//router.get('/gerente', GerenteController.selectGerentes);

// Rotas para ENTREGADOR
//router.get('/entregador', EntregadorController.selectEntregadores);

module.exports = router;