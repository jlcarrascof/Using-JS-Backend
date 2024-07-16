const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users.js');

// Middlewares ...

const my_middleware = (req, res, next) => {
    console.log("Running middleware");
    next();
}

app.use(my_middleware);

// Routes...

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.use('/users', user);

app.listen(port, () => {
    console.log("My app is running at port 3000");
})
