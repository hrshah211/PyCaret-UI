import { StyledAccordion, StyledAccordionSummary } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Typography from "@mui/material/Typography";

const Visualization = () => {
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
              <h1>Visualization</h1>
            </div>
          </Typography>
          <AccordionDetails></AccordionDetails>
        </StyledAccordionSummary>
      </StyledAccordion>
    </>
  );
};

export default Visualization;
