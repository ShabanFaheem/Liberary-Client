import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./Student";
import Book from "./Book";
import StudentDetail from "./StudentDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/book" element={<Book />} />
        <Route path="/student/detail/:id" element={<StudentDetail />}/>
        <Route path="/book/detail/:id" element={<StudentDetail />}/>
      </Routes>
    </Router>
  );
}
export default App;
