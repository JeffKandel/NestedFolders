const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const db = require('./db')
const app = express()
module.exports = app

/**
 * The app is composed of three functions: createApp, startListening, syncDb
 * This makes the logic between starting the app and testing it easy to handle (lines 39-50)
 */

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'))

  // api routes
  app.use('/api', require('./api'))

  // send a 404 for other requests
  app.use('*', (req, res, next) => {
    res.send('Consider exploring <a href="/api/projects/1">project 1</a> or <a href="/api/projects/2">project 2</a>')
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => app.listen(PORT, () => console.log(`Check me out on ${PORT}`))

const syncDb = () => db.sync()


/*
 * `require.main === module`:
 * Evaluates to true when run from the command line with `node server/app.js`
 * Evaluates to false when required by the testing module
 */
if (require.main === module) {
  syncDb()
  .then(createApp)
  .then(startListening)
} else {
  createApp()
}
