const express = require('express'),
    router = express.Router(),
    userController = require('../controllers/user')

router.get('/', userController.getAll)
router.get('/:userId', userController.getById)
router.post('/', userController.create)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.remove)

module.exports = router