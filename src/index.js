const express = require("express");

// Cria um novo app usando express
const app = express();

// Configura o express para usar o padrão json de comunicação
app.use(express.json());

// Cria uma rota get para testar a api
app.get("/health", (request, response) => {
  response.send("Seja bem vindo a minha api...");
});

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

app.get("/users", (request, response) => {
  response.send(users);
});

app.listen(3001);