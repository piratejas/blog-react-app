import { useState } from "react";
import styles from "./CommentForm.module.css";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    //console.log(author);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    //console.log(comment);
  };

  function handleClick() {
    if (comment !== "") {
      onSubmit(author, comment);
      setComment("");
      let textArea = document.querySelector("#comment");
      textArea.value = "";
    } else {
      alert(`No comment submitted`);
    }
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          onChange={handleAuthorChange}
          placeholder={author}
        />
        <br />
        <label htmlFor="comment">Comment:</label>
        <br />
        <textarea
          type="text"
          id="comment"
          onChange={handleCommentChange}
          placeholder={""}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
