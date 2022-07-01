const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')

// 登录
router.post('/users/login', userValidator.login, userCtrl.login)

// 注册
router.post('/users', userValidator.register, userCtrl.register)

// 获取当前登录用户
router.get('/user', userCtrl.getCurrentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router
