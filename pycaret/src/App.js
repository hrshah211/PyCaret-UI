import { ThemeProvider, createTheme } from "@mui/material/styles";

import Data from "./components/data/data";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
import Setup from "./components/setup/setup";
import Store from "./store/store";
import { StyledDiv } from "./Styles";
import Visualization from "./components/visualization/visualization";

const theme = createTheme({
  typography: {
    fontFamily: ["Anaheim"],
    fontWeightRegular: 600,
  },
  palette: {
    primary: { main: '#346391' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={Store}>
        <div className="App">
          <Navbar />
          <StyledDiv pl="15" pr="15" pt="15" bgc="#ffffff">
            <Data />
            <Visualization />
            <Setup />
          </StyledDiv>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
