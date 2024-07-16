const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const user = require('./routes/users.js');
const loggedMiddleware = require('./middlewares/logged.js')

// Middlewares ...

app.use(loggedMiddleware.isLogged);
app.use(express.static(path.join(__dirname, 'public')));

// Routes...

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/users', user);

app.listen(port, () => {
    console.log("My app is running at port 3000");
})
