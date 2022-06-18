import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import Comment from "../Comment";
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

  function getInitials(author) {
    let initials = author
      .match(/(\b\S)?/g)
      .join("")
      .toUpperCase();
    return initials;
  }

  return (
    <div className="App">
      <BlogPost {...blog} />
      <CommentList>
        {commentList.map(function(comment) {
          return (
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
              initials={getInitials(comment.author)}
            />
          );
        })}
      </CommentList>
      <CommentForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
