const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Rota com parâmetros de request e response
// req.query - Acessar query params (filtros)
// req.params - Acessar route params (edição, delete)
// req.body - Acessar corpo da requisição (criação, edição)
routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('image'), SpotController.store);

// Exportando routes
module.exports = routes;