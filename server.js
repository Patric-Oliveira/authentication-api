require('dotenv').config();

const boot = require('./src/services/boot')
const config = require('./src/config');

const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

if (config.db.connectionString) {
    mongoose.connect(config.db.connectionString, boot);
} else {
    console.log('No connection string provided');
};
