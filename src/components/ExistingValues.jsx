import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

function ExistingValues(props) {
    

  return (
    <div className="create-note">
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {/* <TableCell align="left">Student Id</TableCell> */}
              <TableCell align="left"><strong>First Name</strong></TableCell>
              <TableCell align="left"><strong>Last Name</strong></TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.map((student, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{student.fName}</TableCell>
                  <TableCell align="left">{student.lName}</TableCell>
                  <TableCell align="left">
                    <DeleteForeverIcon color="info" onClick={()=>props.deleteStudent(index)}/>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExistingValues;
