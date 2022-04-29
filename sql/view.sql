DROP VIEW IF EXISTS vw_pedidos;
DROP VIEW IF EXISTS vw_restGerente;

# ================================================================================================ #

CREATE VIEW vw_pedidos AS
SELECT p.metPagamento, p.valorTotal, p.tempoEspera, r.nome as restaurante, e.nome as entregador
FROM pedido p, restaurante r, entregador e
WHERE p.restauranteCnpj = r.cnpj AND p.entregadorRegistro = e.registro;

# ================================================================================================ #

CREATE VIEW vw_restGerente AS
SELECT g.registro, g.cpf, g.nome as nomeGerente, g.loginEmail, l.senha, r.cnpj, r.nome as nomeRestaurante,
r.horarioAbertura, r.horarioFechamento, r.taxaDeEntrega
FROM gerente g, restaurante r, login l
WHERE (r.gerenteRegistro = g.registro) AND (g.loginEmail = l.email);

# ================================================================================================ #

SELECT * FROM vw_pedidos;
SELECT * FROM vw_restGerente;