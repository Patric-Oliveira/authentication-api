const User = require('../models/User')

module.exports = {

    // Index
    async index(req, res) {
        try {
            const users = await User.find();

            if(!users) {
                return res.sendError('Não existe usuário', 400);
            }

            return res.json(users)
        } catch (e) {
            return res.json(null)
        }
    },

    // Show
    async show(req, res) {
        try {
            const { id } = req.params;

            if(!id) {
                return res.sendError('Faltando o ID', 400);
            }
            
            const user = await User.findById(id);

            if(!user) {
                return res.sendError('Usuário não existe', 400);
            }

            return res.json(user);
        } catch (e) {
            return res.status(400).json({
                erros: e.erros.map((err) => err.message),
            });
        }
    },

    // Store
    async store(req, res) {
        try {
            const { email } = req.body;

            if(await User.findOne({ email })) {
                return res.sendError('Usuário já existe', 400);
            }

            const newUser = await User.create(req.body);

            newUser.password = undefined;

            if(!newUser) {
                return res.sendError('Error ao criar usuário', 400);
            }

            return res.json(newUser);
        } catch (e) {
            return res.status(400).json({
                erros: e.erros.map((err) => err.message),
            });
        }
    },

    // Update 
    async update(req, res) {
        try {
            const updtUser = await User.findByIdAndUpdate(req.params.id, req.body);
            
            if(!updtUser) {
                return res.sendError('Usuário não existe', 400);
            }

            return res.json({message: 'Atualizado com sucesso!'});
        } catch (e) {
            return res.status(400).json({
                erros: e.erros.map((err) => err.message),
            });
        }
    },

    // Delete
    async delete(req, res) {
        try {
            const dltUser = await User.findByIdAndDelete(req.params.id);

            if(!dltUser) {
                return res.sendError('Usuário não existe', 400);
            }

            return res.json({message: 'Deletado com sucesso!'});
        } catch (e) {
            return res.status(400).json({
                erros: e.erros.map((err) => err.message),
            });
        }
    },
}
