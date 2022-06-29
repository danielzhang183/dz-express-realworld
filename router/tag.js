const express = require('express')
const router = express.Router()

// 获取标签列表
router.get('/tags', async (req, res, next) => {
  try {
    res.send('get /tags')
  } catch (err) {
    next(err)
  }
})

module.exports = router
