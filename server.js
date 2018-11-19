const express = require('express')
const app = express()

const routes = require('./routes/index')
const mongoose = require('./db/connections')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// bring in the api routes
app.use('/api', routes);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})