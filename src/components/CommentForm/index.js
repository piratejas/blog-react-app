import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setComment] = useState("");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    console.log(author);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const handleClick = function () {
    onSubmit(author, comment);
    setComment("");
  };

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
      <textarea type="text" id="comment" onChange={handleCommentChange} />
      <br />
      <button
        type="submit"
        onSubmit={
          comment !== "" ? handleClick() : console.log("No comment submitted")
        }
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
