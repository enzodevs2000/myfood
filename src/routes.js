const express = require('express');
const router = express.Router();

const LoginController = require('./controllers/LoginController');
const ClienteController = require('./controllers/ClienteController');
const EntregadorController = require('./controllers/EntregadorController');
const GerenteController = require('./controllers/GerenteController');

// Rotas para LOGIN
router.get('/login', LoginController.selectAll);
router.get('/login/:email', LoginController.selectByEmail);
router.post('/login', LoginController.insert);
router.put('/login/:email', LoginController.update);
router.delete('/login/:email', LoginController.delete);


// Rotas para CLIENTE
router.get('/cliente', ClienteController.selectAll);
router.post('/cliente', ClienteController.insert);

// Rotas para GERENTE
router.get('/gerente', GerenteController.selectAll);
router.post('/gerente', GerenteController.insert);

// Rotas para ENTREGADOR
router.get('/entregador', EntregadorController.selectAll);
router.post('/entregador', EntregadorController.insert);

module.exports = router;