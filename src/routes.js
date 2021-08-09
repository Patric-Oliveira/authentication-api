const router = require('express').Router();

const TokenController = require('./controllers/TokenController');
const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController')

// Rota Token
router
    .post('/token', TokenController.store);

// Rota User
router
    .get('/user', UserController.index)
    .get('/user/:id', UserController.show)
    .post('/user', UserController.store)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete);

// Rota Home
router
    .get('/', HomeController.index)
    .post('/', HomeController.Store);


module.exports = router;