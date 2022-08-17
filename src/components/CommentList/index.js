import Comment from "../Comment/index.js";
import styles from "./CommentList.module.css";

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
          <div className={styles.listContainer}>
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
              initials={getInitials(comment.author)}
            />
          </div>
        );
      })}
    </ul>
  );
}

export default CommentList;
