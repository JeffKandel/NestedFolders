const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

/*
 * To provide credentials to postgres use:
 * postgres://USERNAME:PASSWORD@localhost:5432/${databaseName}
 */
const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
  logging: false
})

module.exports = db
