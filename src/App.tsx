import React from "react";
import "./App.css";
import AppThemeProvider from "./contexts/AppTheme";
import Routes from "./routes/Routes";

function App() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}

export default App;
