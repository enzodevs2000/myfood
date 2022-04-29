const express = require('express');
const router = express.Router();

const LoginController = require('./controllers/LoginController');
const ClienteController = require('./controllers/ClienteController');
const EntregadorController = require('./controllers/EntregadorController');
const GerenteController = require('./controllers/GerenteController');
const RestauranteController = require('./controllers/RestauranteController');
const EnderecoRestauranteController = require('./controllers/EnderecoRestauranteController')

const { route } = require('express/lib/router');

// Rotas para LOGIN
router.get('/login', LoginController.selectAll);
router.get('/login/:email', LoginController.selectByEmail);
router.post('/login', LoginController.insert);
router.put('/login/:email', LoginController.update);
router.delete('/login/:email', LoginController.delete);


// Rotas para CLIENTE
router.get('/cliente', ClienteController.selectAll);
router.get('/cliente/proc/:email', ClienteController.selectByEmail);
router.post('/cliente', ClienteController.insert);
router.put('/cliente/:email', ClienteController.update);
router.delete('/cliente', ClienteController.delete);


// Rotas para GERENTE
router.get('/gerente', GerenteController.selectAll);
router.get('/gerente/:cpf', GerenteController.selectByCpf);
router.get('/gerente/proc/:email', GerenteController.selectByEmail);
router.get('/gerente/view', GerenteController.selectGerenteAndRestaurante);
router.post('/gerente', GerenteController.insert);
router.put('/gerente', GerenteController.update);
router.delete('/gerente', GerenteController.delete);


// Rotas para ENTREGADOR
router.get('/entregador', EntregadorController.selectAll);
router.get('/entregador/proc/:email', EntregadorController.selectByEmail);
router.post('/entregador', EntregadorController.insert);
router.put('/entregador/:email', EntregadorController.update);
router.delete('/entregador', EntregadorController.delete);


// Rotas para RESTAURANTE
router.get('/restaurante', RestauranteController.selectAll);
router.post('/restaurante', RestauranteController.insert);
router.put('/restaurante', RestauranteController.update);
router.delete('/restaurante', RestauranteController.delete);


// Rotas para ENDERECORESTAURANTE
router.get('/enderecorestaurante', EnderecoRestauranteController.selectAll);
router.post('/enderecorestaurante', EnderecoRestauranteController.insert);


module.exports = router;