import React, { Component } from "react";

class EventExamples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  sayHello = () => {
    alert("Hello! Have a great day!");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <h1>Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() =>
            this.sayWelcome(
              "Welcome to React Event Handling!"
            )
          }
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleSyntheticEvent}>
          OnPress
        </button>
      </div>
    );
  }
}

export default EventExamples;