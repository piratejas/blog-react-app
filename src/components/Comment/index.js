function Comment({ author, content, initials }) {
  return (
    <li className="comment-container">
      <span className="initial-circle">{initials}</span>
      <p className="comment">{content}</p>
      <p className="comment-author">{author}</p>
    </li>
  );
}

export default Comment;
