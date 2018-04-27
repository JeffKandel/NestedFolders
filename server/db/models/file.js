const Sequelize = require('sequelize')
const db = require('../db')

const File = db.define('files', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  media_url: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
})

module.exports = File
