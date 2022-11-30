const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Candidate }) {
      Stage.Candidate = Stage.belongsTo(Candidate, { foreignKey: 'candidate_id' });
    }
  }
  Stage.init({
    candidate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invitation_letter: DataTypes.DATE,
    screening_call: DataTypes.DATE,
    video_interview: DataTypes.DATE,
    cv_sent: DataTypes.DATE,
    interview_scheduled: DataTypes.DATE,
    offer: DataTypes.DATE,
    hired: DataTypes.DATE,
    denied: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};