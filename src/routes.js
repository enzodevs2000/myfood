const express = require('express');
const router = express.Router();

const LoginController = require('./controllers/LoginController');
const ClienteController = require('./controllers/ClienteController');
const EntregadorController = require('./controllers/EntregadorController');
const GerenteController = require('./controllers/GerenteController');
const RestauranteController = require('./controllers/RestauranteController');
const EnderecoRestauranteController = require('./controllers/EnderecoRestauranteController')
const { route } = require('express/lib/router');
const RestauranteController = require('./controllers/RestauranteController');

// Rotas para LOGIN
router.get('/login', LoginController.selectAll);
router.get('/login/:email', LoginController.selectByEmail);
router.post('/login', LoginController.insert);
router.put('/login/:email', LoginController.update);
router.delete('/login/:email', LoginController.delete);


// Rotas para CLIENTE
router.get('/cliente', ClienteController.selectAll);
router.post('/cliente', ClienteController.insert);
router.put('/cliente', ClienteController.update);
router.delete('/cliente', ClienteController.delete);

// Rotas para GERENTE
router.get('/gerente', GerenteController.selectAll);
router.get('/gerente/:cpf', GerenteController.selectByCpf);
router.post('/gerente', GerenteController.insert);
router.put('/gerente', GerenteController.update);
router.delete('/gerente', GerenteController.delete);

// Rotas para ENTREGADOR
router.get('/entregador', EntregadorController.selectAll);
router.post('/entregador', EntregadorController.insert);
router.put('/entregador', EntregadorController.update);
router.delete('/entregador', EntregadorController.delete);

// Rotas para RESTAURANTE
<<<<<<< HEAD
router.get('/restaurante', RestauranteController.selectAll);
router.post('/restaurante', RestauranteController.insert);


=======
router.put('/restaurante', RestauranteController.update);
router.delete('/restaurante',RestauranteController.delete);

// Rotas para ENDERECORESTAURANTE
router.get('/enderecorestaurante', EnderecoRestauranteController.selectAll);
router.post('/enderecorestaurante', EnderecoRestauranteController.insert);
>>>>>>> 71171bad049abbf5d1de412c846e2ce476662ff5

module.exports = router;