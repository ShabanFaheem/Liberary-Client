import React from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import StudentTable from "./StudentTable";
import BookTable from "./BookTable";

function ExistingValues(props) {
  return (
    <div className="create-note">
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <strong>{props.isBook ? "Book Title" : "First Name"}</strong>
              </TableCell>
              <TableCell align="left">
                <strong>{props.isBook ? "Author Name" : "Last Name"}</strong>
              </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          {props.isBook ? <BookTable /> :<StudentTable />}
          
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExistingValues;
