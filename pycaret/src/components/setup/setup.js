import { StyledAccordion, StyledAccordionSummary, StyledTypography } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import DataTypes from "./dataTypes/dataTypes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MissingValues from "./missingValues/missingValues";
import React from "react";

const setup = () => {
  return (
    <>
      {/* https://github.com/pycaret/pycaret/blob/12b488174f0b48b01a7ea83dde96bf910677590f/pycaret/regression/functional.py */}
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div" style={{ fontWeight: 550 }}>
            Setup
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <MissingValues />
          <DataTypes />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default setup;
