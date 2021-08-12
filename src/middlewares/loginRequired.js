const jwt = require('jsonwebtoken');
const config = require('../config/auth')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.sendError('Login required', 401);
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2) {
        return res.sendError('Token error', 401);
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return res.sendError('Token malformatted', 401);
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        
        if(err) {
            return res.sendError('Token invalid', 401);
        } 

        req.userID = decoded.id;
        return next();
    });

};
