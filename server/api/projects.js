const router = require('express').Router()
const { Project, Folder } = require('../db/models')

module.exports = router

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const flatten = req.query.flatten === 'true'

  Project.findById(id, {
    include: [
      {
        model: Folder,
        as: 'root_folder',
        include:[
          {
            model: Folder,
            as:'descendents',
            hierarchy: !flatten
          }
        ]
      }
    ]
  })
  .then(project => res.json(project))
  .catch(next)
})
