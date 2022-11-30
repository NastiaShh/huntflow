const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate({ Stage, Comment }) {
      Candidate.Stage = Candidate.hasOne(Stage, { foreignKey: 'candidate_id' });
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
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};