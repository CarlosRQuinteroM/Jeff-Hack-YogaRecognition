import "./index.css";
import { Suspense } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import Router from "./routes/Router";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
