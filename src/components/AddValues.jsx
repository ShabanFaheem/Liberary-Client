import React, { useState } from "react";
import { TextField, Zoom, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

  function handleClick() {
    props.addStudents(student);
    setStudent({
        fName: "",
        lName: ""
    })
  }

  return (
    <div className="create-note">
      <form>
        <TextField
          onClick={extanded}
          onChange={handleChange}
          id="outlined-basic"
          label={isExpand ? "First Name" : "Add Student"}
          name="fName"
          variant="outlined"
          sx={{ width: "90%", margin: "20px 10px" }}
          value = {student.fName}
        />
        {isExpand && (
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            label="Last Name"
            name="lName"
            variant="outlined"
            sx={{ width: "90%", margin: "10px" }}
            value = {student.lName}
          />
        )}
        <div className="add-button">
          <Zoom in={isExpand}>
            <Fab
              size="small"
              color="info"
              onClick={handleClick}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
}

export default AddValues;
