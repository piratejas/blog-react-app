function Comment({author, content, initials}) {
  return (
    <div className="comment-container">
      <span className="initial-circle">{initials}</span>
      <p className="comment">{content}</p>
      <p className="comment-author">{author}</p>
    </div>
  );
}

export default Comment;
