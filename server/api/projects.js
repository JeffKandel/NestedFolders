const router = require('express').Router()
module.exports = router

router.get('/:id', (req, res, next) => {
  res.json(req.params.id)
})
