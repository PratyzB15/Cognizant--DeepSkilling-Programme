import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      title: "React Basics",
      author: "Jordan Walke",
    },
    {
      id: 2,
      title: "JavaScript ES6",
      author: "Brendan Eich",
    },
    {
      id: 3,
      title: "Learning Node.js",
      author: "Ryan Dahl",
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> -
            {" "}by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;