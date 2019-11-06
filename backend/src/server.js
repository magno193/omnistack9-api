const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

// Plugin para reconhecer req.body de JSON
app.use(express.json());
// Usar as rotas
app.use(routes)

// Inicia servidor na porta 3333
app.listen(3333);