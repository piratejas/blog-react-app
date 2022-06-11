function Comment({author, content, initials}) {
  return (
    <div className="comment-container">
      <p className="initial-circle">{initials}</p>
      <p className="comment">{content}</p>
      <p className="comment-author">{author}</p>
    </div>
  );
}

export default Comment;
