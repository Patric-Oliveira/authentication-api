const router = require('express').Router();

const loginRequired = require('./middlewares/loginRequired');

const TokenController = require('./controllers/TokenController');
const UserController = require('./controllers/UserController')
const HomeController = require('./controllers/HomeController');
const ClientController = require('./controllers/ClientController')

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

// Rota Client
router
    .get('/client', loginRequired, ClientController.index);


module.exports = router;