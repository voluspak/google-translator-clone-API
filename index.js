const express = require('express')
const app = express()
require('dotenv').config({ path: './.env' })
const { translateRouter } = require('./translate')

app.use(express.json())

app.use('/api/translate', translateRouter)

const PORT = process.env.PORT

const server = app.listen(PORT, () => console.log(`🚀 Running server at ${PORT}`))

module.exports = { app, server }
