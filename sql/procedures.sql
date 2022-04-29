# PROCEDURES que podem ser úteis.

DROP PROCEDURE IF EXISTS selectClienteByEmail;
DROP PROCEDURE IF EXISTS selectGerenteByEmail;
DROP PROCEDURE IF EXISTS selectEntregadorByEmail;
DROP PROCEDURE IF EXISTS selectGerenteRestauranteByEmail;
DROP PROCEDURE IF EXISTS calculaValorTotal;
DROP PROCEDURE IF EXISTS verificaAberto;

# ================================================================================================ #

# Procedimento que seleciona o cpf do cliente através do email.
DELIMITER $$
CREATE PROCEDURE selectClienteByEmail (IN email VARCHAR(30)) 
	BEGIN
		SELECT * FROM cliente
		WHERE loginEmail = email;
	END $$
DELIMITER ;

# ================================================================================================ #

DELIMITER $$
CREATE PROCEDURE selectGerenteByEmail (IN email VARCHAR(30))
	BEGIN
		SELECT * FROM gerente
        WHERE loginEmail = email;
    END $$
DELIMITER ;

# ================================================================================================ #

DELIMITER $$ 
CREATE PROCEDURE selectEntregadorByEmail (IN email VARCHAR(30))
	BEGIN
		SELECT * FROM entregador
        WHERE loginEmail = email;
    END $$
DELIMITER ;

# ================================================================================================ #

DELIMITER $$
CREATE PROCEDURE calculaValorTotal (IN pedidoCod INT, OUT total DOUBLE)
BEGIN
	SELECT SUM(p.preco  * pp.quantidade) into total
	FROM produto p, produtosPedidos pp, pedido pe 
	WHERE pe.codigo = pedidoCod AND pp.produtoCodigo = p.codigo AND pp.pedidoCodigo = pe.codigo;
    
    UPDATE pedido SET valorTotal = total WHERE codigo = pedidoCod;
END $$
DELIMITER ;

# ================================================================================================ #

DELIMITER $$
CREATE PROCEDURE verificaAberto(IN resCnpj VARCHAR(18), OUT abertura BOOLEAN)
BEGIN
	DECLARE horAbertura TIME;
    DECLARE horFechamento TIME;
    
	SELECT horarioAbertura into horAbertura
    FROM restaurante WHERE cnpj = resCnpj;
    
    SELECT horarioFechamento into horFechamento
    FROM restaurante WHERE cnpj = resCnpj;
    
    IF CURTIME() > horFechamento OR CURTIME() < horAbertura THEN
		UPDATE restaurante SET aberto = FALSE WHERE cnpj = resCnpj;
        SET abertura = FALSE;
	ELSE
		UPDATE restaurante SET aberto = TRUE WHERE cnpj = resCnpj;
        SET abertura = TRUE;
	END IF;
END $$
DELIMITER ;

# ================================================================================================ #

DELIMITER $$
CREATE PROCEDURE selectGerenteRestauranteByEmail (IN email VARCHAR(30))
	BEGIN
		SELECT * FROM vw_restgerente
        WHERE loginEmail = email;
    END $$
DELIMITER ;

# ================================================================================================ #

CALL selectEntregadorByEmail("biu@example.com");

CALL selectGerenteByEmail("empresa1@example.com");

CALL selectClienteByEmail("enzo@example.com");

CALL verificaAberto('13.574.594/0001-96', @abertura);
SELECT @abertura;

CALL calculaValorTotal(4, @valorTotal);
SELECT @valorTotal;