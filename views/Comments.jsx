const React = require('react');

module.exports = function Comments({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <li className='new-comment'>{comment.comment}</li>
      ))}
    </>
  );
};
