import React from 'react'
import {getBlogs} from "../utilities/sampleBlogs"

//rafce
const AllBlogs = () => {
  const allBlogs = getBlogs()
  return (
    <div>
        {allBlogs.map((blogs, index) => {
            console.log(blogs);
            return (
                <div
                key={`${blogs}-${index}`}
                >
                    <h2>Author: {blogs.author}</h2>
                    Date: {blogs.createdAt}
                    <h4>ID: {blogs.id}</h4>
                    <h4>Title: {blogs.title}</h4>
                    Text: {blogs.text}
                </div>
            )
        })}
    </div>
  )
}

export default AllBlogs