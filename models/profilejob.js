'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileJob extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProfileJob.belongsTo(models.Job)
      ProfileJob.belongsTo(models.Profile)

    }
  };
  ProfileJob.init({
    ProfileId: DataTypes.INTEGER,
    JobId: DataTypes.INTEGER,
    status : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProfileJob',
  });
  return ProfileJob;
};