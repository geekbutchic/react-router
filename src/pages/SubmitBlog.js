import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
//import for id = blogPosts.length ++
import { blogPosts } from "../utilities/sampleBlogs";

const SubmitBlog = () => {
  //If variables are not being used in other parts of app state can be housed within
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  // state variables above
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const redirectLocation = searchParams.get("redirect") || "blogs";
  // redirect location
  return (
    <div>
      <h1>Submit New Blog</h1>
      <p>Set Title</p>
      <input
        style={{
          height: "25px",
          width: "300px",
          borderRadius: "15px",
          textIndent: "10px",
          outline: "none",
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
          console.log("Title: ", title);
        }}
      />
      <p>Author</p>
      <input
        style={{
          height: "25px",
          width: "300px",
          borderRadius: "15px",
          textIndent: "15px",
          outline: "none",
        }}
        type="text"
        placeholder="Author"
        onChange={(e) => {
          const value = e.target.value;
          setAuthor(value);
          console.log("Description: ", author);
        }}
      />
      <p>Blog Description</p>
      <textarea
        style={{
          height: "25px",
          width: "300px",
          borderRadius: " 5px",
          textIndent: "15px",
          outline: "none",
        }}
        type="text"
        placeholder="Blog Description"
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
          console.log("Description: ", text);
        }}
      />
      <button
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "30%",
          marginTop: "20px",
          borderRadius: "15px",
          height: "30px",
          textAlign: "center",
        }}
        onClick={() => {
          const newBlogId  = blogPosts.length ++
          const newBlogPost = {
            id: newBlogId,
            createdAt: new Date().toISOString(),
            title,
            author,
            text,
          };
          blogPosts.push(newBlogPost)
          console.log(blogPosts);
          navigate(`/${redirectLocation}`);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default SubmitBlog;
