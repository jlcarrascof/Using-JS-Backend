const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Printing all users');
})

router.get('/create', (req, res) => {
    res.send('Create users');
})

router.get('/update', (req, res) => {
    res.send('Update users');
})

router.get('/delete', (req, res) => {
    res.send('Delete users');
})

module.exports = router;
