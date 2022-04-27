# PROCEDURES que podem ser úteis.

# Procedimento que seleciona o cpf do cliente através do email.
DELIMITER //
CREATE PROCEDURE selectCpfByEmail (IN email VARCHAR(30))
	BEGIN
		SELECT cpf FROM cliente
		WHERE loginCodigo = (
			SELECT codigo FROM login
			WHERE login.email = email
		);
	END //
DELIMITER ;

DELIMITER // 
CREATE PROCEDURE mostraGerente (IN cnpj VARCHAR(18))
	BEGIN
		SELECT * FROM gerente
        WHERE registro = (
			SELECT gerenteRegistro
            FROM restaurante
            WHERE restaurante.cnpj = cnpj
		);
    END //
DELIMITER ;

DROP PROCEDURE IF EXISTS calculaValorTotal;

DELIMITER $$
CREATE PROCEDURE calculaValorTotal (IN pedidoCod INT, OUT total DOUBLE)
BEGIN
	SELECT SUM(p.preco  * pp.quantidade) into total
	FROM produto p, produtosPedidos pp, pedido pe 
	WHERE pe.codigo = pedidoCod AND pp.produtoCodigo = p.codigo AND pp.pedidoCodigo = pe.codigo;
    
    UPDATE pedido SET valorTotal = total WHERE codigo = pedidoCod;
END;
$$
DELIMITER ;

CALL calculaValorTotal(4, @valorTotal);
SELECT @valorTotal;



