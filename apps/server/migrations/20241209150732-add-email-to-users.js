"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false, // Add the column without UNIQUE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "email");
  },
};
