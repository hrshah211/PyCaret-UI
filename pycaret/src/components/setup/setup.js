import { StyledAccordion, StyledAccordionSummary } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Typography from "@mui/material/Typography";

const setup = () => {
  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div>
              <h1>Setup</h1>
            </div>
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails></AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default setup;
