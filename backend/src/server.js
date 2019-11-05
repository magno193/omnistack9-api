const express = require('express');

const app = express();

// Rota com parâmetros de request e response
app.get('/', (request, response) => {
    return response.send('Hello world')
})
// Porta
app.listen(3333);