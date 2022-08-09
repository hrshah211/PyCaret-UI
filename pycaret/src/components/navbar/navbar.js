import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { StyledTypography } from "../../Styles";
import Toolbar from "@mui/material/Toolbar";

function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StyledTypography variant="h4" component="div" align="left">
            PyCaret
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default navbar;
