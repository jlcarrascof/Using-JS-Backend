const mongoose = require('mongoose');
const { mongodb } = require('./config');

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`).then((db) => {
    console.log('Connection succesful');
}).catch((err) => {
    console.log('An error ocurred: ' + err);
});

module.exports = connection;
