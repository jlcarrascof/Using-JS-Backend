const express = require('express');
const app = express();
const path = require('path');
const user = require('./routes/users.js');
const loggedMiddleware = require('./middlewares/logged.js')

// Settings
app.set('title', 'App made with Node');
app.set('port', '3000');
app.set('view engine', 'ejs');

// Middlewares ...
// app.use(loggedMiddleware.isLogged);

app.use(express.static(path.join(__dirname, 'public')));

// Routes...

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/users', user);

app.listen(app.get('port'), () => {
    console.log("My " + app.get('title') + " is running at port " + app.get('port'));
})
