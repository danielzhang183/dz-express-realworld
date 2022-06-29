const express = require('express')
const router = express.Router()

// 获取用户资料
router.get('/:username', async (req, res, next) => {
  try {
    res.send('get /profiles/:username')
  } catch (err) {
    next(err)
  }
})

// 获取用户资料
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('post /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
})

// 获取用户资料
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send('delete /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
})

module.exports = router
