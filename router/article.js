const express = require('express')
const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
  try {
    res.send('post /articles')
  } catch (err) {
    next(err)
  }
})

module.exports = router
