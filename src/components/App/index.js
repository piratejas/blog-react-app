import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { useState } from "react";

function App() {
  const [comments, setCommentList] = useState([
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Billy Bootcamper",
      content: "Hello, great post",
    },
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ]);

  function addComment(author, comment) {
    let newComments = [
      ...comments,
      {
        id: `${author}_${new Date().getTime()}`,
        author: author,
        content: comment,
      },
    ];
    setCommentList(newComments);
    console.log(comments);
  }

  return (
    <div className="App">
      <BlogPost {...blog} />
      <CommentList comments={comments}></CommentList>
      <CommentForm onSubmit={addComment} />
    </div>
  );
}

export default App;
