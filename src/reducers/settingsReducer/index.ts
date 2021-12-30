import { EThemeMode, ISettingsAction, ISettingsState } from "./types";
import * as actionTypes from "./actionTypes";

const initialState: ISettingsState = {
  mode: EThemeMode.light,
};

export const settingsReducer = (
  state: ISettingsState = initialState,
  action: ISettingsAction
) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_DARK_THEME:
      return {
        ...state,
        mode: EThemeMode.dark,
      };
    case actionTypes.ACTIVATE_LIGHT_THEME:
      return {
        ...state,
        mode: EThemeMode.light,
      };
    default:
      return state;
  }
};
