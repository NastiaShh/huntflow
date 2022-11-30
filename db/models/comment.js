const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Candidate }) {
      Comment.Candidate = Comment.belongsTo(Candidate, { foreignKey: 'candidate_id' });
    }
  }
  Comment.init({
    candidate_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};