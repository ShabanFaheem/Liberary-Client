import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start">
            <PersonOutlineIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Students
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Books</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
