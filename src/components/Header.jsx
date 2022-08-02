import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header(props) {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: props.color }}>
        <Toolbar>
          <IconButton size="large" edge="start">
            <PersonOutlineIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to={"/" + props.content}>
              <Button color="inherit">
                {/* <a href="/student"></a> */}
                {props.content}
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
