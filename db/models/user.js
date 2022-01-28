const { DataTypes,  Model } = require('sequelize')
const sequelize = require('../')

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNUll: false
  },
  email: {
    type: DataTypes.STRING,
    allowNUll: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {sequelize, modelName: 'users'}) 

module.exports = User