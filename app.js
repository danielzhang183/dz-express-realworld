const express = require('express')
const morgan = require('morgan')

const app = express()

// add logger
app.use(morgan('dev'))
app.use(express.json())
const PORT = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})