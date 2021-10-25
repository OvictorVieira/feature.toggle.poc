const express     = require('express')
const app         = express()
const port        = 3000
const userRoutes  = require('./api/routes/users');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(userRoutes)

app.listen(port, () => {
  console.log(`API server started on: ${port}`)
})