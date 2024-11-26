const { Router } = require("express");
const { 
  createUser, 
  listUsers, 
  listUserDetail,
  deleteUser, 
  updateUser, 
} = require("./controllers/users");

const routes = Router();


// Cria uma rota get para testar a api
routes.get("/health", (request, response) => {
  return response.status(200).json("Seja bem vindo a minha api...");
});

// Cria uma rota post para inserir um novo usuário
routes.post('/users', createUser);

// Cria uma rota get para listar todos os usuários
routes.get("/users", listUsers);

// Cria uma rota get para listar um usuário específico
routes.get('/users/:id', listUserDetail); 

// Cria uma rota para deletar um usuário
routes.delete('/users/:id', deleteUser);

// Cria uma rota para atualizar um usuário
routes.put("/users/:id", updateUser);

module.exports  = routes;