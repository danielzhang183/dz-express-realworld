const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')

// 获取文章列表
router.get('/', articleCtrl.fetchActicles)

module.exports = router
