const router = require('express').Router();

const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController')

// Rota User
router
    .get('/register', UserController.index)
    .get('/register/:id', UserController.show)
    .post('/register', UserController.store)
    .put('/register/:id', UserController.update)
    .delete('/register/id', UserController.delete);


// Rota Home
router
    .get('/', HomeController.index)
    .post('/', HomeController.Store);


module.exports = router;