CREATE VIEW vw_pedidos AS
SELECT p.metPagamento, p.valorTotal, p.tempoEspera, r.nome as restaurante, e.nome as entregador
FROM pedido p, restaurante r, entregador e
WHERE p.restauranteCnpj = r.cnpj AND p.entregadorRegistro = e.registro;

SELECT * FROM vw_pedidos;

CREATE VIEW vw_restGerente AS
SELECT g.registro, g.nome as nomeGerente, g.loginEmail, r.cnpj, r.nome as nomeRestaurante, r.aberto,
r.horarioAbertura, r.horarioFechamento, r.taxaDeEntrega, r.gerenteRegistro
FROM gerente g, restaurante r
WHERE r.gerenteRegistro = g.registro
;

SELECT * FROM vw_restGerente;