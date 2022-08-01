import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./Student";
import Book from "./Book";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}
export default App;
