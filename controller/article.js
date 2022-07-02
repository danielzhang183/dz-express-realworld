const { Article, User } = require('../model')

exports.fetchArticles = async (req, res, next) => {
  try {
    const {
      limit = 20,
      offset = 0,
      tag,
      author,
    } = req.query
    const filter = {}
    if (tag) {
      filter.tagList = tag
    }
    if (author) {
      const user = await User.findOne({ username: author })
      filter.author = user?._id || null
    }
    const articles = await Article.find(filter)
      .skip(Number(offset))
      .limit(Number(limit))
      .sort({
        createdAt: -1
      })
    const articlesCount = await Article.countDocuments()
    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (err) {
    next(err)
  }
}

exports.fetchFeedArticles = (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

exports.fetchArticle = async (req, res, next) => {
  try {
    const article = await Article
      .findById(req.params.slug)
      .populate('author')
    article ? res.status(200).json({ article }) : res.status(404).end()
  } catch (err) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author').execPopulate()
    await article.save()
    res.status(201).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article
    const newArticle = req.body.article
    if (newArticle.title) article.title = newArticle.title
    if (newArticle.description) article.description = newArticle.description
    if (newArticle.body) article.body = newArticle.body
    await article.save()
    res.status(201).json({ article })
  } catch (err) {
    next(err)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article
    await article.remove()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

exports.createArticleComment = (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

exports.fetchArticleComment = (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

exports.deleteArticleComment = (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}
