import "./App.css";

function App() {
  const officeSpaces = [
    {
      id: 1,
      name: "Tech Park Office",
      rent: 55000,
      address: "Salt Lake, Kolkata",
    },
    {
      id: 2,
      name: "Corporate Hub",
      rent: 75000,
      address: "Bhubaneswar, Odisha",
    },
    {
      id: 3,
      name: "Business Center",
      rent: 62000,
      address: "Bangalore, Karnataka",
    },
    {
      id: 4,
      name: "Startup Space",
      rent: 45000,
      address: "Hyderabad, Telangana",
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="500"
        height="300"
      />

      <br />
      <br />

      <div className="office-container">
        {officeSpaces.map((office) => (
          <div key={office.id} className="card">
            <h2>{office.name}</h2>

            <p>
              <strong>Address:</strong> {office.address}
            </p>

            <p>
              <strong>Rent:</strong>
              <span
                style={{
                  color:
                    office.rent < 60000
                      ? "red"
                      : "green",
                  fontWeight: "bold",
                }}
              >
                {" "}
                ₹{office.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;