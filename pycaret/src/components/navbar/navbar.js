import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="left"
            sx={{ flexGrow: 1 }}
          >
            PyCaret
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default navbar;
