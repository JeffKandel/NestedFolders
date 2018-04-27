const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const app = express()
module.exports = app

const createApp = () => {
  app.use(morgan('dev'))
  app.use('/api', require('./api'))
  app.use('*', (req, res, next) => {
    res.send('Consider exploring <a href="/api/projects/1">project 1</a> or <a href="/api/projects/2">project 2</a>')
  })
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => app.listen(PORT, () => console.log(`Check me out on ${PORT}`))


if (require.main === module) {
  createApp()
  startListening()
} else {
  createApp()
}
