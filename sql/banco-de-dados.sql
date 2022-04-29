# Este script gera a estrutura do banco de dados.

DROP TABLE IF EXISTS pedidoRestaurante;
DROP TABLE IF EXISTS pedidosEntregador;
DROP TABLE IF EXISTS produtosPedidos;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS enderecoCliente;
DROP TABLE IF EXISTS enderecoRestaurante;
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS entregador;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS produto;
DROP TABLE IF EXISTS categoriaProduto;
DROP TABLE IF EXISTS restaurante;
DROP TABLE IF EXISTS gerente;
DROP TABLE IF EXISTS login;
DROP TABLE IF EXISTS permissao;

# Criei essa tabela para que não corra redundância do nome
# na tabela de login. Além disso, acho que futuramente será
# mais simples fazer os tratamentos com a permissão, se ela
# estiver como um INT

CREATE TABLE permissao (
	codigo INT,
    nome VARCHAR(15),
    
    PRIMARY KEY (codigo)
    
);

CREATE TABLE login (
    email VARCHAR(30),
    senha VARCHAR(20),
    permissao INT,
    
    PRIMARY KEY (email),
    FOREIGN KEY (permissao) REFERENCES permissao(codigo)
);

CREATE TABLE gerente (
	registro INT AUTO_INCREMENT,
    cpf VARCHAR(20) UNIQUE,
    nome VARCHAR(45),
    loginEmail VARCHAR(30),
    
    PRIMARY KEY (registro, cpf),
    FOREIGN KEY (loginEmail) REFERENCES login(email)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE cliente (
	cpf VARCHAR(20),
    nome VARCHAR(45),
    dataNascimento DATE,
    telefone VARCHAR(15),
    loginEmail VARCHAR(30),
    imagem BLOB,
    
    PRIMARY KEY (cpf),
    FOREIGN KEY (loginEmail) REFERENCES login(email)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE imagens (
	imagem BLOB,
    cpfCliente VARCHAR(20),
    
    PRIMARY KEY(cpfCliente),
    FOREIGN KEY (cpfCliente) REFERENCES cliente(cpf)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE entregador (
	registro INT AUTO_INCREMENT,
    nome VARCHAR(45),
    cnh VARCHAR(11) UNIQUE,
    telefone VARCHAR(11),
    loginEmail VARCHAR(30),
    
    PRIMARY KEY (registro),
    FOREIGN KEY (loginEmail) REFERENCES login(email)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

# Restaurante não esta na 3FN, horarioAbertura e horarioFechamento

CREATE TABLE restaurante (
	cnpj VARCHAR(18),
    nome VARCHAR(45),
    aberto BOOLEAN,
    horarioAbertura TIME,
    horarioFechamento TIME,
    taxaDeEntrega DOUBLE,
    gerenteRegistro INT,
    
    PRIMARY KEY (cnpj),
    FOREIGN KEY (gerenteRegistro) REFERENCES gerente(registro)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE produto (
	codigo INT AUTO_INCREMENT,
    preco DOUBLE,
    nome VARCHAR(45),
     categoria VARCHAR(25),
    descricao VARCHAR(80),
    restauranteCnpj VARCHAR(18),
    
    PRIMARY KEY (codigo),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE enderecoRestaurante (
	cep VARCHAR(11),
    cidade VARCHAR(20),
    estado VARCHAR(2),
    bairro VARCHAR(45),
    complemento VARCHAR(45),
    numero INT,
    restauranteCnpj VARCHAR(18),
    
    PRIMARY KEY (cep),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(Cnpj)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE enderecoCliente (
	cep VARCHAR(11),
    cidade VARCHAR(20),
    estado VARCHAR(2),
    bairro VARCHAR(45),
    complemento VARCHAR(45),
    numero INT,
    clienteCpf VARCHAR(20),
    
    PRIMARY KEY (cep),
    FOREIGN KEY (clienteCpf) REFERENCES cliente(cpf)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE menu (
	restauranteCnpj VARCHAR(18),
    produtoCodigo INT,
    quantidade INT,
    
    PRIMARY KEY (restauranteCnpj, produtoCodigo),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (produtoCodigo) REFERENCES produto(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE pedido (
	codigo INT AUTO_INCREMENT,
    metPagamento VARCHAR(20),
    valorTotal DOUBLE,
    tempoEspera TIME,
    clienteCpf VARCHAR(45),
    restauranteCnpj VARCHAR(18),
    entregadorRegistro INT,
    enderecoCliente VARCHAR(11),
    
	PRIMARY KEY (codigo),
    FOREIGN KEY (clienteCpf) REFERENCES cliente(cpf)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (entregadorRegistro) REFERENCES entregador(registro)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (enderecoCliente) REFERENCES enderecoCliente(cep)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE pedidoRestaurante (
	restauranteCnpj VARCHAR(18),
    pedidoCodigo INT,
    
    PRIMARY KEY (restauranteCnpj),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE pedidosEntregador (
	entregadorRegistro INT,
    pedidoCodigo INT,
    
    PRIMARY KEY (entregadorRegistro),
    FOREIGN KEY (entregadorRegistro) REFERENCES entregador(registro)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE produtosPedidos (
	quantidade INT,
    observacoes VARCHAR(100),
    produtoCodigo INT,
    pedidoCodigo INT ,
    
    PRIMARY KEY (pedidoCodigo, produtoCodigo),
    FOREIGN KEY (produtoCodigo) REFERENCES produto(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
 

