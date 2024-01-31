# Sistema de CHAT com LOGIN

Este é um sistema de chat em tempo real com login implementando CRUD, desenvolvido em JavaScript com React no frontend, conectado a duas API's Node.js com Express: uma para o sistema de login que utiliza MongoDB para o banco de dados, e outra para o sistema de chat, que utiliza a biblioteca Socket.io para a comunicação bidirecional.

## Funcionalidades

- Login
- Registro
- Visualização
- Chat global em tempo real
- Logout
- Edição
- Deleção

## Acesso

Para acessar a aplicação web, clique [aqui](https://user-login-system.netlify.app/).

## Conteudos aplicados

### React

- Utilização de Hooks para gerenciar o estado e o ciclo de vida dos componentes.
- Requisições Axios para interagir com o servidor.
- Integração de ícones para melhorar a experiência do usuário (react-icons).
- Configuração de rotas para facilitar a navegação entre diferentes partes do aplicativo.
- Rotas protegidas com uso do Local Storage.
- Formulários, renderização condicional de componentes, props, listas, entre outros.
- Mensagens dinâmicas.

### Node.js

- Implementação de duas API's Node.js com a biblioteca Express.
- Configuração de endpoints.
- Segurança de senhas com Bcrypt.
- Proteção e autenticação de rotas com JSON Web Tokens (JWT).

### MongoDB

-Implementação de banco de dados não relacional(NoSQL) em nuvem (Atlas).

### Socket.io

- Implementação da biblioteca e seus recursos para a emissão bidirecional de mensagens.

### Deployment

- Railway: deployment dos  dois backends (chat e login).
- Netlify: deployment do frontend.
- Atlas: deployment do banco de dados.

## Demonstração

### Login

![Login](/src/img/readme-login.png)

### Registro

![Registro](/src/img/readme-register.png)

### Home

![Home](/src/img/readme-home.png)

### Chat

![Chat](/src/img/readme-chat.png)

### Usuário

![user](/src/img/readme-user.png)

### Edição de Usuário

![edit](/src/img/readme-edit.png)

### Mensagens dinâmicas
Algumas mensagens dinâmicas da aplicação:

![message1](/src/img/readme-msg1.png)
![message2](/src/img/readme-msg2.png)