'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Login.belongsTo(models.Profile)
    }
  };
  Login.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    ProfileId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Login'
  });
  return Login;
};