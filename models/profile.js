'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Profile.hasMany(models.Job)
      Profile.hasOne(models.Login)
      Profile.belongsToMany(models.Job , {through:models.ProfileJob})
    }
  };
  Profile.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    date_birth: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    skills: DataTypes.STRING,
    month_of_experience: DataTypes.INTEGER,
    year_of_experience: DataTypes.INTEGER,
    last_position: DataTypes.STRING,
    last_company: DataTypes.STRING,
    current_salary: DataTypes.INTEGER,
    expected_salary: DataTypes.INTEGER,
    availability: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};