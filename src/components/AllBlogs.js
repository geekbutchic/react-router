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
                    Author: {blogs.author}
                    Date: {blogs.createdAt}
                    ID: {blogs.id}
                    Text: {blogs.text}
                    Title: {blogs.title}
                </div>
            )
        })}
    </div>
  )
}

export default AllBlogs