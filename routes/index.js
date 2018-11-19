const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const itemController = require('../controllers/itemController')
const childController = require('../controllers/childController')

router.get('/users', userController.index)
router.post('/user/create', userController.create)
router.get('/user/get/:id', userController.retrieve)
router.post('/user/update/:id', userController.update)
router.post('/user/delete/:id', userController.delete)

router.get('/children', childController.index)
router.post('/child/create', childController.create)
router.get('/child/get/:id', childController.retrieve)
router.post('/child/update/:id', childController.update)
router.post('/child/delete/:id', childController.delete)

router.get('/items', itemController.index)
router.post('/item/create', itemController.create)
router.get('/item/get/:id', itemController.retrieve)
router.post('/item/update/:id', itemController.update)
router.post('/item/delete/:id', itemController.delete)

module.exports = router