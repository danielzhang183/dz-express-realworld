exports.fetchActicles = async (req, res, next) => {
  try {
    res.send('get /articles')
  } catch (err) {
    next(err)
  }
}