import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{employee.name}</h3>
      <p>{employee.designation}</p>

      <button className={theme}>
        View Profile
      </button>
    </div>
  );
}

export default EmployeeCard;