const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('projects', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  root_folder_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
})

module.exports = Project
