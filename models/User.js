const Secualize = require('sequelize');

class User extends Secualize.Model {

};

User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
}, { sequelize, modelName: 'user' });

module.exports = { User };