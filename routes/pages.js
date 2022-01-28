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
  Page.findOne({where: { urlTitle }, include: { model: User, as: 'author' }})
    .then((page)=> {console.log(page)
      page ? res.send(page) : res.sendStatus(404)})
    .catch(next)
})

pagesRouter.get('/:urlTitle/similar', (req, res, next) => {
  let { urlTitle } = req.params
  Page.findOne({ where: { urlTitle }, include: { model: User, as: 'author' }})
    .then((page) => {
      return Page.findSimilar(page)
    })
    .then((pages) => pages ? res.send(pages) : res.sendStatus(404))
    .catch(next)
})

pagesRouter.get('/search/:tag', (req, res, next)=>{
  let { tag } = req.params
  Page.findByTag(tag)
    .then((pages)=> res.send(pages))
    .catch(next)
})

pagesRouter.delete('/:id', (req, res, next) => {
  let { id } = req.params
  Page.destroy({ where: { id } })
    .then((count) => count ? res.sendStatus(204) : res.sendStatus(404))
    .catch(err => console.log(err))
})

pagesRouter.put('/:urlTitle', (req, res, next) => {
  let {urlTitle} = req.params
  let { title, content } = req.body
  Page.update({ title, content }, { where: { urlTitle }, returning: true, plain: true})
    .then((page) => res.status(202).send(page[1].dataValues))
    .catch(next)
})

pagesRouter.post('/', (req, res, next) => {
  let { title, content, tags} = req.body //Datos de pagina
  let { name, email} = req.body //Datos de usuario
  let author
  User.findOrCreate({
    where: {email}, 
    defaults: { name, email }
  })
    .then((user, created) =>{
      author = user
      return Page.create({ title, content, tags})
    })
    .then(page => {
      page.setAuthor(author[0].dataValues.id)
      res.status(201).send(page)})
    .catch(next)
})

module.exports = pagesRouter