const Sequelize = require('sequelize')
const db = require('../db')

const Folder = db.define('folders', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  parent_folder_id:{
    type: Sequelize.INTEGER,
  }
}, {
  timestamps: false,
})

module.exports = Folder
