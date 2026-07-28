import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  // Method to fetch posts
  loadPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      this.setState({
        posts: data,
      });
    } catch (error) {
      throw error;
    }
  };

  // Lifecycle Hook
  componentDidMount() {
    this.loadPosts();
  }

  // Error Handling Lifecycle Hook
  componentDidCatch(error, info) {
    alert("An error occurred: " + error.message);
    console.log("Error Info:", info);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    );
  }
}

export default Posts;