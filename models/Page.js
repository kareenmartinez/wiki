const Secualize = require('sequelize');

class Page extends Secualize.Model {
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
}, { sequelize, modelName: 'page' });


module.exports = { Page };  