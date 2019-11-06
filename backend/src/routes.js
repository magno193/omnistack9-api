const express = require('express');

const routes = express.Router();

// Rota com parâmetros de request e response
// req.query - Acessar query params (filtros)
// req.params - Acessar route params (edição, delete)
// req.body - Acessar corpo da requisição (criação, edição)
routes.post('/users/', (request, response) => {
    return response.json(request.body)
});

// Exportando routes
module.exports = routes;