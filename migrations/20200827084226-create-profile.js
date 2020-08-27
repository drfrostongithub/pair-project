'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      month_of_experience: {
        type: Sequelize.INTEGER
      },
      year_of_experience: {
        type: Sequelize.INTEGER
      },
      last_position: {
        type: Sequelize.STRING
      },
      last_company: {
        type: Sequelize.STRING
      },
      current_salary: {
        type: Sequelize.INTEGER
      },
      expected_salary: {
        type: Sequelize.INTEGER
      },
      availability: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};