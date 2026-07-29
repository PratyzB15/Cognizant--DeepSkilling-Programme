import React from "react";

function User() {
  return (
    <div>
      <h2>Welcome User!</h2>

      <h3>Book Your Flight Tickets</h3>

      <table border="1" align="center">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Kolkata</td>
            <td>Delhi</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bhubaneswar</td>
            <td>Mumbai</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Bangalore</td>
            <td>Chennai</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button>Book Ticket</button>
    </div>
  );
}

export default User;