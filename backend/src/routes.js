const express = require('express');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

// Rota com parâmetros de request e response
// req.query - Acessar query params (filtros)
// req.params - Acessar route params (edição, delete)
// req.body - Acessar corpo da requisição (criação, edição)
routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);
// Exportando routes
module.exports = routes;