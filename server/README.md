<h1 align="center">
<br>
PharmaInc Database
</h1>

### Documentação

É possível acessar a documentação OAS 3.0 pelo link: https://app.swaggerhub.com/apis-docs/lucasmelniski/PharmaInc/1.0.0

### Funcionalidades

- Popular o banco com 1 usuário ou 500.
- Buscar todos os usuários.
- Buscar todos os usuários limitado a 50 por página.
- Buscar todos os usuários limitado a 50 por página filtrado por atributos específicos.
- Buscar, editar e deletar um o usuário.

## 🛠 Tecnologias utilizadas

- 🛠 **Express** 
- 🛠 **TypeOrm** 
- 🛠 **MongoDB** 

## 🚀 Rodando o projeto

### Pré-requisitos

- Postman (ou similar)
- NodeJS

### 💻 Rodando

Instale as dependências

```bash
npm install
```

Após instalar as dependências, crie um arquivo .env seguindo o exemplo do .env.example

As configurações com prefixo TYPEORM são do mongoDB
A API_KEY é a chave de acesso para requisição
É possivel configurar a porta em que o projeto será executado

Após configurado é possível iniciar o projeto

```bash
npm run dev
```

# Após isso a aplicação pode ser utilizada acessando o endereço http://localhost:PORT

## 🛠 Endpoints

### Running

É possível usar o caminho 

```bash
Method: GET
/
```

para verificar se a aplicação está rodando, deve se receber o retorno 'REST Fullstack Challenge 20201209 Running'

### Seed

É possível usar o caminho 

```bash
Method: POST
/users/seed/one
```

para inserir o usuário modelo encontrado na pasta src/utils/user

E

```bash
Method: POST
/users/seed/populate
```

para inserir todos os usuários modelo encontrado na pasta src/utils/users

### Users

É possível usar o caminho 

```bash
Method: GET
/users/
```

para buscar todos os usuários registrados no banco de dados.

E

```bash
Method: GET
/users/page/{page}
```

esse endpoint possuí um limite de 50 usuários por retorno. 
Onde page é um número inteiro positivo que serve para navegar pelas páginas (examplo: 1)

E

```bash
Method: GET
/users/filter/{gender}/{nat}/{name}/page/{page}
```

esse endpoint possuí um limite de 50 usuários por retorno. 
Onde page é um número inteiro positivo que serve para navegar pelas páginas (examplo: 1)
Gender é o genero do usuário (examplo: male)
Nat a nacionalidade do usuário (examplo: BR)
Name é o primeiro ou último nome do usuário (exemplo: Getúlo)
Caso não queira filtrar alguma das opções deve-se passar "any"

### User

É possível usar o caminho 

```bash
Method: GET
/users/{userId}
```

para buscar o usuário correspondente a o userId
Onde userId é o objectId do usuário no MongoDB (exemplo: 6080617d1cbf7b58044bdaeb)

E 

```bash
Method: PUT
/users/{userId}
```

para editar o usuário correspondente a o userId
Onde userId é o objectId do usuário no MongoDB (exemplo: 6080617d1cbf7b58044bdaeb)
Para editar é necessário passar um atributo do user no body da requisição

E 

```bash
Method: DELETE
/users/{userId}
```

para deletar o usuário correspondente a o userId
Onde userId é o objectId do usuário no MongoDB (exemplo: 6080617d1cbf7b58044bdaeb)
