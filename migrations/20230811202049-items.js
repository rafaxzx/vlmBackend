"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("items", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      codeIntern: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specification: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      equipSectorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "equipSectors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      manufacturersId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "manufacturers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      trayNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trayLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      minimumStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("items");
  },
};
