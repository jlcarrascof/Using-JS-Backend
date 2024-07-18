const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)

router.get('/create', userController.getCreateUsers)

router.get('/update', userController.getUpdateUsers)

router.get('/delete', userController.getDeleteUsers)

module.exports = router;
