const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

module.exports = {

    async store(req, res) {

        try {

            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');
    
            if(!user) {
                return res.sendError('User not found', 400);
            }
    
            if(!await bcrypt.compare(password, user.password)) {
                return res.sendError('Invalid password', 400);
            }

            user.password = undefined;

            const token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400,
            });

            res.send({ user, token });

        } catch (e) {
            return res.status(400).json({
                erros: e.erros.map((err) => err.message),
            });
        }
       
    },
};