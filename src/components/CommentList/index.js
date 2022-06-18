import Comment from "../Comment/index.js";

function CommentList({ comments }) {
  function getInitials(author) {
    let initials = author
      .match(/(\b\S)?/g)
      .join("")
      .toUpperCase();
    return initials;
  }
  return (
    <ul>
      {comments.map(function (comment) {
        return (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            initials={getInitials(comment.author)}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
