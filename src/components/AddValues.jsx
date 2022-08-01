import React, { useState } from "react";
import { TextField, Zoom, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const url = "http://localhost:5000/student";
const bookUrl = "http://localhost:5000/book";

function AddValues(props) {
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
  });

  const [isExpand, setIsExpand] = useState(false);
  function extanded() {
    setIsExpand(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setStudent((preStudent) => {
      return {
        ...preStudent,
        [name]: value,
      };
    });
  }

  function addValues() {
    if (props.isBook) {
      const book = {
        title: student.fName,
        author: student.lName,
      };
      axios
        .post(bookUrl, book)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(url, student)
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    }
    setStudent({
      fName: "",
      lName: "",
    });
  }

  return (
    <div className="create-note">
      <form>
        <TextField
          onClick={extanded}
          onChange={handleChange}
          id="outlined-basic"
          label={
            props.isBook
              ? isExpand
                ? "Book Title"
                : "Add Book"
              : isExpand
              ? "First Name"
              : "Add Student"
          }
          name="fName"
          variant="outlined"
          sx={{ width: "90%", margin: "20px 10px" }}
          value={student.fName}
        />
        {isExpand && (
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            label={props.isBook ? "Author Name" : "Last Name"}
            name="lName"
            variant="outlined"
            sx={{ width: "90%", margin: "10px" }}
            value={student.lName}
          />
        )}
        <div className="add-button">
          <Zoom in={isExpand}>
            <Fab size="small" color="info" onClick={addValues}>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
}

export default AddValues;
