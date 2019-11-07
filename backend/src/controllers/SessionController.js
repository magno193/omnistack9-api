const User = require('../models/User');

module.exports = {
    async store(req, res){
        // req.body para pegar a estrutura JSON da requisição
        const email = req.body.email;
        const user = await User.create(email); // Cria um user

        return res.json(user); // Retorna o user
    }
};