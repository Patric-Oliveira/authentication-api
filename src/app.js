// Config dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

// Config express
const express = require('express');
const app = express();

// Capturar dados
app.use(express.urlencoded({extended:true, limit: 1.5*1024*1024}));
app.use(express.json({limit: 1.5*1024*1024}));

// Config sendError
const sendError = require('./helpers/sendError');
app.use(sendError);

// Config middlewares rateLimit
const rateLimit = require('./middlewares/rateLimit');
app.use(...rateLimit);

// Config rotas
const routes = require('./routes');
app.use(routes);

module.exports = app;