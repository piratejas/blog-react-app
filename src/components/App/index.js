import BlogPost from '../BlogPost';
import { blog } from '../../data/blogs.js';
import Comment from '../Comment';

function App() {

  function getInitials(author) {
    let initials = author.match(/(\b\S)?/g).join("").toUpperCase();
    return initials
  }

  const commentProps = {
    author: "Ben Jerry Lee",
    content: "Hello, great post",
    initials: "",
  }

  return (
    <div className= "App">
      <BlogPost {...blog}/>
      <Comment 
      {...commentProps} initials= {getInitials(commentProps.author)}/>
    </div>
  )

}

export default App;
