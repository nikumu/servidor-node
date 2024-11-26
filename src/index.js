const express = require("express");

// Cria um novo app usando express
const app = express();

// Configura o express para usar o padrão json de comunicação
app.use(express.json());

// Cria uma rota get para testar a api
app.get("/health", (request, response) => {
  response.send("Seja bem vindo a minha api...");
});

// Cria um array para simular um banco de dados
let users = [];

// Cria uma rota post para inserir um novo usuário
app.post('/users', (request, response) => {
  const { name, age } = request.body;
  
  const newUser = { 
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name, 
    age };
  users.push(newUser);

  response.send(newUser);
});

// Cria uma rota get para listar todos os usuários
app.get("/users", (request, response) => {
  response.send(users);
});

// Cria uma rota get para listar um usuário específico
app.get('/users/:id', (request, response) => {
  console.log(request.params.id);
})

app.listen(3001);