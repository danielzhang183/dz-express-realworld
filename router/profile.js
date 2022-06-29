const express = require('express')
const router = express.Router()
const profileCtrl = require('../controller/profile')

// 获取用户资料
router.get('/:username', profileCtrl.fetchProfiles)

// 获取用户资料
router.post('/:username/follow', profileCtrl.followProfile)

// 获取用户资料
router.delete('/:username/follow', profileCtrl.unfollowProfile)

module.exports = router
