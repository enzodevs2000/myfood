# PROCEDURES que podem ser úteis.

# Procedimento que seleciona o cpf do cliente através do email.
DELIMITER //
CREATE PROCEDURE selectCpfByEmail (
		IN email VARCHAR(30)
)
BEGIN
	SELECT cpf FROM cliente
	WHERE loginCodigo = (
		SELECT codigo FROM login
		WHERE login.email = email
		);
END //

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