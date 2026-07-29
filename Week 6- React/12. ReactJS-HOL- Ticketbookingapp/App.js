import React, { Component } from "react";
import "./App.css";
import Guest from "./Guest";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = <User />;
    } else {
      page = <Guest />;
    }

    return (
      <div className="App">
        <h1>Ticket Booking Application</h1>

        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>
            Logout
          </button>
        ) : (
          <button onClick={this.handleLogin}>
            Login
          </button>
        )}

        <br />
        <br />

        {page}
      </div>
    );
  }
}

export default App;