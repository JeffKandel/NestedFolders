const Sequelize = require('sequelize')
const db = require('../db')

const Folder = db.define('folders', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
})

module.exports = Folder
