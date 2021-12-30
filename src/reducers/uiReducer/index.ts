import { IUiAction, IUiState } from "./types";
import * as actionTypes from "./actionTypes";

const initialState: IUiState = {
  loading: false,
  msgError: "",
};

export const uiReducer = (
  state: IUiState = initialState,
  action: IUiAction
): IUiState => {
  switch (action.type) {
    case actionTypes.UI_SET_ERROR:
      return {
        ...state,
        msgError: action.payload.value,
      };
    case actionTypes.UI_REMOVE_ERROR:
      return {
        ...state,
        msgError: "",
      };
    case actionTypes.UI_ACTIVATE_LOADING:
      return {
        ...state,
        loading: action.payload.value,
      };
    case actionTypes.UI_DEACTIVATE_LOADING:
      return {
        ...state,
        loading: action.payload.value,
      };
    default:
      return state;
  }
};
