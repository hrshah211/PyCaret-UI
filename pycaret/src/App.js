import Navbar from "./components/navbar/navbar";
import Setup from "./components/setup/setup";
import Data from "./components/data/data";
import { StyledDiv, StyledAccordionSummary, StyledAccordion } from "./Styles";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <StyledDiv pl="15" pr="15" pt="15">
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
            <Data />
          </AccordionDetails>
        </StyledAccordion>
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
            <AccordionDetails>
              <Setup />
            </AccordionDetails>
          </StyledAccordionSummary>
        </StyledAccordion>
      </StyledDiv>
    </div>
  );
}

export default App;
