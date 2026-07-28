import React, { Component } from "react";

class Cart extends Component {
    render() {
        return (
            <div
                style={{
                    border: "1px solid black",
                    width: "250px",
                    margin: "10px auto",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                <h3>{this.props.itemName}</h3>

                <p>
                    <strong>Price:</strong> ₹
                    {this.props.price}
                </p>
            </div>
        );
    }
}

export default Cart;