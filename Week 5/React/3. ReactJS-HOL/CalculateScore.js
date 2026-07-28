import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

  const average = props.Total / props.Goal;

  return (
    <div className="container">
      <h1>Student Management Portal</h1>

      <h3>Student Details</h3>

      <table>
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td>{props.Name}</td>
          </tr>

          <tr>
            <td><b>School</b></td>
            <td>{props.School}</td>
          </tr>

          <tr>
            <td><b>Total Marks</b></td>
            <td>{props.Total}</td>
          </tr>

          <tr>
            <td><b>No. of Subjects</b></td>
            <td>{props.Goal}</td>
          </tr>

          <tr>
            <td><b>Average Score</b></td>
            <td>{average}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculateScore;