import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import ExistingValues from "./ExistingValues";
import AddValues from "./AddValues";

function Body() {
  const [students, setStudents] = useState([]);

  function addStudents(newStudent) {
    console.log(students);
    setStudents((preStudent) => {
      return [...preStudent, newStudent];
    });
  }
  function deleteStudent(id){
        setStudents(preStudent=>{
            return preStudent.filter((student , index)=>{
                return index !== id;
            })
        })
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ExistingValues students={students} deleteStudent={deleteStudent}/>
        </Grid>
        <Grid item xs={4}>
          <AddValues addStudents={addStudents}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;
