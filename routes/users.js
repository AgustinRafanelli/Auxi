const express = require('express')
const usersRouter = express.Router()
const { User, Page } = require('../db/models')

usersRouter.get('/', (req, res, next)=>{
  User.findAll()
    .then((users)=> res.send(users))
    .catch(next)
})

usersRouter.get('/:id', (req, res) => {
  let { id } = req.params
  Page.findAll({where: { authorId: id }})
    .then((pages) => res.send(pages))
    .catch(next)
})

module.exports = usersRouter