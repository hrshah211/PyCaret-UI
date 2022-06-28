import { StyledAccordion, StyledAccordionSummary } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MissingValues from "./missing_values/missingValues";
import React from "react";
import Typography from "@mui/material/Typography";

const setup = () => {
  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" component="div">
            Setup
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <MissingValues />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default setup;
