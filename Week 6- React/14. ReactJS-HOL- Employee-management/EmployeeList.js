import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;