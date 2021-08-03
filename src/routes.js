const router = require('express').Router();

const HomeController = require('./controllers/HomeController');


// Rota Home
router
    .get('/', HomeController.index)
    .post('/', HomeController.Store);


module.exports = router;