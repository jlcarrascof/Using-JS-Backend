const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/all', userController.getUsers)
router.get('/create', userController.getCreateUsers)
router.get('/update', userController.getUpdateUsers)
router.get('/delete', userController.getDeleteUsers)

router.post('/create', userController.createUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router;
