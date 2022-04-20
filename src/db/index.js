/**
 * Módulo temporário para testar as operações do CRUD com as tabelas
 */

(async () => {
    const db = require('./db');
    
    // Referência para as operações do login
    const logins = require('./loginOperations');
    console.log('INSERT INTO LOGIN');
    
    // Inserindo um novo login
    /*await logins.insert({
      email : 'exemplo2mysql2@example.com'  ,
      senha : '1234abc',
      permissao : 1
    });*/

    // Comentado para não inserir linha duplicada. Descomente se for a primeira vez da inserção.

    // SELECT do login
    console.log('SELECT * FROM LOGIN');
    const login = await logins.select();
    console.log(login[0]);

    // UPDATE do login
    console.log('UPDATE LOGIN SET senha = ?WHERE email = ?');
    await logins.updateSenha({
        senha : 'aaaaaaa',
        email : 'exemplo2mysql2@example.com'
    });

    // DELETE do login
    console.log('DELETE FROM LOGIN WHERE email = ?');
    await logins.deleteLogin({
        email : 'exemplo2mysql2@example.com'
    })
})();

// TODO: Ao invés de inserir os dados manualmente. Pegar os dados inseridos pelo usuário.