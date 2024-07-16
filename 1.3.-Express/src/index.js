const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users.js');

// Middlewares ...

const isLogged = (req, res, next) => {
    let logged = true;
    if (logged) {
        next()
    } else {
        console.log("You must be logged")
    }
}

app.use(isLogged);

// Routes...

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/users', user);

app.listen(port, () => {
    console.log("My app is running at port 3000");
})
