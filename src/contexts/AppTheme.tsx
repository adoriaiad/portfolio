import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  Theme,
  ThemeProvider as ThemeProviderMUI,
} from "@mui/material/styles";
import React, { useContext, useEffect, useMemo, useState } from "react";

type AppThemeProps = { toggleColorMode: () => void };

const AppTheme = React.createContext({} as AppThemeProps);

export function useAppTheme() {
  return useContext(AppTheme);
}

const PORTFOLIO_THEME_MODE = "gregorio_theme_mode";

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [mode, setMode] = useState<Theme["palette"]["mode"]>(
    (localStorage.getItem(PORTFOLIO_THEME_MODE) as Theme["palette"]["mode"]) ||
      "light"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    mode && localStorage.setItem(PORTFOLIO_THEME_MODE, mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        ...(mode === "light" && {
          palette: {
            mode,
            primary: {
              main: "#332d2d",
              light: "#5B5757",
              dark: "#231F1F",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#a2918f",
              light: "#B4A7A5",
              dark: "#716564",
              contrastText: "#FFFFFF",
            },
            background: {
              default: "#FAFAFA",
              paper: "#fff",
            },
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.87)",
            },
            error: {
              main: "#F44336",
            },
            warning: {
              main: "#ff9800",
            },
          },
        }),
      }),
    [mode]
  );

  return (
    <AppTheme.Provider value={colorMode}>
      <ThemeProviderMUI theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProviderMUI>
    </AppTheme.Provider>
  );
};

export default AppThemeProvider;
