const User = require('../models/User');

module.exports = {
    async store(req, res){
        // req.body para pegar a estrutura JSON da requisição
        const email = req.body.email;

        // Caso não exista um email identico no banco de dados
        // Cadastra um novo usuario com email
        let user = await User.findOne({email: email})
        if (!user){
            user = await User.create({email: email})
        }

        return res.json(user); // Retorna o user
    }
};