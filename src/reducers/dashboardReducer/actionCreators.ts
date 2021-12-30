import { Dispatch } from "redux";
import DashboardServices from "../../services/DashboardServices";
import {
  DASHBOARD_FETCH_CONTRIBUTORS,
  DASHBOARD_LOGOUT_CLEANING,
} from "./actionTypes";
import { IContributor, IDashboardAction } from "./types";

export const loadDashboard = (
  contributors: IContributor[],
  count: number
): IDashboardAction => ({
  type: DASHBOARD_FETCH_CONTRIBUTORS,
  payload: { value: { count, contributors } },
});

export const dashboardLogout = (): IDashboardAction => ({
  type: DASHBOARD_LOGOUT_CLEANING,
  payload: { value: "" },
});

export const fetchDashboard = () => {
  return (dispatch: Dispatch) => {
    DashboardServices.getDashboard().then((response) => {
      console.log(response.data);
      dispatch(loadDashboard(response.data, response.data.length));
    });
  };
};
