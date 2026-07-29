import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    // Name Validation
    if (name.length < 5) {
      tempErrors.name =
        "Name must be at least 5 characters.";
    }

    // Email Validation
    if (
      !email.includes("@") ||
      !email.includes(".")
    ) {
      tempErrors.email =
        "Email must contain @ and .";
    }

    // Password Validation
    if (password.length < 8) {
      tempErrors.password =
        "Password must be at least 8 characters.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h1>Mail Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <p className="error">
            {errors.name}
          </p>
        </div>

        <div className="form-group">
          <label>Email:</label>

          <input
            type="text"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <p className="error">
            {errors.email}
          </p>
        </div>

        <div className="form-group">
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <p className="error">
            {errors.password}
          </p>
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;