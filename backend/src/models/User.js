const mongoose = require('mongoose');

// Estrutura do usuário
const UserSchema = new mongoose.Schema({
    email: String
});

// Exportar e criar model
module.exports = mongoose.model('User', UserSchema)