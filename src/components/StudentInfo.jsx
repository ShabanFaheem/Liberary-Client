import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import InfoCard from "./InfoCard";
import axios from "axios";

const url = "http://localhost:5000/book/borrowed/";

function StudentInfo(props) {
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(url + id)
      .then(function (result) {
        console.log(books);
        setBooks(result.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/student/" + id)
      .then(function (result) {
        console.log(student);
        setStudent(result.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  return (
    <div className="create-note">
      <Typography variant="h3" component="h4">
        {student[0].first_name +" "+ student[0].last_name}
      </Typography>
      <Typography variant="h6" component="h4">
        Borrow Books
      </Typography>
      {books.map((book) => {
        return (
          <InfoCard
            key={book.book_id}
            title={book.title}
            author={book.author}
            borrowDate={book.borrow_date}
            returnDate={book.return_date}
          />
        );
      })}
    </div>
  );
}

export default StudentInfo;
