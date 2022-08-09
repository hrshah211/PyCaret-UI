import { StyledAccordion, StyledAccordionSummary, StyledTypography } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Options from "./options/options";
import React from "react";

const Data = () => {
  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div">
            Data Load
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Options />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default Data;
