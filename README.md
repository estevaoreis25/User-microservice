# Desafio Cargon
 
![Logo Cargo](https://cargon.com.br/wp-content/uploads/logo_branco-1.png)
 
## Sobre
&emsp; O desafio trata da criação de um único microsserviço responsável por criar novos usuários e lista-los através de requisições HTTP. Para isso foi criado dois endpoints para criar e listar todos os usuários. Além desses, foi desenvolvido mais dois endpoints adicionais que torna possível editar alguma informação do usuário ou deletá-lo
 
&emsp; A aplicação se conecta com o Banco de Dados [PostgreSQL](https://www.postgresql.org/), criado e disponibilizado nos servidores da plataforma [Railway](https://railway.app/)
 
## Como subir o serviço
&emsp; Primeiramente, faça o download do `.env` disponibilizado, e da aplicação pelo GitHub

&emsp;**Observação**: *Em todos os casos de teste da aplicação é necessário adicionar o arquivo .env disponibilizado dentro do seguinte diretório*:
 
     /apps/user-service
### Docker
&emsp; Uma das opções onde é possivel testar a aplicação é através da utilização do container criado para rodar a aplicação. Para isso é preciso que tenha instalado em sua máquina o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/). Tendo eles instalados siga os seguintes passos:
 
1 - Abra o terminal e caminhe até a pasta raiz do microsserviço
 
     /apps/user-service
2 - Depois execute os seguintes comandos
 
    $ docker compose build
    $ docker compose up
 
&emsp; Com isso a aplicação estará no ar para testar
 
 
### NPM
&emsp; Uma segunda opção é possivel testar a aplicação é através do Node juntamente com o NPM. Para isso é preciso que tenha instalado em sua máquina o [Node 16:16.0 LTS e o NPM](https://nodejs.org/en/). Tendo eles instalados siga os seguintes passos:
 
1 - Abra o terminal e caminhe até a pasta raiz do microsserviço
 
     /apps/user-service
 
2 - Depois execute os seguintes comandos
 
    $ npm install
    $ npm run start:dev
 
&emsp; Com isso a aplicação estará no ar para testar
 
 
## Como testar
 
&emsp;Utilizando algum aplicativo para testar requisições http como o [Insomnia](https://insomnia.rest/) ou o [Postman](https://www.postman.com/) é possivel fazer as seguintes requisições:
 
### CreateUser
 
**Método**: POST
 
**Descrição**: Cria um novo usuário no banco de dados
 
**Endpoint**: localhost:8080/user/create
 
**body**:
 
```json
{
 "name": "Pedro Augusto",
 "email": "pedro@email.com",
 "password": "pedro2augusto"
}
```
 
**STATUS 200**
 
```json
{
 "id": "7bf2bfd5-9555-4fb1-aa4a-45214e02d07f",
 "name": "Pedro Augusto",
 "email": "pedro@email.com",
 "password": "$2b$10$kgGpKRPpx.1UrsKpmHeaqO3T8UzGa7.7R/MHS/CZwBEjQ78puWqDG",
 "created_at": "2022-08-04T03:35:37.215Z",
 "update_at": "2022-08-04T03:35:37.216Z"
}
```
**STATUS 400 EMAIL INVÁLIDO**
```json
"Error creating user. ERROR => invalid email"
```
 
**STATUS 400**
```json
"Error creating user. ERROR => <MENSAGEM DE ERRO>"
```
### GetAll
 
**Método**: GET
 
**Descrição**: Busca todas as instâncias de usuários já cadastradas no banco de dados ordenadas pelo atributo `name` em ordem alfabética
 
**Endpoint**: localhost:8080/users
 
**STATUS 200**
 
```json
[
 {
   "id": "f40deeb4-1aed-4cef-a288-4037233f11d8",
   "name": "Carlos",
   "email": "carlos@email.com",
   "password": "$2b$10$/SN5AzUO8D0TDeawSwa1LOuGyaiSDMa2uuXqYuiV..41E2FS1WVPS",
   "created_at": "2022-08-03T20:22:53.106Z",
   "update_at": "2022-08-03T20:22:53.106Z"
 },
 
 ...
 
 {
   "id": "7bf2bfd5-9555-4fb1-aa4a-45214e02d07f",
   "name": "Pedro Augusto",
   "email": "pedro@email.com",
   "password": "$2b$10$kgGpKRPpx.1UrsKpmHeaqO3T8UzGa7.7R/MHS/CZwBEjQ78puWqDG",
   "created_at": "2022-08-04T03:35:37.215Z",
   "update_at": "2022-08-04T03:35:37.216Z"
 },
 
 ...
 
]
```
**STATUS 400**
 
```json
"Error searching for all users. ERROR => <MENSAGEM DE ERRO>"
```
 
### UpdateUser
 
**Método**: PUT
 
**Descrição**: Edita um usuário existente no banco de dados caso ele exista, passando no parâmetro da requisição o id do usuário que se deseja editar.
 
**Endpoint**: localhost:8080/user/update/:id
 
&emsp; Vamos considerar o id = 7bf2bfd5-9555-4fb1-aa4a-45214e02d07f
o endpoint ficaria assim:
 
     localhost:8080/user/update/7bf2bfd5-9555-4fb1-aa4a-45214e02d07f
 
**body**:
 
```json
{
 "name":"João",
 "email":"joao@email.com"
}
```
 
**STATUS 200**
 
```json
{
 "id": "7bf2bfd5-9555-4fb1-aa4a-45214e02d07f",
 "name": "João",
 "email": "joao@email.com",
 "password": "$2b$10$kgGpKRPpx.1UrsKpmHeaqO3T8UzGa7.7R/MHS/CZwBEjQ78puWqDG",
 "created_at": "2022-08-04T03:35:37.215Z",
 "update_at": "2022-08-04T03:53:54.959Z"
}
```
 
**STATUS 400 USUÁRIO INEXISTENTE**
```json
"Error updating user. ERROR => There is no user with that id"
```
 
**STATUS 400 EMAIL INVÁLIDO**
```json
"Error updating user. ERROR => invalid email"
```
 
**STATUS 400**
```json
"Error updating user. ERROR => <MENSAGEM DE ERRO>"
```
 
### DeleteUser
 
**Método**: DELETE
 
**Descrição**Remove um usuário existente no banco de dados caso ele exista, passando no parâmetro da requisição o id do usuário que se deseja remover.
 
**Endpoint**: localhost:8080/user/delete/:id
 
&emsp; Vamos considerar o id = 7bf2bfd5-9555-4fb1-aa4a-45214e02d07f
o endpoint ficaria assim:
 
     localhost:8080/user/delete/7bf2bfd5-9555-4fb1-aa4a-45214e02d07f
 
**STATUS 200**
 
```json
{
 "id": "7bf2bfd5-9555-4fb1-aa4a-45214e02d07f",
 "name": "João",
 "email": "joao@email.com",
 "password": "$2b$10$kgGpKRPpx.1UrsKpmHeaqO3T8UzGa7.7R/MHS/CZwBEjQ78puWqDG",
 "created_at": "2022-08-04T03:35:37.215Z",
 "update_at": "2022-08-04T03:53:54.959Z"
}
```
 
**STATUS 400 USUÁRIO INEXISTENTE**
```json
"Error deleting user. ERROR => There is no user with that id"
```
 
**STATUS 400**
```json
"Error deleting user. ERROR => <MENSAGEM DE ERRO>"
```
 
## Tecnologias e ferramentas utilizadas
 
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [NodeJs](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Prisma](https://www.prisma.io/)
* [Railway](https://railway.app/)
* [Docker](https://docs.docker.com/)
* [DockerCompose](https://docs.docker.com/compose/)
* [Nodemon](https://nodemon.io/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Insomnia](https://insomnia.rest/)