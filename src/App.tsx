import React from "react";
import "./App.css";
import ThemeProvider from "./themes";
import ThemeSettings from "./components/settings";
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
