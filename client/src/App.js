import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
    const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Home />
  </ThemeProvider>
  );
}

export default App;
