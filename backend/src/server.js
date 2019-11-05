const express = require('express');

const app = express();

// Rota com parâmetros de request e response
// req.query acessa query params
app.get('/users', (request, response) => {
    return response.json({ idade: request.params.idade})
})
// Porta
app.listen(3333);