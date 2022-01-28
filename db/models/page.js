const { DataTypes , Model, Op } = require('sequelize')
const sequelize = require('../')
const User = require('./user')

class Page extends Model { 
  static findByTag = function (tag) {
    return Page.findAll({ where: { tags: { [Op.overlap] : [tag] }}});
  };

  static findSimilar = function (page) {
    let send = []
    return Page.findAll({ where: { 
      id:   { [Op.not]: page.id }, 
      tags: { [Op.overlap]: page.tags } 
    }})
  }
}

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
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    set: function (tags) {
      tags = tags || [];
      if (typeof tags === "string") tags = tags.split(",").map(str => str.trim())
      this.setDataValue("tags", tags);
    }
  },
  route: {
    type: DataTypes.VIRTUAL,
    get(){return `/wiki/${this.urlTitle}`}
  }
}, { sequelize, modelName: 'pages' }) 

Page.beforeValidate((page, options) => {
  page.urlTitle = page.title.replace(" ", "_");
})

module.exports = Page