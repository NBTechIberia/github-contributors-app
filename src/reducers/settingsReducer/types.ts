export interface ISettingsAction {
  type: string;
}

export interface ISettingsState {
  mode: EThemeMode;
}

export enum EThemeMode {
  dark = "dark",
  light = "light",
}
