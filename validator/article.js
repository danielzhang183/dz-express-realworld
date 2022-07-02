const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
const { Article } = require('../model')

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('文章标题不能为空'),
  body('article.description').notEmpty().withMessage('文章摘要不能为空'),
  body('article.body').notEmpty().withMessage('文章内容不能为空'),
])

exports.fetchArticle = validate([
  // param('slug').custom(async (value) => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     return Promise.reject('文章ID类型错误')
  //   }
  // })
  validate.isValidateObjectId(['params'], 'slug')
])

exports.updateArticle = [
  validate([
    validate.isValidateObjectId(['params'], 'slug')
  ]),
  async (req, res, next) => { // validate article exist
    const article = await Article.findById(req.params.slug)
    req.article = article
    article ? next() : res.status(404).end()
  },
  async (req, res, next) => {
    String(req.user._id) === String(req.article.author) ? next() : res.status(403).end()
  }
]

exports.deleteArticle = exports.updateArticle