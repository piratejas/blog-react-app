import BlogPost from "../BlogPost";
import { blog } from "../../data/blogs.js";
import Comment from "../Comment";
import CommentList from "../CommentList";
import comments from "../../data/comments.js";

function App() {
  function getInitials(author) {
    let initials = author
      .match(/(\b\S)?/g)
      .join("")
      .toUpperCase();
    return initials;
  }

  // const commentProps = {
  //   author: "Ben Jerry Lee",
  //   content: "Hello, great post",
  //   initials: "",
  // };

  return (
    <div className="App">
      <BlogPost {...blog} />
      <CommentList>
        {comments.map(function (comment) {
          return (
            <Comment
              id={comment.id}
              author={comment.author}
              content={comment.content}
              initials={getInitials(comment.author)}
            />
          );
        })}
      </CommentList>
    </div>
  );
}

export default App;
