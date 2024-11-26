// Cria um array para simular um banco de dados
let users = [];

function createUser(request, response) {
    const { name, age } = request.body;
  
  const newUser = { 
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name, 
    age 
    };
  users.push(newUser);

  return response.status(201).json(newUser);
}

function listUsers(request, response) {
    return response.status(200).json(users);
}

function listUserDetail(request, response) {
    const currentUser = users.find(
    (user) => user.id === parseInt(request.params.id)
  );

  if (!currentUser) 
    return response.status(404).json("Nenhum usuário foi encontrado");

  return response.status(200).json(currentUser);
}

function deleteUser(request, response) {
    const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );

  if (index === -1) 
    return response.status(404).json("Nenhum usuário foi encontrado");

  users.splice(0, index);

  return response.status(200).json("Usuário excluído com sucesso!");
}

function updateUser(request, response) {
    const { age, name } = request.body;

  const index = users.findIndex(
    (user) => user.id === parseInt(request.params.id)
  );

  if (index === -1) 
    return response.status(404).json("Nenhum usuário foi encontrado");

  const updatedUser = {
    id: users[index].id,
    name,
    age,
  };

  users[index] = updatedUser;
  
  return response.status(200).json(updatedUser);
}

module.exports = { 
    createUser, 
    listUsers, 
    listUserDetail,
    deleteUser, 
    updateUser
};