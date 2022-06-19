import { useState } from "react";

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
      let textArea = document.querySelector("#comment");
      textArea.value = "";
    } else {
      alert(`No comment submitted`);
    }
  }

  return (
    <form>
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
  );
}

export default CommentForm;
