const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)

router.get('/create', userController.createUsers)

router.get('/update', userController.updateUsers)

router.get('/delete', userController.deleteUsers)

module.exports = router;
