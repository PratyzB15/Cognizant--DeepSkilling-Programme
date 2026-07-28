import React from "react";

class Post extends React.Component {
  render() {
    const { title, body } = this.props;

    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          margin: "10px",
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;