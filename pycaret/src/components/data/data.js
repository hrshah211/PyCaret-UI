import { StyledAccordion, StyledAccordionSummary } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Options from "./options/options";
import React from "react";
import Typography from "@mui/material/Typography";

const Data = () => {
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
              <h1>Data Load</h1>
            </div>
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Options />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default Data;
