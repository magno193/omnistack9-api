module.exports = {
    async store(req, res){
        return res.json({ ok: req.body });
    }
}