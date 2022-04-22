/**
 * Módulo temporário para testar as operações do CRUD com as tabelas
 */

(async () => {
    const db = require('./db');
    
    // Referência para as operações das tabelas
    const logins = require('./loginOperations');
    const clientes = require('./clienteOperations');
    const gerentes = require('./gerenteOperations');
    const restaurantes = require('./restauranteOperations');
    const entregadores = require('./entregadorOperations');
    const enderecoRestaurante = require('./enderecoRestauranteOperations');
    const enderecoCliente = require('./enderecoClienteOperations');
    const produto = require('./produtoOperations');
    const menu = require('./menuOperations');
    const pedido = require('./pedidoOperations');
    const pedidoRestaurante = require('./pedidoRestauranteOperations');
    const pedidosEntregador = require('./pedidosEntregadorOperations');
    const produtosPedidos = require('./produtosPedidosOperations');



    // Login

    console.log('INSERT INTO LOGIN');
    
    // Inserindo um novo login
    await logins.insert({
      email : 'exemplo2mysql2@example.com'  ,
      senha : '1234abc',
      permissao : 1
    });

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

    // Cliente

    console.log('INSERT INTO cliente');
    await clientes.insert({
        cpf : '232.232.232-32',
        nome : 'Francisco Assis',
        dataNascimento : '1960/02/28',
        telefone : '3342-1234',
        loginEmail : 'exemplonode1@example.com'
    });

    console.log('DELETE FROM cliente');
    await clientes.deleteCliente({cpf : '232.232.232-32'});

    // Gerente

    await logins.insert({
        email : 'exemplogerente@example.com',
        senha : 'abcdefg123',
        permissao : 2
    });

    await logins.deleteLogin({email : 'exemplogerente@example.com'});

    console.log('INSERT INTO GERENTE');
    await gerentes.insert({
        cpf : '111.222.333-44',
        nome : 'Gilvanildo Pereira',
        loginEmail : 'exemplogerente@example.com'
    });

    console.log('SELECT * FROM GERENTE');
    const gerente1 = await gerentes.select()
    console.log(gerente1[0]);

    console.log('UPDATE GERENTE');
    await gerentes.updateNome({
        nome : 'Gilvanildo Pereira Sousa',
        registro : 7
    });

    console.log('DELETE FROM GERENTE');
    await gerentes.deleteGerente({
        registro : 6
    })

    // Restaurante

    console.log('INSERT INTO RESTAURANTE');
    await restaurantes.insert({
        cnpj : '10.203.304/0506-07',
        nome : 'Pastelaria Viçosa',
        aberto : true,
        horarioAbertura : '8:00',
        horarioFechamento : '22:00',
        taxaDeEntrega : 2.5,
        gerenteRegistro : 7

    });

    console.log('SELECT * FROM RESTAURANTE');
    const restaurante1 = await restaurantes.select();
    console.log(restaurante1[0]);

    console.log('UPDATE RESTAURANTE');
    await restaurantes.updateTaxa({
        taxaDeEntrega : 3,
        cnpj : '10.203.304/0506-07'
    });

    console.log('DELETE FROM RESTAURANTE');
    await restaurantes.deleteRestaurante({
        cnpj : '10.203.304/0506-07'
    }); 

    // Entregador
    await logins.insert({
        email : 'entregadormysql2@example.com',
        senha : '123456790',
        permissao : 3
    });
    
    console.log('INSERT INTO ENTREGADOR');
    await entregadores.insert({
        nome : 'Victor dos Santos',
        cnh : '09192939495',
        telefone : '94002-8922',
        loginEmail : 'entregadormysql2@example.com'
    });

    console.log('SELECT * FROM ENTREGADOR');
    const entregador1 = await entregadores.select();
    console.log(entregador1[0]);

    console.log('UPDATE ENTREGADOR');
    await entregadores.updateTelefone({
        telefone : '4003-8922',
        registro : 7
    });

    console.log('DELETE ENTREGADOR');
    await entregadores.deleteEntregador({
        registro: 10
    }); 
    
    // EndereçoRestaurante
    console.log('INSERT INTO ENDEREÇORESTAURANTE');
    await enderecoRestaurante.insert({
        cep : '71400-256',
        cidade : 'Brasília',
        estado : 'DF',
        bairro : 'Plano Piloto',
        complemento : 'Rodoviária do Plano Piloto',
        numero : 10,
        restauranteCnpj : '10.203.304/0506-07'
    }); 

    console.log('SELECT * FROM ENDEREÇORESTAURANTE');
    const enderecoRestaurante1 = await enderecoRestaurante.select();
    console.log(enderecoRestaurante1[0]);

    console.log('UPDATE EndereçoRestaurante');
    await enderecoRestaurante.updateComplemento({
        complemento : 'Setor A da Rodoviária',
        cep: '71400-256'
    });

    console.log('DELETE EndereçoRestaurante');
    await enderecoRestaurante.deleteEnderecoRestaurante({
        cep : '71400-256',
        cidade : 'Brasília',
        estado : 'DF',
        bairro : 'Plano Piloto',
        complemento : 'Rodoviária do Plano Piloto',
        numero : 10,
        restauranteCnpj : '10.203.304/0506-07'
    });

    // enderecoCliente
    console.log('INSERT INTO enderecoCliente');
    await enderecoCliente.insert({
        cep : '71230-176',
        cidade : 'Brasília',
        estado : 'DF',
        bairro : 'Gama',
        complemento : 'Setor Sul',
        numero : 4,
        clienteCpf : '232.232.232-32'
    });

    console.log('SELECT * FROM ENDEREÇOCLIENTE');
    const enderecoCliente1 = await enderecoCliente.select();
    console.log(enderecoCliente1[0]);

    console.log('UPDATE ENDEREÇOCLIENTE');
    await enderecoCliente.updateComplemento({
        complemento : 'Setor Norte',
        cep : '71230-176'
    });

    console.log('DELETE ENDEREÇOCLIENTE')
    await enderecoCliente.deleteEnderecoCliente({
        cep : '71230-176'
    });


})();



// TODO: Ao invés de inserir os dados manualmente. Pegar os dados inseridos pelo usuário.