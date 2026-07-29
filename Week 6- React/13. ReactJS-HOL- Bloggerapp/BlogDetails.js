import React from "react";

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      writer: "Pratyusha",
    },
    {
      id: 2,
      title: "Understanding JSX",
      writer: "John",
    },
    {
      id: 3,
      title: "React Hooks Guide",
      writer: "Alice",
    },
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> -
            {" "}by {blog.writer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;