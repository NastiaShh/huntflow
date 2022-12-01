const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate({ Comment }) {
      Candidate.Comments = Candidate.hasMany(Comment, { foreignKey: 'candidate_id' });
    }
  }
  Candidate.init({
    fullname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    telegram: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cv: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    invitation_letter: DataTypes.DATE,
    screening_call: DataTypes.DATE,
    video_interview: DataTypes.DATE,
    cv_sent: DataTypes.DATE,
    interview_scheduled: DataTypes.DATE,
    offer: DataTypes.DATE,
    hired: DataTypes.DATE,
    denied: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};