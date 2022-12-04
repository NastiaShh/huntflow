const React = require('react');

module.exports = function Comments({ comments }) {
  return (
    <ul className='comments-list'>
      {comments.map((comment) => (
        <li className='new-comment'>{comment.comment}</li>
      ))}
    </ul>
  );
};
