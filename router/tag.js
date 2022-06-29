const express = require('express')
const router = express.Router()
const tagCtrl = require('../controller/tag')

// 获取标签列表
router.get('/', tagCtrl.fetchTags)

module.exports = router
