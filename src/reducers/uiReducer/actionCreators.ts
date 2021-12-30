import {
  UI_ACTIVATE_LOADING,
  UI_DEACTIVATE_LOADING,
  UI_SET_ERROR,
} from "./actionTypes";
import { IUiAction } from "./types";

export const setError = (err: string): IUiAction => ({
  type: UI_SET_ERROR,
  payload: { value: err },
});

export const removeError = (): IUiAction => ({
  type: UI_SET_ERROR,
  payload: { value: null },
});

export const activateLoading = (): IUiAction => ({
  type: UI_ACTIVATE_LOADING,
  payload: { value: true },
});

export const deactivateLoading = (): IUiAction => ({
  type: UI_DEACTIVATE_LOADING,
  payload: { value: false },
});
