const React = require('react');

module.exports = function Comments({ candidate }) {
  return (
    <ul>
      {candidate.Comments.map((comment) => (
        <li>{comment.comment}</li>
      ))}
    </ul>
  );
};
