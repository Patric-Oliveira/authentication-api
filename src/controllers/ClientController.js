module.exports = { 
    // Index
    async index(req, res) {
        res.status(200).send({ ok: true, user: req.userId});
    },
    
};