import React, { useEffect, useState } from "react";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

import { TableBody, TableRow, TableCell } from "@mui/material";
const url = "http://localhost:5000/book";

function BookTable() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(function (result) {
        setBooks(result.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  return (
    <TableBody>
      {books.map((book) => {
        return (
          <TableRow
            key={book.book_id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="left">{book.title}</TableCell>
            <TableCell align="left">{book.author}</TableCell>
            <TableCell align="left">
              <Link to={"/student/detail/" + book.book_id}>
                <Button color="inherit">
                  <AspectRatioIcon color="info" />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default BookTable;
