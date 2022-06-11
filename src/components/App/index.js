import BlogPost from '../BlogPost';
import { blog } from '../../data/blogs.js';

function App() {

  return (
    <div className= "App">
      <BlogPost {...blog}/>
    </div>
  )

}

export default App;
