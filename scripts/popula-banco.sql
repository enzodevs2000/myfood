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
	('111.111.111-11', 'Kleber Rodrigues', '2002-07-21', '61 91111-1111', 'kleber@example.com'),
    ('222.222.222-22', 'Enzo Nunes', '2001-05-05', '61 92222-2222', 'enzo@example.com'),
    ('333.333.333-33', 'Gabriela Dias', '2002-02-04', '61 93333-3333', 'gabi@example.com'),
    ('444.444.444-44', 'César Augusto', '1998-12-10', '61 94444-4444', 'luciana@example.com'),
    ('555.555.555-55', 'Ricardo Martins', '1978-10-23', '61 95555-5555', 'ricardo@example.com');

INSERT INTO gerente(cpf, nome, loginEmail) VALUES
	('666.666.666-66', 'Cristiano Ramalho', 'empresa1@example.com'),
    ('777.777.777-77', 'Lionel Mendes', 'empresa2@example.com'),
    ('888.888.888-88', 'Nilmar Junior', 'empresa3@example.com'),
    ('999.999.999-99', 'Roberto Lima', 'empresa4@example.com'),
    ('101.010.101-01', 'Sarah Vitória', 'empresa5@example.com');
    
INSERT INTO restaurante VALUES
	('13.574.594/0001-96', 'Burger King', true, '10:00', '04:00', 5, 1),
    ('01.603.603/0001-40', 'Giraffas', true, '11:00', '22:00', 0, 2),
    ('71.833.552/0001-29', 'Bobs', true, '12:00', '21:00', 2, 3),
    ('42.591.651/0001-43', "McDonald's", true, '11:00', '22:00', 0, 4),
    ('17.261.661/0007-69', 'Outback', false, '16:00', '00:00', 0, 5);
    
INSERT INTO  entregador(nome, cnh, telefone, loginEmail) VALUES
	('Galo de Luta', '12223242829', '94002-8922', 'galodeluta@example.com'),
    ('Danilo Silva de Oliveira', '16171819202', '91234-5678', 'biu@example.com'),
    ('João Santana', '11121314151', '92122-2324', 'entregador1@example.com'),
    ('Márcio Lopes', '10987654321', '91020-3040', 'entregadoe2@example.com'),
    ('Carla Cabral', '12345678910', '91111-2222', 'entregador3@example.com');
    
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
    
   
INSERT INTO produto (preco, nome, categoria, descricao, restauranteCnpj, imagem) VALUES
	(5.50, 'Refrigerante Refill', 'Refrigerante', 'Pegue o quanto quiser!', '13.574.594/0001-96', NULL),
    (12.50, 'Whopper', 'Hambúrguer', 'Sanduíche', '13.574.594/0001-96', NULL),
    (3.50, 'Batata-Fritas', 'Petisco', '20g de fritas', '13.574.594/0001-96', NULL),
    (15.00, 'Hamburguer Vegetariano', 'Hambúrguer', 'Hamburguer de plantas', '13.574.594/0001-96', NULL),
    (3.00, 'Casquinha de sorvete', 'Sorvetes', 'Casquinha de baunilha', '13.574.594/0001-96', NULL),
    (10.00, 'Strogonoff de frango', 'Pratos', 'Prato de strogonoff', '01.603.603/0001-40', NULL),
    (15.00, 'Linguiça Toscana', 'Pratos', 'Prato com arroz e duas linguiças', '01.603.603/0001-40', NULL),
    (20.00, 'Salada', 'Saladas', 'Salada de alface e tomate', '01.603.603/0001-40', NULL),
    (12.50, 'Casquinha', 'Sorvetes', 'Casquinha', '01.603.603/0001-40', NULL),
    (13.00, 'Sundae', 'Sorvetes', 'Sorvete', '01.603.603/0001-40', NULL),
    (12.50, 'X-burguer', 'Hambúrguer', 'Sanduiche com 2 hamburgueres', '71.833.552/0001-29', NULL),
    (15.00, 'Fritas', 'Petisco', '30g', '71.833.552/0001-29', NULL),
    (5.00, 'Coca-Cola', 'Refrigerante', 'Refrigerante', '71.833.552/0001-29', NULL),
    (5.00, 'Guaraná', 'Refrigerante', 'Refrigerante 200ML', '71.833.552/0001-29', NULL),
    (14.00, 'Milk Shake Ovomaltine', 'Milk-shakes', '500Ml de Ovomaltine', '71.833.552/0001-29', NULL),
    (15.00, 'Quarteirão', 'Hambúrguer', 'Sanduiche com 2 hamburgueres', '42.591.651/0001-43', NULL),
    (8.00, 'Milk Shake Morango', 'Milk-shakes', '500 Ml', '42.591.651/0001-43', NULL),
    (6.00, 'MC maçã', 'Saudável', 'Lanche saudável', '42.591.651/0001-43', NULL),
    (10.00, 'Cheddar', 'Hambúrguer', 'Sanduíche de Cheddar', '42.591.651/0001-43', NULL),
    (5.00, 'Fanta-laranja', 'Refrigerante', 'Refigerante 200ml', '42.591.651/0001-43', NULL),
    (25.00, 'Costela suína', 'Churrasco', 'carne de porco', '17.261.661/0007-69', NULL),
    (10.00, 'Chá gelado', 'Bebidas','chá gelado 500ml', '17.261.661/0007-69', NULL),
    (12.50, 'Sanduíche', 'Hambúrguer', 'Sanduíche de costela', '17.261.661/0007-69', NULL),
    (5.00, 'Chopp', 'Bebidas alcoolicas', 'Chopp 300ml', '17.261.661/0007-69', NULL),
    (8.00, 'Cheese-Cake', 'Sobremesas', 'Cheese-Cake de morango', '17.261.661/0007-69', load_file('C:\Users\enzon\Desktop\UnB\BD\Projeto\myfood\img\pastel-de-carne.jpg')),
    (8.00, 'Cheese-Cake', 'Sobremesas', 'Cheese-Cake de morango', '17.261.661/0007-69', load_file('C:\Users\enzon\Desktop\UnB\BD\Projeto\myfood\img\pastel-de-carne.jpg'));
    
INSERT INTO menu VALUES
	('13.574.594/0001-96', 1, 10),
    ('13.574.594/0001-96', 2, 20),
    ('13.574.594/0001-96', 3, 30),
    ('13.574.594/0001-96', 4, 40),
    ('13.574.594/0001-96', 5, 50),
    ('01.603.603/0001-40', 6, 5),
    ('01.603.603/0001-40', 7, 15),
    ('01.603.603/0001-40', 8, 25),
    ('01.603.603/0001-40', 9, 35),
    ('01.603.603/0001-40', 10, 45),
    ('71.833.552/0001-29', 11, 3),
    ('71.833.552/0001-29', 12, 13),
    ('71.833.552/0001-29', 13, 23),
    ('71.833.552/0001-29', 14, 33),
    ('71.833.552/0001-29', 15, 43),
    ('42.591.651/0001-43', 16, 4),
    ('42.591.651/0001-43', 17, 14),
    ('42.591.651/0001-43', 18, 24),
    ('42.591.651/0001-43', 19, 34),
    ('42.591.651/0001-43', 20, 44),
    ('17.261.661/0007-69', 21, 9),
    ('17.261.661/0007-69', 22, 20),
    ('17.261.661/0007-69', 23, 15),
    ('17.261.661/0007-69', 24, 20),
    ('17.261.661/0007-69', 25, 35);
    
    
INSERT INTO pedido (metPagamento, valorTotal, tempoEspera, clienteCpf, restauranteCnpj, entregadorRegistro, enderecoCliente) VALUES 
	('crédito', 30.00, '00:30:00', '111.111.111-11', '13.574.594/0001-96', 1, '72430-129'),
    ('débito', 20.00, '00:40:00', '222.222.222-22', '01.603.603/0001-40', 2, '72150-100'),
    ('pix', 40.00, '00:50:00', '333.333.333-33', '71.833.552/0001-29', 3, '79800-640'),
    ('dinheiro', 25.00, '01:30:00', '444.444.444-44', '42.591.651/0001-43', 4, '73459-100'),
    ('débito', 10.00, '00:10:00', '555.555.555-55', '17.261.661/0007-69', 5, '72100-900'),
    ('débito', 10.00, '00:10:00', '555.555.555-55', '17.261.661/0007-69', 5, '72100-900');
	
# Não entendi por que os códigos no pedido começaram em 11    
INSERT INTO pedidoRestaurante VALUES
	('13.574.594/0001-96', 1),
    ('01.603.603/0001-40', 2),
    ('71.833.552/0001-29', 3),
    ('42.591.651/0001-43', 4),
    ('17.261.661/0007-69', 5);
    
INSERT INTO pedidosEntregador VALUES
	(1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);    
  
# Não entendi pq o código de pedido começa em 11
INSERT INTO produtosPedidos VALUES
	(1, 'Enviar guardanapo', 1, 1),
    (2, 'Enviar garfo', 2, 2),
    (3, 'Enviar canudo', 3, 3),
    (4, 'Enviar maionese', 4, 4),
    (5, 'Enviar ketchup', 5, 5);
   
# Verifica a normalização de LOGIN -> OK -> Foi criado a tabela permissão
SELECT * FROM login
ORDER BY email;

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

SELECT preco
FROM produto p, produtosPedidos pp
WHERE p.codigo = pp.produtoCodigo;

# Testar procedure
#INSERT INTO produtosPedidos VALUES (2, 'nenhuma observacao', 2, 4);


call mostraGerente('13.574.594/0001-96');

#DELETE FROM restaurante WHERE gerenteRegistro = 1 OR gerenteRegistro = 2 OR gerenteRegistro = 3 OR gerenteRegistro = 4 OR gerenteRegistro = 5;