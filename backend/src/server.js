const express = require('express');
const routes = require('./routes');

const app = express();

// Plugin para reconhecer req.body de JSON
app.use(express.json());
// User as rotas
app.use(routes)

// Inicia servidor na porta 3333
app.listen(3333);