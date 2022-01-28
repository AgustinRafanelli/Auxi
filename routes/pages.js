const express = require('express')
const pagesRouter = express.Router()
const { User, Page } = require('../db/models')

pagesRouter.get('/', (req, res, next) => {
  Page.findAll()
    .then(page => res.send(page))
    .catch(next)
})

pagesRouter.get('/:urlTitle', (req, res, next)=>{
  let { urlTitle } = req.params
  Page.findOne({where: { urlTitle }})
    .then((page)=> res.send(page))
    .catch(next)
})

pagesRouter.delete('/:id', (req, res, next) => {
  let { id } = req.params
  Page.destroy({ where: { id } })
    .then((count) => count ? res.sendStatus(204) : res.sendStatus(404))
    .catch(next)
})

pagesRouter.put('/:urlTitle', (req, res, next) => {
  let {urlTitle} = req.params
  let { title, content } = req.body
  Page.update({ title, urlTitle, content }, { where: { urlTitle }, returning: true, plain: true})
    .then((page) => res.status(202).send(page[1].dataValues))
    .catch((err) => console.log(err))
})

pagesRouter.post('/', (req, res, next) => {
  let { title, content } = req.body
  let { name, email} = req.body
  let author
  User.findOrCreate({
    where: {email}, 
    defaults: { name, email }
  })
    .then((user, created) =>{
      author = user
      return Page.create({ title, content })
    })
    .then(page => {
      page.setAuthor(author[0].dataValues.id)
      res.status(201).send(page)})
    .catch(next)
})

module.exports = pagesRouter