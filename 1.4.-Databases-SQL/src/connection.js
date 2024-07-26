const mysql = require('mysql');
const { mysql_database } = require('./config');

const connection = mysql.createConnection(mysql_database);
connection.connect((err, conn) => {
    if (err) {
        console.log('An error ocurred');
    } else {
        console.log('Connection succesful');
        return conn;
    }
})
