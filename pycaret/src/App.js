import Data from "./components/data/data";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
import Setup from "./components/setup/setup";
import Store from "./store/store";
import { StyledDiv } from "./Styles";
import Visualization from "./components/visualization/visualization";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <StyledDiv pl="15" pr="15" pt="15" bgc="#e4f5fe">
          <Data />
          <Visualization />
          <Setup />
        </StyledDiv>
      </div>
    </Provider>
  );
}

export default App;
