CREATE VIEW vw_pedidos AS
SELECT p.metPagamento, p.valorTotal, p.tempoEspera, r.nome as restaurante, e.nome as entregador
FROM pedido p, restaurante r, entregador e
WHERE p.restauranteCnpj = r.cnpj AND p.entregadorRegistro = e.registro;

SELECT * FROM vw_pedidos;