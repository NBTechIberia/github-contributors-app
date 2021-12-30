import { useState } from "react";
import { createTheme, CssBaseline, Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProps> = ({
  children,
}) => {
  const [theme] = useState<Theme>(createTheme());

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
