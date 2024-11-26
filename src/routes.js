const { Router } = require("express");

const routes = Router();


// Cria uma rota get para testar a api
routes.get("/health", (request, response) => {
  response.send("Seja bem vindo a minha api...");
});

// Cria um array para simular um banco de dados
let users = [];

// Cria uma rota post para inserir um novo usuário
routes.post('/users', (request, response) => {
  const { name, age } = request.body;
  
  const newUser = { 
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name, 
    age };
  users.push(newUser);

  response.send(newUser);
});

// Cria uma rota get para listar todos os usuários
routes.get("/users", (request, response) => {
  response.send(users);
});

// Cria uma rota get para listar um usuário específico
routes.get('/users/:id', (request, response) => {
  const currentUser = users.find(
    (user) => user.id === parseInt(request.params.id)
  );

  if (!currentUser) response.send("Nenhum usuário foi encontrado");

  response.send(currentUser);
});

// Cria uma rota para deletar um usuário
routes.delete('/users/:id', (request, response) => {
  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );

  if (index === -1) response.send("Nenhum usuário foi encontrado");

  users.splice(0, index);

  response.send("Usuário excluído com sucesso!");
});

// Cria uma rota para atualizar um usuário
routes.put("/users/:id", (request, response) => {
  const { age, name } = request.body;

  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );

  if (index === -1) response.send("Nenhum usuário foi encontrado");

  const updatedUser = {
    id: users[index].id,
    name,
    age,
  };

  users[index] = updatedUser;
  
  response.send(updatedUser);
});

module.exports  = routes;