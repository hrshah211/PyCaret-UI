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
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" component="div">
            Data Load
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
