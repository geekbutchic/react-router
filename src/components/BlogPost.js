import {getBlogs} from "../utilities/sampleBlogs"
import { useParams } from "react-router-dom";


const BlogPost = () => {
  let params = useParams()
  console.log(params);
  const foundBlog = getBlogs().find((blog) => {
    return blog.id === parseInt(params.blogId)
  })
  return (
    <>
      <p>Title: {foundBlog.title}</p>
      <p>{foundBlog.text}</p>
      <p>Author: {foundBlog.author}</p>
      <p>ID: {foundBlog.id}</p>
      <p>Date: {foundBlog.createdAt}</p>
    </>
  );
};

export default BlogPost;

