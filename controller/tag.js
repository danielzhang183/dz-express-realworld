exports.fetchTags = async (req, res, next) => {
  try {
    res.send('get /tags')
  } catch (err) {
    next(err)
  }
}