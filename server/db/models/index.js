const File = require('./file')
const Folder = require('./folder')
const Project = require('./project')

/**
 * Associations establish foreign keys and allow for eager loading of models
 */
Folder.hasMany(File, {foreignKey: 'folder_id'})
Folder.belongsTo(Folder, {foreignKey: 'parent_folder_id'})
Project.belongsTo(Folder, {
  foreignKey: 'root_folder_id',
  as: 'root_folder',
  allowNull: false,
})

/**
 * Ensure files are always eagerly loaded with any folder
 */
Folder.addScope('defaultScope', {
  include: [
    {
      model: File,
      required: false
    }
  ]
}, {
  override:true
})

module.exports = {
  File,
  Folder,
  Project,
}
