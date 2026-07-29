import React, { Component } from "react";

class Getuser extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      firstName: "",
      image: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.randomuser.me/"
      );

      const data = await response.json();

      this.setState({
        title: data.results[0].name.title,
        firstName: data.results[0].name.first,
        image: data.results[0].picture.large,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Random User Details</h1>

        <img
          src={this.state.image}
          alt="User"
        />

        <h2>
          {this.state.title}.{" "}
          {this.state.firstName}
        </h2>
      </div>
    );
  }
}

export default Getuser;