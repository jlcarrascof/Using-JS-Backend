const mongoose = require('mongoose');
const { mongodb } = require('./config');

mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`).then((db) => {
    console.log('Connection succesful');
});

module.exports = connection;
