import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './Pages/Books'
import AddBook from './Pages/AddBook'
import Update from './Pages/Update'

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App