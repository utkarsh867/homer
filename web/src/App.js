import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "./theme";

import Home from "./pages/home";

const App = () => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Home />
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
