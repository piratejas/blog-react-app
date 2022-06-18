import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import CommentList from "../CommentList";
import comments from "../../data/comments.js";
import CommentForm from "../CommentForm";
import { useState } from "react";

function App() {
  const [commentList, setCommentList] = useState([...comments]);

  function onSubmit(author, comment) {
    let newComments = [
      ...comments,
      {
        id: `${author}_${new Date().getTime()}`,
        author: author,
        content: comment,
      },
    ];
    setCommentList(newComments);
    console.log(commentList);
  }

  return (
    <div className="App">
      <BlogPost {...blog} />
      <CommentList comments={commentList}></CommentList>
      <CommentForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
