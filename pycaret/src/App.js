import Navbar from "./components/navbar/navbar";
import Setup from "./components/setup/setup";
import Data from "./components/data/data";
import { StyledDiv } from "./Styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StyledDiv pl="15">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div>
                <h1>Data Load</h1>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Data />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
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
          </AccordionSummary>
        </Accordion>
      </StyledDiv>
    </div>
  );
}

export default App;
