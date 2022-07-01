const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default')

mongoose.connect(dbUri, {
  useMongoClient: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (err) => {
  console.log('MongoDB connect failed', err)
})
db.on('open', () => {
  console.log('MongoDB connect success')
})

module.exports = {
  User: mongoose.model('User', require('./user')),
}
