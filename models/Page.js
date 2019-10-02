const Sequelize = require('sequelize');
const db = require('./index').db;

class Page extends Sequelize.Model {
  get route() {
    return '/wiki/' + this.urlTitle
  }
};

Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
}, { sequelize: db, modelName: 'page' });


module.exports = { Page };  