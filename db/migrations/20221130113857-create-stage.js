'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      invitation_letter: {
        type: Sequelize.DATE
      },
      screening_call: {
        type: Sequelize.DATE
      },
      video_interview: {
        type: Sequelize.DATE
      },
      cv_sent: {
        type: Sequelize.DATE
      },
      interview_scheduled: {
        type: Sequelize.DATE
      },
      offer: {
        type: Sequelize.DATE
      },
      hired: {
        type: Sequelize.DATE
      },
      denied: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stages');
  }
};