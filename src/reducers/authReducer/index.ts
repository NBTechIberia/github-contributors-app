import { IAuthAction, IAuthState } from "./types";
import * as actionTypes from "./actionTypes";

export const authReducer = (
  state: IAuthState = {},
  action: IAuthAction
): IAuthState => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...action.payload.value,
      };
    case actionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
};
