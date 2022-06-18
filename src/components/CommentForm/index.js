import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleClick = function () {
    onSubmit(author, comment);
    setComment("");
  };

  return (
    <form>
      <label for="author">Author:</label>
      <br />
      <input
        type="text"
        id="author"
        onChange={handleAuthorChange}
        placeholder={author}
      />
      <br />
      <label for="comment">Comment:</label>
      <br />
      <input type="text" id="comment" onChange={handleCommentChange} />
      <br />
      <button
        type="submit"
        onSubmit={
          comment !== "" ? handleClick : console.log("No comment submitted")
        }
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
