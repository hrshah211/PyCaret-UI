import { StyledAccordion, StyledAccordionSummary, StyledTypography } from "../../Styles";

import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Plot from "react-plotly.js";
import React from "react";

const Visualization = () => {
  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div" style={{ fontWeight: 550 }}>
            Visualization
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
              { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
          />
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default Visualization;
