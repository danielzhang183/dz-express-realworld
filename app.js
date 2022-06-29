const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

// add logger
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(router)
// hanler error
app.use(errorHandler())

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})