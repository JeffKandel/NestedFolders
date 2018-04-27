const router = require('express').Router()
const { Project, Folder } = require('../db/models')

module.exports = router

router.get('/:id', (req, res, next) => {
  const { id } = req.params

  Project.findById(id, {
    include: [
      {
        model: Folder,
        as: 'root_folder'
      }
    ]
  })
  .then(project => res.json(project))
  .catch(next)
})
