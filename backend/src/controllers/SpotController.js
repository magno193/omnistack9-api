const Spot = require('../models/Spot');
const User = require('../models/User')

module.exports = {

    async index(req, res){
        const tech = req.query.tech;
        // Retorna a tecnologia utilizada
        const spot = await Spot.find({ techs: tech });

        return res.json(spot)
    },

    async store(req, res){
        const filename = req.file.filename;
        const {company, techs, price} = req.body;
        const user_id = req.headers.user_id; // Contexto da aplicação

        // Checar se o usuário existe
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({
                error: 'Usuário não existe'
            })
        }

        const spot = await Spot.create({
            user: user_id,
            image: filename,
            company: company,
            techs: techs.split(',').map(tech => tech.trim()),
            price: price
        })

        return res.json(spot);
    }
}