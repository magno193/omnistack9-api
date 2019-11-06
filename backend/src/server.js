const express = require('express');

const app = express();

// Rota com parâmetros de request e response
// req.query - Acessar query params (filtros)
// req.params - Acessar route params (edição, delete)
// req.body - Acessar corpo da requisição (criação, edição)

// Plugin para reconhecer req.body de JSON
app.use(express.json());

app.post('/users/', (request, response) => {
    return response.json(request.body)
});
// Porta
app.listen(3333);