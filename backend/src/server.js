const express = require('express');

const app = express();

// Rota com parâmetros de request e response
// req.query - Acessar query params (filtros)
// req.params - Acessar route params (edição, delete)

app.put('/users/:id', (request, response) => {
    return response.json({ id: request.params.id})
})
// Porta
app.listen(3333);