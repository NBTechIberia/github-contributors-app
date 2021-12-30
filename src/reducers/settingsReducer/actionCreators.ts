import { ACTIVATE_DARK_THEME, ACTIVATE_LIGHT_THEME } from "./actionTypes";
import { ISettingsAction } from "./types";

export const setDarkMode = (): ISettingsAction => ({
  type: ACTIVATE_DARK_THEME,
});

export const setLightMode = (): ISettingsAction => ({
  type: ACTIVATE_LIGHT_THEME,
});
