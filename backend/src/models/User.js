const mongoose = require('mongoose');

// Estrutura do usuário
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    company: String
});

// Exportar e criar model
module.exports = mongoose.model('User', UserSchema)