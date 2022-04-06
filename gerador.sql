DROP TABLE IF EXISTS login;

CREATE TABLE login (
	codigo INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(30),
    senha VARCHAR(20),
    permissao VARCHAR(10)
);

CREATE TABLE restaurante (
	cnpj VARCHAR(18) PRIMARY KEY,
    nome VARCHAR(45),
    aberto BOOLEAN,
    horarioFuncionamento TIME,
    taxaDeEntrega DOUBLE
);

CREATE TABLE gerente (
	registro INT AUTO_INCREMENT,
    cpf VARCHAR(20),
    nome VARCHAR(45),
    restauranteCnpj VARCHAR(18),
    loginCodigo INT,
    PRIMARY KEY (registro, cpf),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(Cnpj),
    FOREIGN KEY (loginCodigo) REFERENCES login(codigo)
);

CREATE TABLE cliente (
	cpf VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(45),
    dataNascimento DATE,
    telefone VARCHAR(11),
    loginCodigo INT,
    FOREIGN KEY (loginCodigo) REFERENCES login(codigo)
);

CREATE TABLE entregador (
	registro INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    cnh VARCHAR(11),
    telefone VARCHAR(11),
    loginCodigo INT,
    FOREIGN KEY (loginCodigo) REFERENCES login(codigo)
);

CREATE TABLE produto (
	codigo INT AUTO_INCREMENT PRIMARY KEY,
    preco DOUBLE,
    categoria VARCHAR(25),
    nome VARCHAR(45),
    descricao VARCHAR(45),
    restauranteCnpj VARCHAR(18),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj)
);

CREATE TABLE enderecoRestaurante (
	cep VARCHAR(11) PRIMARY KEY,
    cidade VARCHAR(20),
    estado VARCHAR(2),
    bairro VARCHAR(45),
    complemento VARCHAR(45),
    numero INT,
    restauranteCnpj VARCHAR(18),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(Cnpj)
);

CREATE TABLE enderecoCliente (
	cep VARCHAR(11) PRIMARY KEY,
    cidade VARCHAR(20),
    estado VARCHAR(2),
    bairro VARCHAR(45),
    complemento VARCHAR(45),
    numero INT,
    clienteCpf VARCHAR(20),
    FOREIGN KEY (clienteCpf) REFERENCES cliente(cpf)
);

CREATE TABLE estoque (
	restauranteCnpj VARCHAR(18),
    produtoCodigo INT,
    quantidade INT,
    PRIMARY KEY (restauranteCnpj, produtoCodigo),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj),
    FOREIGN KEY (produtoCodigo) REFERENCES produto(codigo)
);

CREATE TABLE pedido (
	codigo INT AUTO_INCREMENT PRIMARY KEY,
    metPagamento VARCHAR(20),
    valorTotal DOUBLE,
    tempoEspera TIME,
    clienteCpf VARCHAR(45),
    restauranteCnpj VARCHAR(18),
    entregadorRegistro INT,
    enderecoCliente VARCHAR(11),
    FOREIGN KEY (clienteCpf) REFERENCES cliente(cpf),
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj),
    FOREIGN KEY (entregadorRegistro) REFERENCES entregador(registro),
    FOREIGN KEY (enderecoCliente) REFERENCES enderecoCliente(cep)
);

CREATE TABLE listaDePedidoRes (
	restauranteCnpj VARCHAR(18) PRIMARY KEY,
    pedidoCodigo INT,
    FOREIGN KEY (restauranteCnpj) REFERENCES restaurante(cnpj),
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
);

CREATE TABLE listaDePedidosEnt (
	entregadorRegistro INT PRIMARY KEY,
    pedidoCodigo INT,
    FOREIGN KEY (entregadorRegistro) REFERENCES entregador(registro),
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
);

CREATE TABLE produtosPedidos (
	quantidade INT,
    observacoes VARCHAR(100),
    produtoCodigo INT,
    pedidoCodigo INT PRIMARY KEY,
    FOREIGN KEY (produtoCodigo) REFERENCES produto(codigo),
    FOREIGN KEY (pedidoCodigo) REFERENCES pedido(codigo)
);
 

