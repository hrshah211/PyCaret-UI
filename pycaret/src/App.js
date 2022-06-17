import Navbar from "./components/navbar/navbar";
import Setup from "./components/setup/setup";
import Data from "./components/data/data";
import { StyledDiv } from "./Styles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StyledDiv pl="15">
        <Data />
        <Setup />
      </StyledDiv>
    </div>
  );
}

export default App;
