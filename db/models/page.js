const { DataTypes , Model, VIRTUAL } = require('sequelize')
const sequelize = require('../')

class Page extends Model { }

Page.init({
  title: {
    type: DataTypes.STRING,
    allowNUll: false
  },
  urlTitle:{
    type: DataTypes.STRING,
    allowNUll: false
  },
  content: {
    type: DataTypes.STRING,
    allowNUll: false
  },
  root: {
    type: DataTypes.VIRTUAL,
    get(){return `/wiki/${this.urlTitle}`}
  }
}, { sequelize, modelName: 'pages' }) 

Page.beforeValidate((page, options) => {
  page.urlTitle = page.title.replace(" ", "_");
})



module.exports = Page