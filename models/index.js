var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wiki', {
  logging: false
});


// var a = require('./User');
// var b = require('./Page');

module.exports = { db }