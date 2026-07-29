import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const referenceNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    alert(
      `Thanks ${employeeName}\n\nYour complaint has been submitted successfully.\nReference Number: ${referenceNumber}`
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div className="container">
      <h1>Ticket Raising App</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) =>
              setEmployeeName(e.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Complaint:</label>
          <textarea
            rows="5"
            value={complaint}
            onChange={(e) =>
              setComplaint(e.target.value)
            }
            required
          ></textarea>
        </div>

        <button type="submit">
          Raise Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;