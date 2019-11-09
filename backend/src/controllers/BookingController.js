const Booking = require('../models/Booking')

module.exports = {

    async store(req, res) {
        const user_id = req.headers.user_id;
        const spot_id = req.params.spot_id;
        const date = req.body.date;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date: date
        });

        // Mostrar informações do usuário
        await booking.populate('user').execPopulate();
        // Mostrar informações do spot
        await booking.populate('spot').execPopulate();
        
        return res.json(booking);
    }
};