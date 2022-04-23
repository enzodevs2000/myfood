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

    // Produto

    console.log('INSERT INTO PRODUTO');
    await produto.insert({
        preco : 10,
        nome : 'Pastel de queijo',
        categoria : 'Pastel',
        descricao : 'Pastel tradicional de queijo',
        restauranteCnpj : '10.203.304/0506-07'
    });

    console.log('SELECT * FROM PRODUTO');
    const produto1 = await produto.select();
    console.log(produto1[0]);

    console.log('UPDATE PRODUTO');
    await produto.updatePreco({
        preco : 12.50,
        codigo : 27
    });

    console.log('DELETE FROM PRODUTO');
    await produto.deleteProduto({
        codigo : 27
    }); 

    // Menu

    console.log('INSERT INTO MENU');
    await menu.insert({
        restauranteCnpj : '10.203.304/0506-07',
        produtoCodigo : 28,
        quantidade : 10
    }); 

    console.log('SELECT * FROM MENU');
    const menu1 = await menu.select();
    console.log(menu1[0]);

    console.log('UPDATE MENU');
    await menu.updateQuantidade({
        quantidade : 15,
        produtoCodigo : 28
    });

    console.log('DELETE FROM MENU');
    await menu.deleteMenu({
        produtoCodigo : 28
    });

    // Pedido
    console.log('INSERT INTO PEDIDO');
    await pedido.insert({
        metPagamento : 'pix',
        valorTotal : 20,
        tempoEspera : '00:05',
        clienteCpf : '232.232.232-32',
        restauranteCnpj : '10.203.304/0506-07',
        entregadorRegistro : 7,
        enderecoCliente : '71230-176'
    });

    console.log('SELECT * FROM PEDIDO');
    const pedido1 = await pedido.select();
    console.log(pedido1[0]);

    console.log('UPDATE PEDIDO ');
    await pedido.updateTempoEspera({
        tempoEspera : '00:10',
        codigo : 8
    });

    console.log('DELETE FROM PEDIDO');
    await pedido.deletePedido({
        codigo : 7
    });

    // PEDIDORESTAURANTE

    console.log('INSERT INTO PEDIDORESTAURANTE');
    await pedidoRestaurante.insert({
        restauranteCnpj : '10.203.304/0506-07',
        pedidoCodigo : 8
    });

    console.log('SELECT * FROM PEDIDORESTAURANTE');
    const pedidoRestaurante1 = await pedidoRestaurante.select();
    console.log(pedidoRestaurante1[0]);

    console.log('DELETE FROM PEDIDORESTAURANTE');
    await pedidoRestaurante.deletePedidoRestaurante({
        pedidoCodigo : 8
    });

    // PEDIDOENTREGADOR
    
    console.log('INSERT INTO PEDIDOENTREGADOR');
    await pedidosEntregador.insert({
        entregadorRegistro : 9,
        pedidoCodigo : 8
    });

    console.log('SELECT * FROM PEDIDOENTREGADOR');
    const pedidoEntregador1 = await pedidosEntregador.select();
    console.log(pedidoEntregador1[0]);

    console.log('DELETE FROM PEDIDOENTREGADOR');
    await pedidosEntregador.deletePedidoEntregador({
        pedidoCodigo : 8
    });

    // PRODUTOSPEDIDOS

    console.log('INSERT INTO PRODUTOSPEDIDOS');
    await produtosPedidos.insert({
        quantidade : 2,
        observacoes : 'Com canudo',
        produtoCodigo : 28,
        pedidoCodigo : 8
    });

    console.log('SELECT FROM PRODUTOSPEDIDOS');
    const produtosPedidos1 = await produtosPedidos.select();
    console.log(produtosPedidos1[0]);

    console.log('UPDATE PRODUTOSPEDIDOS');
    await produtosPedidos.updateQuantidade({
        quantidade : 5,
        pedidoCodigo : 8
    });

    console.log('DELETE FROM PRODUTOSPEDIDOS');
    await produtosPedidos.deleteProdutosPedidos({
        pedidoCodigo : 8
    })

})();



// TODO: Ao invés de inserir os dados manualmente. Pegar os dados inseridos pelo usuário.