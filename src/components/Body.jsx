import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExistingValues from "./ExistingValues";
import AddValues from "./AddValues";


function Body(props) {
  



  // function deleteStudent(id) {
  //   axios
  //     .delete(url + "/" + id)
  //     .then((response) => console.log(response.data))
  //     .catch((err) => console.log(err));
  // }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ExistingValues isBook={props.isBook}/>
        </Grid>
        <Grid item xs={4}>
          <AddValues isBook={props.isBook}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;
