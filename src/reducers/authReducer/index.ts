import { IAuthAction, IAuthState } from "./types";
import * as actionTypes from "./actionTypes";

export const authReducer = (state: IAuthState = {}, action: IAuthAction) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...action.payload,
      };
    case actionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
};
