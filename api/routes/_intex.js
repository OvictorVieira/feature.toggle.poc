const express = require('express')
const app     = express.Router()
const auth    = require('../middlewares/auth')

app.use(auth)
app.use(require('./users'))

module.exports = app