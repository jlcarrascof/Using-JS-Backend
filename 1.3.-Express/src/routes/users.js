const express = require('express');
const router = express.Router;

router.get('/users', (req, res) => {
    res.send('Printing all users');
})

module.exports = router;
