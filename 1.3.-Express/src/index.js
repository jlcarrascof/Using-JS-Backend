const express = require('express');
const app = express();
const port = 3000;

// Routes...

app.get('/', (req, res) => {
    res.send('Welcome');
})
