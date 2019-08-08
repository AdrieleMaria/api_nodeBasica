const express = require('express')

const router = express.Router()

const ctrl = require('../controllers/user-controllers')

// find all
router.get('/', ctrl.findAll)

// create
router.post('/', ctrl.createUser)

//delete
router.delete('/:userId', ctrl.deleteUser)

//updateUser
router.put('/:userId', ctrl.updateUser)

//findById
router.get('/:userId', ctrl.findOne)

module.exports = router