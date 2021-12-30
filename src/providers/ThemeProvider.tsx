import { useEffect, useState } from "react";
import { createTheme, CssBaseline, Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { RootState } from "../store";
import { ISettingsState } from "../reducers/settingsReducer/types";
interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProps> = ({
  children,
}) => {
  const { mode } = useSelector<RootState, ISettingsState>(
    (state) => state.settings
  );
  const [theme, setTheme] = useState<Theme>(createTheme());

  useEffect(() => {
    setTheme(
      createTheme({
        palette: {
          mode: mode,
        },
      })
    );
  }, [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
