const config = require('../config/index');
const app = require('../app');

module.exports = (err) => {
    console.clear();
    if (err) {
        console.log('Error connecting to database');
    }

    app.listen(config.app.port, (err) => {
        if(err) {
            return console.log('erro');
        }
        console.log(`Initiate in http://localhost:${config.app.port}`);
    });

};
