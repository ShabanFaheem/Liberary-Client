import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StudentInfo from "./StudentInfo";
import BorrowBook from "./BorrowBook";


function DetailBody(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <StudentInfo />
        </Grid>
        <Grid item xs={4}>
          <BorrowBook />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailBody;
