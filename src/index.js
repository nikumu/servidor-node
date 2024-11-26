const express = require("express");
const routes = require("./routes");

// Cria um novo app usando express
const app = express();

// Configura o express para usar o padrão json de comunicação
app.use(express.json());
app.use(routes);


app.listen(3001);