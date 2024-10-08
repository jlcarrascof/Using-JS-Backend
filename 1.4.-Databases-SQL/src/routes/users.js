const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)
router.get('/create', userController.getCreateUsers)
router.get('/update/:id', userController.getUpdateUsers)
router.get('/delete/:id', userController.getDeleteUsers)

router.post('/create', userController.createUser)
router.post('/update/:id', userController.updateUser)
router.post('/delete/:id', userController.deleteUser)

module.exports = router;
