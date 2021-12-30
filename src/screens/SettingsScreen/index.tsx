import { Switch, Typography, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkMode,
  setLightMode,
} from "../../reducers/settingsReducer/actionCreators";
import {
  EThemeMode,
  ISettingsState,
} from "../../reducers/settingsReducer/types";
import { RootState } from "../../store";

export const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector<RootState, ISettingsState>(
    (state) => state.settings
  );
  const handleChangeThemeMode = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    target.checked ? dispatch(setDarkMode()) : dispatch(setLightMode());
  };

  return (
    <>
      <Typography variant="h2">Settings</Typography>
      <Divider />
      <Typography variant="body1">Toggle light/dark mode</Typography>
      <Switch
        onChange={handleChangeThemeMode}
        checked={mode === EThemeMode.light ? false : true}
      />
    </>
  );
};
