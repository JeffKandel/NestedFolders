const File = require('./file')
const Folder = require('./folder')
const Project = require('./project')

/**
 * Associations establish foreign keys and allow for eager loading of models
 */
File.belongsTo(Folder, {foreignKey: 'folder_id'})
Folder.belongsTo(Folder, {foreignKey: 'parent_folder_id'})
Project.belongsTo(Folder, {
  foreignKey: 'root_folder_id',
  as: 'root_folder',
  allowNull: false,
})

module.exports = {
  File,
  Folder,
  Project,
}
