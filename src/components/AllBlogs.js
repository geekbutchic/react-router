import React from "react";
// import { blogPosts } from "../utilities/sampleBlogs";
import {useSearchParams} from "react-router-dom";
//rafce   
//http://localhost:3000/blogs/all
const AllBlogs = (props) => { 
  const [searchParams, setSearchParams] = useSearchParams();
  //http://localhost:3000/blogs/all?sortOrder=asc or desc
  const sortOrder = searchParams.get("sortOrder") || "asc"
  const sortField = searchParams.get("sortField") || "createdAt"
  const limit = Number(searchParams.get("limit")) || 10
  const page = Number(searchParams.get("page")) || 0

  //http://localhost:3000/blogs/all?sortField=id&sortOrder=desc or asc
  // sorts by =id / =title / or whatever we set in url to sort
  const compare = (a, b) => {
    //object notation - due to being a variable
    const aField = a[sortField]
    const bField = b[sortField]

    if (sortOrder.toLowerCase() === "asc") {
      if (aField < bField) {
        return -1;
      }
      if (aField > bField) {
        return 1;
      }
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (aField < bField) {
        return 1;
      }
      if (aField > bField) {
        return -1;
      }
    }
    return 0;
  }
  const blogs = props.blogPosts.sort(compare).slice(page * limit, (page * limit) + limit)
  return (
    <div>
      <h3>All Blogs</h3>
      <p>
        Sort Order : {sortOrder}
      </p>
      {blogs.map((blogs, index) => {
        console.log(blogs);
        return (
          <div key={`${blogs}-${index}`}>
            <h2>Author: {blogs.author}</h2>
            Date: {blogs.createdAt}
            <h4>ID: {blogs.id}</h4>
            <h4>Title: {blogs.title}</h4>
            Text: {blogs.text}
          </div>
        );
      })}
    </div>
  );
};

export default AllBlogs;
