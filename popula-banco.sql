# O login precisa ser criado primeiro, pois as tabelas cliente, gerente e entregador refernciam ele.
INSERT INTO login (email, senha, permissao) VALUES
	('kleber@example.com', 'abcd123', 'cliente'),
    ('enzo@example.com', 'abcd123', 'cliente'),
    ('gabi@example.com', 'abcd123', 'cliente'),
    ('luciana@example.com', 'abcd123', 'cliente'),
    ('ricardo@example.com', 'abcd123', 'cliente'),
    ('empresa1@example.com', 'abcd123', 'gerente'),
    ('empresa2@example.com', 'abcd123', 'gerente'),
    ('empresa3@example.com', 'abcd123', 'gerente'),
    ('empresa4@example.com', 'abcd123', 'gerente'),
    ('empresa5@example.com', 'abcd123', 'gerente');

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

SELECT * FROM login;
SELECT * FROM cliente;
SELECT * FROM gerente;
SELECT * FROM restaurante;
call mostraGerente('13.574.594/0001-96');

#DELETE FROM restaurante WHERE gerenteRegistro = 1 OR gerenteRegistro = 2 OR gerenteRegistro = 3 OR gerenteRegistro = 4 OR gerenteRegistro = 5;