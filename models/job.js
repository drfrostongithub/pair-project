'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Job.hasMany(models.Profile)
      Job.belongsToMany(models.Profile , {through:models.ProfileJob})
    }
  };
  Job.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tidak boleh kosong !"
        }
      }
    },
    jumlah_pelamar: DataTypes.INTEGER,
    isTrue: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};