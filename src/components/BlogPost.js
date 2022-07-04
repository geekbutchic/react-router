import { blogPosts } from "../utilities/sampleBlogs";
import { useParams } from "react-router-dom";

//http://localhost:3000/blogs/singleBlog/2
const BlogPost = () => {
  let params = useParams();
  console.log(params); 
  const foundBlog = blogPosts.find((blog) => {
    // .find returns blog object
    // params comes in as string and needs to be converted to a number
    return blog.id === parseInt(params.blogId);
  });
  return ( 
    // {foundBlog} 
    <div>
      <p>Title: {foundBlog.title}</p>
      <p>{foundBlog.text}</p>
      <p>Author : {foundBlog.author}</p>
      <p>ID: {foundBlog.id}</p>
      <p>Date: {foundBlog.createdAt}</p>
    </div>
  );
};

export default BlogPost;
