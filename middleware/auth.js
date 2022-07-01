const { verify } = require('jsonwebtoken')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    return res.status(401).end()
  }

  try {
    const { userId } = await verify(token, jwtSecret)
    req.user = await User.findById(userId)
    next()
  } catch (err) {
    return res.status(401).end()
  }
}
