import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const employees = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "UI Developer",
    },
    {
      id: 3,
      name: "David Brown",
      designation: "Project Manager",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Employee Management System</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;