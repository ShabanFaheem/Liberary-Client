import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
const customStyle = {
  witdh: 30,
  margin: 1,
};

const url = "http://localhost:5000/book";

function Selector(props) {
  const [book, setBook] = React.useState("");
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
  function handleChange(event) {
    setBook(event.target.value);
    props.pickbook(event.target.value);
  }
  return (
    <Box sx={customStyle}>
      <FormControl fullWidth>
        <InputLabel id="selector">Available Book</InputLabel>
        <Select
          labelId="selector"
          id="selector"
          value={book}
          label="Awailable Books"
          onChange={handleChange}
        >
          {books.map((book) => {
            return (
              <MenuItem key={book.book_id} value={book.book_id+" "+book.title}>
                {book.book_id+" "+book.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selector;
