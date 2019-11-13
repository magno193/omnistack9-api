const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Conexão com o mongoDB
mongoose.connect(
    'mongodb+srv://omnistack:omnistack@omnistack-ymbxy.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
// Plugin para reconhecer req.body de JSON
app.use(express.json());
// Para retornar a rota estática da imagem
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
// Usar as rotas
app.use(routes)

// Inicia servidor na porta 3333
app.listen(3333);