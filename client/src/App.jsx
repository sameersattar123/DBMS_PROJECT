import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import UpdateBook from "./Pages/UpdateBook";
import AddBook from "./Pages/AddBook";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/updateBook/:id" element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
