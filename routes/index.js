const express = require('express')
const router = express.Router()
const pages = require('./pages.js')
const users = require('./users.js')

router.use('/users', users)
router.use('/pages', pages)



module.exports = router