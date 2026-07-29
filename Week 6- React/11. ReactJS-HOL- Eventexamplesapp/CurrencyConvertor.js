import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rupees: "",
      euros: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      rupees: event.target.value,
    });
  };

  handleSubmit = () => {
    const euroValue =
      (parseFloat(this.state.rupees) / 90).toFixed(2);

    this.setState({
      euros: euroValue,
    });
  };

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <h1>Currency Convertor</h1>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.handleSubmit}>
          Convert
        </button>

        <h2>
          Euros: €{this.state.euros}
        </h2>
      </div>
    );
  }
}

export default CurrencyConvertor;