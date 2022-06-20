import Data from "./components/data/data";
import Navbar from "./components/navbar/navbar";
import Setup from "./components/setup/setup";
import { StyledDiv } from "./Styles";
import Visualization from "./components/visualization/visualization";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StyledDiv pl="15" pr="15" pt="15">
        <Data />
        <Visualization />
        <Setup />
      </StyledDiv>
    </div>
  );
}

export default App;
