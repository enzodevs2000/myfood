# Como permissão define o tipo de login, ela precisa ser criada antes de login.
INSERT INTO permissao VALUES
	(1, 'cliente'),
    (2, 'gerente'),
    (3, 'entregador');


# O login precisa ser criado primeiro, pois as tabelas cliente, gerente e entregador refernciam ele.
INSERT INTO login (email, senha, permissao) VALUES
	('kleber@example.com', 'abcd123', 1),
    ('enzo@example.com', 'abcd123', 1),
    ('gabi@example.com', 'abcd123', 1),
    ('luciana@example.com', 'abcd123', 1),
    ('ricardo@example.com', 'abcd123', 1),
    ('empresa1@example.com', 'abcd123', 2),
    ('empresa2@example.com', 'abcd123', 2),
    ('empresa3@example.com', 'abcd123', 2),
    ('empresa4@example.com', 'abcd123', 2),
    ('empresa5@example.com', 'abcd123', 2),
    ('galodeluta@example.com', 'abcd456', 3),
    ('biu@example.com', 'abcd456', 3),
    ('entregador1@example.com', 'abcd456', 3),
    ('entregadoe2@example.com', 'abcd456', 3),
    ('entregador3@example.com', 'abcd456', 3);
    
INSERT INTO cliente VALUES
	('111.111.111-11', 'Kleber Rodrigues', '2002-07-21', '61 91111-1111', 1),
    ('222.222.222-22', 'Enzo Nunes', '2001-05-05', '61 92222-2222', 2),
    ('333.333.333-33', 'Gabriela Dias', '2002-02-04', '61 93333-3333', 3),
    ('444.444.444-44', 'César Augusto', '1998-12-10', '61 94444-4444', 4),
    ('555.555.555-55', 'Ricardo Martins', '1978-10-23', '61 95555-5555', 5);

INSERT INTO gerente(cpf, nome, loginCodigo) VALUES
	('666.666.666-66', 'Cristiano Ramalho', 6),
    ('777.777.777-77', 'Lionel Mendes', 7),
    ('888.888.888-88', 'Nilmar Junior', 8),
    ('999.999.999-99', 'Roberto Lima', 9),
    ('101.010.101-01', 'Sarah Vitória', 10);
    
INSERT INTO restaurante VALUES
	('13.574.594/0001-96', 'Burger King', true, '10:00', '04:00', 5, 1),
    ('01.603.603/0001-40', 'Giraffas', true, '11:00', '22:00', 0, 2),
    ('71.833.552/0001-29', 'Bobs', true, '12:00', '21:00', 2, 3),
    ('42.591.651/0001-43', "McDonald's", true, '11:00', '22:00', 0, 4),
    ('17.261.661/0007-69', 'Outback', false, '16:00', '00:00', 0, 5);
    
INSERT INTO  entregador(nome, cnh, telefone, loginCodigo) VALUES
	('Galo de Luta', '12223242829', '94002-8922', 11),
    ('Danilo Silva de Oliveira', '16171819202', '91234-5678', 12),
    ('João Santana', '11121314151', '92122-2324', 13),
    ('Márcio Lopes', '10987654321', '91020-3040', 14),
    ('Carla Cabral', '12345678910', '91111-2222', 15);
    
INSERT INTO enderecoRestaurante VALUES
	('73400-489', 'Brasília', 'DF', 'Águas Claras', 'DF Plaza' , 5, '13.574.594/0001-96'),
    ('83450-137', 'Brasília', 'DF', 'Vicente Pires', 'Prédio Vip-Mall', 10, '01.603.603/0001-40'),
    ('23471-319', 'Brasília', 'DF', 'Ceilandia', 'JK Shopping' , 20, '71.833.552/0001-29'),
    ('12345-678', 'Brasília', 'DF', 'Taguatinga', 'Taguatinga Shopping' , 3, '42.591.651/0001-43'),
    ('10111-121', 'Brasília', 'DF', 'Guará', 'ParkShopping' , 17, '17.261.661/0007-69');
    
INSERT INTO enderecoCliente VALUES
	('72430-129', 'Brasília', 'DF', 'Águas Claras', 'Avenida Jequitibá' , 5, '111.111.111-11'),
	('72150-100', 'Brasília', 'DF', 'Vicente Pires', 'rua 10' , 17, '222.222.222-22'),
	('79800-640', 'Brasília', 'DF', 'Sobradinho', 'Quadra AR 8 Conjunto 4' , 10, '333.333.333-33'),
	('73459-100', 'Brasília', 'DF', 'Gama', 'Quadra 1 Conjunto M' , 12, '444.444.444-44'),
	('72100-900', 'Brasília', 'DF', 'Guará', 'Área Especial 7' , 20, '555.555.555-55');
    
INSERT INTO categoriaProduto VALUES
	(1, 'Bebidas'),
    (2, 'Sushi'),
    (3, 'Hambúrguer'),
    (4, 'Pastel'),
    (5, 'Cachorro-quente');
   
INSERT INTO produto (preco, categoria, nome, descricao, restauranteCnpj) VALUES
	(5.50, 1, 'Coca-cola', 'Refrigerante de cola', '13.574.594/0001-96'),
    (20.00, 2, 'Barca de sushi', 'Sushi com 20 peças', '01.603.603/0001-40'),
    (15.00, 3, 'X-Burguer', 'Sanduíche com 2 hamburgueres e ovo', '71.833.552/0001-29'),
    (10.20, 4, 'Pastel de 4 queijos', 'Pastel dos queijos cheddar, gorgonzola, mussarela e prato', '42.591.651/0001-43'),
    (12.50, 5, 'Cachorro-quente tradicional', 'Cachorro-quente ao molho com 1 salsicha', '17.261.661/0007-69');
    
INSERT INTO menu VALUES
	('13.574.594/0001-96', 1, 10),
    ('01.603.603/0001-40', 2, 20),
    ('71.833.552/0001-29', 3, 50),
    ('42.591.651/0001-43', 4, 15),
    ('17.261.661/0007-69', 5, 30);
    
INSERT INTO pedido (metPagamento, valorTotal, tempoEspera, clienteCpf, restauranteCnpj, entregadorRegistro, enderecoCliente) VALUES 
	('crédito', 30.00, '00:30:00', '111.111.111-11', '13.574.594/0001-96', 1, '72430-129'),
    ('débito', 20.00, '00:40:00', '222.222.222-22', '01.603.603/0001-40', 2, '72150-100'),
    ('pix', 40.00, '00:50:00', '333.333.333-33', '71.833.552/0001-29', 3, '79800-640'),
    ('dinheiro', 25.00, '01:30:00', '444.444.444-44', '42.591.651/0001-43', 4, '73459-100'),
    ('débito', 10.00, '00:10:00', '555.555.555-55', '17.261.661/0007-69', 5, '72100-900');
	
# Não entendi por que os códigos no pedido começaram em 11    
INSERT INTO pedidoRestaurante VALUES
	('13.574.594/0001-96', 11),
    ('01.603.603/0001-40', 12),
    ('71.833.552/0001-29', 13),
    ('42.591.651/0001-43', 14),
    ('17.261.661/0007-69', 15);
    
INSERT INTO pedidosEntregador VALUES
	(1, 11),
    (2, 12),
    (3, 13),
    (4, 14),
    (5, 15);    
  
# Não entendi pq o código de pedido começa em 11
INSERT INTO produtosPedidos VALUES
	(1, 'Enviar guardanapo', 1, 11),
    (2, 'Enviar garfo', 2, 12),
    (3, 'Enviar canudo', 3, 13),
    (4, 'Enviar maionese', 4, 14),
    (5, 'Enviar ketchup', 5, 15);
   
# Verifica a normalização de LOGIN -> OK -> Foi criado a tabela permissão
SELECT * FROM login;
SELECT * FROM login
WHERE LOGIN.email = 'kleber@example.com';

# Verifica a normalização de CLIENTE -> OK
SELECT * FROM cliente;

# Verifica a normalização de GERENTE -> OK
SELECT * FROM gerente;

# Verifica a normalização de RESTAURANTE -> ? horarioAbertura e horarioFechamento define aberto
SELECT * FROM restaurante;

# Verifica a normalização de ENTREGADOR -> OK
SELECT * FROM entregador;

# Verifica a normalização de ENDERECORESTAURANTE -> OK
SELECT * FROM enderecoRestaurante;

# Verifica a normalização de ENDERECOCLIENTE -> OK
SELECT * FROM enderecoCliente
ORDER BY clienteCPF;

# Verifica a normalização de PRODUTO -> OK -> criei a tabela categoriaProduto
SELECT* FROM produto;

# Verifica a normalização de MENU -> OK
SELECT * FROM menu;

# Verifica a normalização de PEDIDO -> OK
SELECT * FROM pedido;

# Verifica a normalização de PEDIDORESTAURANTE -> OK
SELECT * FROM pedidoRestaurante;

# Verifica a normalização de PEDIDOSENTREGADOR -> OK
SELECT * FROM pedidosEntregador;

# Verifica a normalização de PRODUTOSPEDIDOS -> OK
SELECT * FROM produtosPedidos;


call mostraGerente('13.574.594/0001-96');

#DELETE FROM restaurante WHERE gerenteRegistro = 1 OR gerenteRegistro = 2 OR gerenteRegistro = 3 OR gerenteRegistro = 4 OR gerenteRegistro = 5;