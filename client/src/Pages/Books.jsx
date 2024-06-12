import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1>UBIT BOOKS SHOP</h1>
      <h2>LISTS OF ALL COMPUTER SCIENCE BOOKS</h2>
      {books.map((book) => {
        return (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            <button>Delete</button>
            <button>Update</button>
          </div>
        );
      })}
      <button>
        <Link to="/addBook">Add New Book</Link>
      </button>
    </div>
  );
};

export default Books;
