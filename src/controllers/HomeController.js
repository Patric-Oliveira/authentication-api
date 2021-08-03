const Home = require('../models/Home');

module.exports = { 

    // Index
    async index(req, res) {
        res.status(200).json('Hello World');
        //res.sendError('Erro no banco', 500)
    },
    
    // Store
    async Store(req, res) {
        const { name, age } = req.body;
        const person = new Home({name, age});
        person.save((err, person) => {
            if (err) {
                return res.status(500).send({message: 'erro'})
            }
            res.send(person)
        });
    },
};