const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user'),
    userMiddleware = require('../core/middlewares/user'),
    isAdmin = require('../core/middlewares/isAdmin')  

router.get('/', [userMiddleware, isAdmin], userController.getAll)
router.get('/:userId', userMiddleware, userController.getById)
router.post('/', userController.create)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.remove)

module.exports = router