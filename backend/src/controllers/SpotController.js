const Spot = require('../models/Spot');

module.exports = {
    async store(req, res){
        const filename = req.file.filename;
        const {company, techs, price} = req.body;
        const user_id = req.headers.user_id; // Contexto da aplicação

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