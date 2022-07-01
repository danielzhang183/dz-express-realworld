const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

// 获取文章列表
router.get('/', articleCtrl.fetchArticles)

// 获取关注作者文章列表
router.get('/feed', articleCtrl.fetchFeedArticles)

// 获取文章
router.get('/:slug', articleCtrl.fetchArticle)

// 创建文章
router.post('/', auth, articleValidator.createArticle,articleCtrl.createArticle)

// 更新文章
router.put('/:slug', articleCtrl.updateArticle)

// 删除文章
router.delete('/:slug', articleCtrl.deleteArticle)

// 添加文章评论
router.post('/:slug/comments', articleCtrl.createArticleComment)

// 获取文章评论
router.get('/:slug/comments', articleCtrl.fetchArticleComment)

// 删除文章评论
router.delete('/:slug/comments/:id', articleCtrl.deleteArticleComment)

module.exports = router
