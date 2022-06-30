const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default')

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (err) => {
  console.log('MongoDB connect failed', err)
})
db.on('open', () => {
  console.log('MongoDB connect success')
})
