import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  console.log(book)
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/books' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    const data = await response.json()
    console.log(data)
    navigate('/')
  };
  return (
    <form action="">
      <h1>Add New Book</h1>
      <label htmlFor="">Book Title</label>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="">Book Description</label>
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <label htmlFor="">Book Price</label>
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <label htmlFor="">Book Cover</label>
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
};

export default AddBook;
