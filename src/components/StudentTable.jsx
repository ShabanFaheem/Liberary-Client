import React, { useEffect, useState } from "react";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { Link } from "react-router-dom";
import axios from "axios";

import { TableBody, TableRow, TableCell } from "@mui/material";
const url = "http://localhost:5000/student";

function StudentTable() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(function (result) {
        setStudents(result.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  return (
    <TableBody>
      {students.map((student) => {
        return (
          <TableRow
            key={student.student_id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="left">{student.first_name}</TableCell>
            <TableCell align="left">{student.last_name}</TableCell>
            <TableCell align="left">
              <Link to={"/student/detail/" + student.student_id}>
                <AspectRatioIcon color="info" />
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default StudentTable;
