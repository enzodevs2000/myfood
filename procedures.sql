# PROCEDURES

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