import React from "react";

function Guest() {
  return (
    <div>
      <h2>Welcome Guest!</h2>

      <h3>Available Flights</h3>

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

      <p>Please login to book your tickets.</p>
    </div>
  );
}

export default Guest;