import { IDashboardAction, IDashboardState } from "./types";
import * as actionTypes from "./actionTypes";

export const dashboardReducer = (
  state: IDashboardState = {},
  action: IDashboardAction
) => {
  switch (action.type) {
    case actionTypes.DASHBOARD_FETCH_CONTRIBUTORS:
      return {
        ...state,
        count: action.payload.value.count,
        contributors: action.payload.value.contributors,
      };
    case actionTypes.DASHBOARD_LOGOUT_CLEANING:
      return {};
    default:
      return state;
  }
};
