import { StyledAccordion, StyledAccordionSummary, StyledTypography } from "../../styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import DataTypes from "./dataTypes/dataTypes";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MissingValues from "./missingValues/missingValues";
import React from "react";

const setup = () => {
  return (
    <>
      {/* https://github.com/pycaret/pycaret/blob/12b488174f0b48b01a7ea83dde96bf910677590f/pycaret/regression/functional.py */}
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div">
            Setup
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <DataTypes />
          <Divider />
          <MissingValues />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default setup;
