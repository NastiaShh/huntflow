const React = require('react');

module.exports = function Comments({ candidate }) {
  return (
    <>
      <h5>Комментарии:</h5>
      <ul>
        {candidate.Comments.map((comment) => (
          <li>{comment.comment}</li>
        ))}
      </ul>
    </>
  );
};
