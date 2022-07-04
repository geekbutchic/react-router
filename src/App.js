import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AllBlogs from "./components/AllBlogs";
import BlogPost from "./components/BlogPost";
// when using props - passings to all blogs
import { blogPosts } from "./utilities/sampleBlogs";
// import Info from './components/Info'
import "./App.css";

function App() {
  const [ allBlogs, setAllBlogs ] = useState(blogPosts)
  // if data is coming from api - best practice pass with props
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* /blogs = PARENT ROUTE - Relative Path */}
          <Route path="/blogs" element={<Blogs />}> 
            {/* Using props to pass sample blogs to all blogs */}
            <Route path="all" element={<AllBlogs blogPosts={blogPosts} />} />
            <Route path="single-blog/:blogId" element={<BlogPost />} />
          </Route>
          {/* END OF PARENT ROUTE -  */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
