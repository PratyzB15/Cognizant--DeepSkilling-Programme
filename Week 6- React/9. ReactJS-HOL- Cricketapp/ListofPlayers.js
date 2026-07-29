import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "Shubman Gill", score: 76 },
    { name: "KL Rahul", score: 65 },
    { name: "Rishabh Pant", score: 72 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Ravindra Jadeja", score: 84 },
    { name: "Jasprit Bumrah", score: 50 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Kuldeep Yadav", score: 60 },
    { name: "Yuzvendra Chahal", score: 78 },
  ];

  const playersBelow70 = players.filter(
    (player) => player.score < 70
  );

  return (
    <div>
      <h1>List of Players</h1>

      <h2>All Players</h2>

      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>

      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;