const express = require('express')
const app = express()
require('dotenv').config({ path: './.env' })
const { translateRouter } = require('./translate')
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get('/', (request, response) => {
  response.send('Conecction succeed. Welcome to Google Translator Clone')
})

app.use('/api/translate', translateRouter)

const PORT = process.env.PORT

const server = app.listen(PORT, () => console.log(`🚀 Running server at ${PORT}`))

module.exports = { app, server }
