import styles from "./Comment.module.css";

function Comment({ author, content, initials }) {
  return (
    <li className={styles.commentContainer}>
      <span className={styles.initialsCircle}>{initials}</span>
      <p className={styles.commentAuthor}>{author}</p>
      <p className={styles.comment}>{content}</p>
    </li>
  );
}

export default Comment;
